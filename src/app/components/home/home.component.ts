// home.component.ts
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('typeEffect2') typeEffect2: ElementRef;

  ngAfterViewInit(): void {
    this.typeEffect2.nativeElement.innerHTML = '';
    this.typeWriter(this.typeEffect2.nativeElement, 'Analista de cloud security', 0, 80);
  }

  typeWriter(element, text, i, speed) {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(() => this.typeWriter(element, text, i, speed), speed);
    }
  }

  faLinkedin: IconProp = faLinkedin;
  faGithub: IconProp = faGithub;
  faFilePdf: IconProp = faFilePdf;
}
