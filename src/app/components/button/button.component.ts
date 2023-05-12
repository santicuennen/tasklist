import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  
  @Input() text:string = ""
  @Input() color:string = ""
  @Output() BtnClick = new EventEmitter()


  onClick(){
    this.BtnClick.emit(); 
    console.log("button emite el evento hacia header (se ejecuta despues)");
  }
}
