import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loader;
  constructor(private au: AuthService) {
    this.au.loader.subscribe(res => {
      this.loader = res;
    })
  }

  ngOnInit(): void {
  }

}
