import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1; 

  constructor(private router: Router) { 
    this.navLinks = [
      {
          label: 'All Data',
          link: './all',
          index: 0
      }, {
          label: 'Column Names',
          link: './columns',
          index: 1
      }, {
          label: 'Third',
          link: '/third',
          index: 2
      }, 
  ];
  }

  ngOnInit() {
    
  }

}
