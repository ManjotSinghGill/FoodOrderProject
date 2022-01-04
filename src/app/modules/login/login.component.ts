import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  baseUrl = environment.baseUrl;
  isLogged: any;
  phone:any = '';
  token: any;
  phoneNumber: any;
  OneTimePass: any;
  tempData: any;
  data: any ={
    phone: "",
    otp: ""
  };
  constructor(private http: HttpClient, public router:Router){}
  
    
  ngOnInit(): void {
    this.isLogged = localStorage.getItem('isLogged');
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
  
  send_otp(){
    this.phoneNumber = document.getElementById('mobile');
    this.data.phone = this.phoneNumber.value;
    this.data.otp = '123456';

    let url = this.baseUrl + "/customer/send_otp/?phone=" + this.data.phone;
    this.http.get(url,).subscribe( res => {
      console.log(res);
    })
  }

  login(){
    let url = this.baseUrl + '/customer/login/?phone=' + this.data.phone + '&otp=123456';;
    this.http.post(url,this.data).subscribe( res => {
      this.tempData = res;
      localStorage.setItem('token', this.tempData.token);
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('user', JSON.stringify(this.tempData.user));
    })
    this.router.navigate(['./userprofile']);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.setItem('isLogged', 'false');
    window.alert("You have been logged out!")
  }
}

