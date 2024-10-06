import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFilePdf = faFilePdf;
  currentYear: number = new Date().getFullYear();
}
