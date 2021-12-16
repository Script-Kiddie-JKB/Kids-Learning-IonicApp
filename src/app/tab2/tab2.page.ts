import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
public data=[];
  constructor() {}
  ionViewWillEnter(){
    this.data=[{

        name: 'jacky',
        src:'https://images.pexels.com/photos/1485630/pexels-photo-1485630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },{

        name: 'jacky1',
        src:'https://images.pexels.com/photos/208674/pexels-photo-208674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
      },{

        nam3: 'jacky',
        src:'https://images.pexels.com/photos/36006/renaissance-schallaburg-figures-facade.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },{

        name: 'jacky',
        src:'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      },{

        name: 'jacky',
        src:'https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
      },{

        nam3: 'jacky',
        src:'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }];
    }
}
