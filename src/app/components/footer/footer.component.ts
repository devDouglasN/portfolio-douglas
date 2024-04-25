import { Component } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  constructor() { }

}
