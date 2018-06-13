import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../services/student/student.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, @Inject('studentService') private studentService: StudentService) {}
}
