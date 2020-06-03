import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../../services/authentication-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-keep-alive',
  templateUrl: './dialog-keep-alive.component.html',
  styleUrls: ['./dialog-keep-alive.component.css']
})
export class DialogKeepAliveComponent implements OnInit {

  constructor(private authenticationServiceService: AuthenticationServiceService,
    private router: Router, public dialogRef: MatDialogRef<DialogKeepAliveComponent>
  ) { }
  public returnUrl: string = '/login';
  ngOnInit(): void {
  }

  logout() {
    this.authenticationServiceService.logout();
    this.router.navigate([this.returnUrl]);
    this.dialogRef.close();
  }

  stay() {
    // not implemented
  }

}
