import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Output() public Mymsg = new EventEmitter()
public textdata : string = ""
public SendMessage(){
  this.Mymsg.emit(this.textdata)
}
}
