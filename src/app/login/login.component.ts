import {Component, Inject, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(@Inject('profileService') private profileService: ProfileService,
              private router: Router) { }

  error: any;
  errorEnter: any;


  name: any;

  password: any;
  email: any;
  evt : any;
  user: any;

  dto = {
    password : '',
    email : '',
    role : ''
  };

  enter() {
      this.profileService.signIn(this.dto).subscribe( (res) => {
        const _uri = res['role'] + '/' + res['id'];
        localStorage.setItem('token', res['token'] );
        this.router.navigate( [ _uri ] );

      }, (err) => {
        console.log(err);
        this.errorEnter = err.error.message;
      });

  }


  scrollToEnter() {
    const elem = document.getElementById('signin');
    elem.scrollIntoView();
  }
  async register() {
    this.user = {
      name  : this.name,
      password  : this.password,
      email     : this.email
    };

    try {

      const res = await this.profileService.register( this.user, this.evt + '/');
      this.scrollToEnter();
      console.log(res);

    } catch (e) {

      this.error = e.error.message;
      console.log(e);
    }

  }


  ngOnInit() {
    localStorage.clear();
  }

}
