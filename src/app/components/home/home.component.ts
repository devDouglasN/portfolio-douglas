import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.typeEffect.nativeElement.innerHTML = '';
    this.typeEffect2.nativeElement.innerHTML = '';

    this.typeWriter(this.typeEffect.nativeElement, 'Olá, me chamo Douglas.', 0, 100).then(() => {
      this.typeWriter(this.typeEffect2.nativeElement, 'Sou desenvolvedor Backend Java', 0, 100);
    });
  }

  @ViewChild('typeEffect') typeEffect: ElementRef;
  @ViewChild('typeEffect2') typeEffect2: ElementRef;

  typeWriter(element, text, i, speed) {
    return new Promise<void>((resolve, reject) => {
      const typeWriterInternal = (element, text, i, speed) => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(() => typeWriterInternal(element, text, i, speed), speed);
        } else {
          resolve();
        }
      }
      typeWriterInternal(element, text, i, speed);
    });
  }

  faWhatsapp: any;
  faUser: any;
  faLinkedin: IconProp = faLinkedin;
  faGithub: IconProp = faGithub;
  faEnvelope: IconProp | undefined;
}
