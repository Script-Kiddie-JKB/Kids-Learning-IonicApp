import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
public data=[];
  constructor() {}
ionViewWillEnter(){
this.data=[{

    name: 'jacky',
    src:'../assets/1.png'
  },

  {

    name: 'jacky',
    src:'../assets/2.png'
  },{

    name: 'jacky',
    src:'../assets/3.png'
  },{

    name: 'jacky',
    src:'../assets/4.png'
  },{

    name: 'jacky',
    src:'../assets/5.png'
  },{

    nam3: 'jacky',
    src:'../assets/6.png'
  },
  {

    name: 'jacky',
    src:'../assets/7.png'
  },{

    name: 'jacky',
    src:'../assets/8.png'
  },{

    name: 'jacky',
    src:'../assets/9.png'
  },
  {

    name: 'jacky',
    src:'../assets/10.png'
  }


];
}
}
