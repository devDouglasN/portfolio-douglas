import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket, faBars, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLogged = false;

  faArrowRightFromBracket=faArrowRightFromBracket;
  faUser=faUser;
  faBars=faBars;
  closeResult = '';

  constructor(private router: Router) { }

  ngOnInit(): void { }
  login():void{
    this.router.navigate(['/inicio-sesion']);
  }
}
