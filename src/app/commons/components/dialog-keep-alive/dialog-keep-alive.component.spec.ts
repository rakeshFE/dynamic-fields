import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogKeepAliveComponent } from './dialog-keep-alive.component';

describe('DialogKeepAliveComponent', () => {
  let component: DialogKeepAliveComponent;
  let fixture: ComponentFixture<DialogKeepAliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogKeepAliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogKeepAliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
