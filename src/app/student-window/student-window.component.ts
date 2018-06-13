import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-student-window',
  templateUrl: './student-window.component.html',
  styleUrls: ['./student-window.component.scss']
})
export class StudentWindowComponent implements OnInit {

  @Input() exams;
  @Output() closeWindow = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  close() {
    this.closeWindow.emit( false );
  }


}
