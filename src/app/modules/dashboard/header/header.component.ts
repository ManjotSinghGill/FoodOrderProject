import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private http: HttpClient, public router:Router){}
  
  data: any;
  user: any;
  ngOnInit(): void {
    this.data = localStorage.getItem('user');
    this.user = JSON.parse(this.data);
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.setItem('isLogged', 'false');
  }
}
