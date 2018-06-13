import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-subject-window',
  templateUrl: './subject-window.component.html',
  styleUrls: ['./subject-window.component.scss']
})
export class SubjectWindowComponent implements OnInit {


  @Input() subjects;
  @Output() closeWindow = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeWindow.emit( false );
  }

}
