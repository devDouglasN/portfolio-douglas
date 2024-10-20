import { Component, ElementRef, ViewChild } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrl: './formacao.component.css'
})
export class FormacaoComponent {

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
}
