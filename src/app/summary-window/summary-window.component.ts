import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-summary-window',
  templateUrl: './summary-window.component.html',
  styleUrls: ['./summary-window.component.scss']
})
export class SummaryWindowComponent implements OnInit {


  @Input() result;
  @Output() closeWindow = new EventEmitter();

  constructor() { }


  close() {
    this.closeWindow.emit( );
  }

  ngOnInit() {
  }

}
