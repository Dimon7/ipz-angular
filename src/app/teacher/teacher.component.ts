import {Component, Inject, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {TeacherService} from '../../services/teacher/teacher.service';
import {SubjectService} from '../../services/subject/subject.service';
import {ExamService} from '../../services/exam/exam-service';
import {Dtos} from '../dtos';
import {_catch} from 'rxjs/operator/catch';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  public teacher: any;
  private id: any;
  sortBySubject = '*';
  sortByTeam = '*';

  spinner = new Array();

  private exams: any;
  private teams : any;
  private subjects: any;

  public dt: Dtos;

  private error: any;

  constructor(@Inject('teacherService') private teacherService: TeacherService,
              @Inject('subjectService') private subjectService: SubjectService,
              @Inject('examService')    private examService: ExamService,
                                        private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.dt = new Dtos();

    this.id = this.route.snapshot.params.id;

    this.getTeacher();


  }

  async getTeacher(){
    try {
      this.teacher  = await this.teacherService.getTeacher(this.id);
      this.getExamsByTeacher();
    }
    catch(e){
      this.router.navigateByUrl('404');

    }
  }


  async getExamsByTeacher() {

    this.exams = await this.examService.getExamsByTeacher( this.id );
    this.teams = this.exams[0].teams;
    this.subjects = this.exams[0].subjects;
    console.log('Exams => ', this.exams);
  }


  async edit(id, g, i) {

    this.spinner[i] = true;
    this.dt.examDTO.id = id;
    if (g < 0 || g > 100) {
      this.error = "Invalid grade";
      this.spinner[i] = false;
    } else {
      this.error = null;
      this.dt.examDTO.grade = g;
      console.log(this.dt.examDTO);
      console.log('Exam => ', await this.examService.editExam(this.dt.examDTO, this.id));
      this.spinner[i] = false;
   }

  }

}
