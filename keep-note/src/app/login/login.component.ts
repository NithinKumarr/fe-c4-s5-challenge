import { Component } from '@angular/core';
import { RouteService } from '../route.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  code:string='';
  constructor(private auth:AuthService,private route:RouteService){}
  loginCheck(){
    if(this.auth.login(this.code))
    {
      this.route.toHome();
    }
    else{
      alert("You have Entered Wrong Login Id Name");
    }
  }
}
