import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  name = "";
  incrementCounter(){
    this.counter = this.counter+1;
  }
  setValue(value){
    this.name = value;
    console.log(this.name);

  }
}
