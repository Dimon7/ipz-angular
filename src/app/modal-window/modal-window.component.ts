import {Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})



export class ModalWindowComponent implements OnInit {



  @Input() teams;
  @Input() studentsWithoutTeam;
  @Input() studentsWithTeam;
  @Output() mathStudentTeam = new EventEmitter();
  @Output() closeWindow = new EventEmitter();

  selectedStudents = [];
  selectedTeam: any;

  query: any;
  constructor() {
  }

  ngOnInit() {}



  close() {
    this.closeWindow.emit( );
  }


  lol() {
    const unique = document.getElementsByClassName('unique');

    for ( let i = 0; i < unique.length; i++) {
      unique[i].classList.remove('red');
    }

    const elems = document.getElementsByClassName( this.selectedTeam );
    for (let i = 0; i < elems.length; i++ ) {
      elems[i].classList.add('red');
    }

  }
  match() {
    const elems =  document.getElementsByClassName('selected') as HTMLCollectionOf<HTMLInputElement>;
    for(let i=0; i<elems.length; i++) {
      if( elems[i].checked ) {
        this.selectedStudents.push(this.studentsWithoutTeam[i].id);
      }
    }
    console.log( 'st ', this.selectedStudents );

   this.mathStudentTeam.emit({
      students: this.selectedStudents,
      team: +this.selectedTeam // strToInt
    });

    this.selectedStudents = [];
  }


}


