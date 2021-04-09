import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  getText:String = '';
  name2 = 'fenil';
  disableBox=true
  getName(name:String){
    console.log(name);
    this.getText = name
  };
  enableBox(){
    this.disableBox = !this.disableBox;
  }
}
// events
// click events
// keyup event
// keyup with enter and space
// keydown
// blur
// mouseover and mouseleave
// get value on textbox 