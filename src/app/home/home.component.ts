import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { ItemBean } from '../commons/interfaces';
import { AuthenticationServiceService } from '../commons/services/authentication-service.service';
import { Router } from '@angular/router';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DialogKeepAliveComponent } from '../commons/components/dialog-keep-alive/dialog-keep-alive.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public randomItems: ItemBean[] = [];
  public returnUrl: string = '/login';
  public selectedId: number = 0;
  public idleState = 'Not started.';
  public timedOut = false;
  public lastPing?: Date = null;
  private dialogRef;
  constructor(private itemService: ItemsService,
    private router: Router,
    private authenticationServiceService: AuthenticationServiceService,
    private idle: Idle, private keepalive: Keepalive,
    public dialog: MatDialog
  ) {
    this.setIdleTime();
  }

  ngOnInit(): void {
    this.itemService.getRandomItems().subscribe((result) => {
      this.randomItems = result;
    })
  }

  logout() {
    this.authenticationServiceService.logout();
    this.router.navigate([this.returnUrl]);
  }

  goToDynamicForms(event, id) {
    event.preventDefault();
    this.selectedId = id;
    if (this.selectedId) { }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(DialogKeepAliveComponent);   
  }

  setIdleTime() {
    this.idle.setIdle(300);
    this.idle.setTimeout(15);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.'
      this.reset();
    });

    this.idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.router.navigate(['/login']);
    });

    this.idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!';    
      this.openDialog();
    });

    this.idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!';     
    });

    // sets the ping interval to 15 seconds
    this.keepalive.interval(15);

    this.keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.authenticationServiceService.getUserLoggedIn().subscribe(userLoggedIn => {
      if (userLoggedIn) {
        this.idle.watch()
        this.timedOut = false;
      } else {
        this.idle.stop();
      }
    })
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  ngOnDestroy() {
    this.authenticationServiceService.logout();
    this.dialogRef.close();
  }

}
