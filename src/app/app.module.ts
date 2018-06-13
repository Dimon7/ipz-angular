import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {StudentService} from '../services/student/student.service';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {ProfileService} from '../services/profile.service';
import { TeacherComponent } from './teacher/teacher.component';
import {TeacherService} from '../services/teacher/teacher.service';
import { HeaderComponent } from './header/header.component';
import { SecretaryComponent } from './secretary/secretary.component';
import {SecretaryService} from '../services/secretary/secretary.service';
import {SubjectService} from '../services/subject/subject.service';
import { FormComponent } from './form/form.component';
import {TeamService} from '../services/team/team.service';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import {ExamService} from '../services/exam/exam-service';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCard, MatCardContent, MatCardModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ExamWindowComponent } from './exam-window/exam-window.component';
import { MarksPipe } from './marks.pipe';
import { SubjectWindowComponent } from './subject-window/subject-window.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StudentWindowComponent } from './student-window/student-window.component';
import { SubjectsPipe } from './subjects.pipe';
import { TeamPipe } from './team.pipe';
import { TeacherPipe } from './teacher.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchPipe } from './search.pipe';
import {SpinnerModule} from 'angular2-spinner/dist';
import {Http} from '@angular/http';
import { SummaryWindowComponent } from './summary-window/summary-window.component';

const appRoutes: Routes = [

  { path: 'student/:id',  component: StudentComponent },
  { path: 'teacher/:id', component: TeacherComponent },
  { path: 'secretary/:id', component: SecretaryComponent },

  { path: 'signup', component: LoginComponent },
  { path: '', component: LoginComponent },

  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  declarations: [
    AppComponent,

    StudentComponent,

    LoginComponent,

    TeacherComponent,

    HeaderComponent,

    SecretaryComponent,

    FormComponent,

    ModalWindowComponent,

    ExamWindowComponent,

    MarksPipe,

    SubjectWindowComponent,

    StudentWindowComponent,

    SubjectsPipe,

    TeamPipe,

    TeacherPipe,

    NotFoundComponent,

    SearchPipe,

    SummaryWindowComponent,

  ],
  imports: [

    SpinnerModule,

    RouterModule.forRoot(appRoutes),
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCardModule,

    MatInputModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {provide : 'studentService', useClass: StudentService},
    {provide : 'profileService', useClass: ProfileService},
    {provide : 'teacherService', useClass: TeacherService},
    {provide : 'secretaryService', useClass: SecretaryService},
    {provide : 'subjectService', useClass: SubjectService},
    {provide : 'teamService', useClass: TeamService},
    {provide : 'examService', useClass: ExamService}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
