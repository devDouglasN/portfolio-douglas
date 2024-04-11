import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faWhatsapp: any;
  faUser: any;
  faLinkedin: IconProp = faLinkedin;
  faTwitter: IconProp = faTwitter;
  faGithub: IconProp = faGithub;
  faInstagram: IconProp = faInstagram;
  faFacebook: IconProp = faFacebook;
  faEnvelope: IconProp | undefined;
}
