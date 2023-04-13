import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public str = "Marvellous Infosystem"
  Upper(){
    this.str = this.str.toUpperCase()
  }
  Lower(){
    this.str = this.str.toLowerCase()
  }
}
