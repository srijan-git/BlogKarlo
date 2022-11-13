import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild(MatSidenav) sidevav: MatSidenav;

  constructor(private observer: BreakpointObserver) { }
  active = false;

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:800px)']).subscribe(res => {
      if (res.matches) {
        this.sidevav.mode = 'over';
        this.sidevav.close();
      } else {
        this.sidevav.mode = 'side';
        this.sidevav.open();
      }
    })
  }

}
