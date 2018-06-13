import {Component, Inject,  OnInit} from '@angular/core';
import {StudentService} from '../../services/student/student.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {ExamService} from '../../services/exam/exam-service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public student: any;
  private id: any;

  public  exams: any;

  constructor(@Inject('studentService') private studentService: StudentService,
              @Inject('examService') private examService: ExamService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log("id" + this.id);

    this.getStudent();


  }


  async getExams() {
    this.exams = await this.examService.getExamsByStudent(this.id);

    console.log('Exams ', this.exams);
  }

  async getStudent() {
      try {
        this.student = await this.studentService.getStudent(this.id);
        console.log(this.student);
        this.getExams();
      } catch (e){
        this.router.navigateByUrl('404');
      }
    }

}
