import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  constructor() {   }
  urlVariable = '';
  selectedLocation = '';
  locations = ['Bellevue','Covington','Federal Way','Mill Creek','Northgate'];
  
  ngOnInit() {
    console.log("ngOnInit - enter")
  }

  onClick(location): void {
    console.log("onSelect - enter")
    this.selectedLocation = location;
    this.urlVariable = '../assets/' + location.replace(/\s+/g, '').toLowerCase() + '.jpg';
    console.log('url: ' + this.urlVariable );
  }

  foo(location): void {
    console.log("foo - enter")
  }


}

