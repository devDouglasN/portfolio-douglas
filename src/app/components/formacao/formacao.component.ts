import { Component } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrl: './formacao.component.css'
})
export class FormacaoComponent {
  faGlobe=faGlobe;
  faFacebook=faFacebook;
  faCalendarDays=faCalendarDays;
}
