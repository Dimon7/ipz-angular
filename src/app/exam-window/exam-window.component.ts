import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-exam-window',
  templateUrl: './exam-window.component.html',
  styleUrls: ['./exam-window.component.scss'],

  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.3, .3, .3)' }))
      ])
    ])
  ]

})
export class ExamWindowComponent implements OnInit {


  sortBySubject = '*';
  sortByTeam = '*';
  sortByTeacher = '*';


  @Input() teams;
  @Input() subjects;
  @Input() exams;
  @Input() teachers;
  @Output() closeWindow = new EventEmitter();



  constructor() { }

  ngOnInit() {}



  close() {
    this.closeWindow.emit( false );
  }


}
