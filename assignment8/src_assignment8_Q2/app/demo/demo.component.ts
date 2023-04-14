import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  @Output() public Myevent = new EventEmitter()
  @Input() public MessageFromParent = ""

  public SendMessage(){
    this.Myevent.emit("Hello Parent Component")
  }
}
