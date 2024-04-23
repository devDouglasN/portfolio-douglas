import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
  <div id="typewriter">
    <p>{{ text }}</p>
  </div>
`,
styles: [`
  #typewriter {
    overflow: hidden;
    white-space: nowrap;
  }
`]
})
export class HomeComponent {


  faWhatsapp: any;
  faUser: any;
  faLinkedin: IconProp = faLinkedin;
  faGithub: IconProp = faGithub;
  faEnvelope: IconProp | undefined;
}
