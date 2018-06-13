import {Component, Inject, OnInit} from '@angular/core';
import {TeacherService} from '../../services/teacher/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SecretaryService} from '../../services/secretary/secretary.service';
import {SubjectService} from '../../services/subject/subject.service';
import {TeamService} from '../../services/team/team.service';
import {StudentService} from '../../services/student/student.service';
import {ExamService} from '../../services/exam/exam-service';

import {Dtos} from '../dtos';


@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.scss'],



})
export class SecretaryComponent implements OnInit {

  public secretary: any;
  private id: any;

  spinnerColor = '#E3F2FD';
  loading =  false;

  teachers: any;
  students: any;
  subjects: any;
  exams: any;
  teams: any;

  showSummaryWindow = false;
  showWindow = false;
  showExamWindow = false;
  showSubjectWindow = false;

  studentsWithTeam = [];
  studentsWithoutTeam = [];
  public  dt: Dtos;

  error: any;


  constructor(@Inject('secretaryService')   private secretaryService: SecretaryService,
              @Inject('teacherService')     private teacherService: TeacherService,
              @Inject('subjectService')     private subjectService: SubjectService,
              @Inject('teamService')        private teamService: TeamService,
              @Inject('studentService')     private studentService: StudentService,
              @Inject('examService')        private examService: ExamService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.dt = new Dtos();
    this.id = this.route.snapshot.params.id;

    console.log(
      'secretarycomponent', localStorage.getItem('token')
    );

    this.getSecretary();


  }


  show = false;

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }

  sum;
  async summary() {
    this.sum = await this.examService.Summary();
    this.showSummaryWindow = true;
    console.log( "Summary ", this.sum );
  }

  async getSecretary() {
    try {
      this.secretary = await this.secretaryService.getSecretary(this.id);

      this.getAllSubject();
      this.getAllTeacher();
      this.getAllTeam();
      this.getAllStudents();
      this.getAllExams();

    } catch (e){
      this.router.navigateByUrl('404');
    }

  }
  async getAllExams() {
    this.exams = await this.examService.getAllExams();
    console.log('Exams', this.exams);
  }

  async match(obj) {

    console.log('OBJ', obj);

    this.dt.editStudentDTO.ids = obj.students;
    this.dt.editStudentDTO.idteam = obj.team;

    console.log( 'DTO ', this.dt.editStudentDTO );

    await this.studentService.editStudent( this.dt.editStudentDTO );

    this.getAllStudents();

  }

  async getAllStudents() {
    this.studentsWithTeam = [];
    this.studentsWithoutTeam = [];

    this.students = await this.studentService.getAll();

    for (const entry of this.students) {
      if (entry.teamNumber) {
        this.studentsWithTeam.push(entry);

      } else {
        this.studentsWithoutTeam.push(entry);
      }

    }
  }


  async getAllTeacher() {
    this.teachers = await this.teacherService.getAllTeacher();
    console.log('Teachers ', this.teachers);

  }

  async getAllSubject() {
    this.subjects = await this.subjectService.getAll();
    console.log('Subjects ', this.subjects);
  }


  async addTeam() {
    console.log( "id ", this.id );
    this.loading = true;
    try {
      console.log('Team', await this.teamService.addTeam(this.dt.teamDTO, this.id));
    } catch (err){
      this.error = err.error.message;
      console.log(err);
    }
    this.getAllTeam();
    this.loading = false;
  }

  async getAllTeam() {
    this.teams = await this.teamService.getAll();
    console.log('Teams', this.teams);
  }

  async addSubject() {
    console.log(this.dt.subjectDTO);
    console.log('Sub', await this.subjectService.addSubject(this.dt.subjectDTO, this.id) );
    this.getAllSubject();
  }


  async addExam() {

    const elem = document.getElementById('addExam');
    elem.style.alignSelf = 'center';
    this.dt.examDTO.date = this.dt.examDTO.date.toString();
    try {
      console.log('Exam', await this.examService.addExam(this.dt.examDTO));
      this.error = undefined;
    } catch (e) {
      console.log(e);
      this.error = e.error.message;
    }

    this.getAllExams();

    elem.classList.add('aut');
  }

}
