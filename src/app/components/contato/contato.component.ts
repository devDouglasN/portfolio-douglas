import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAnglesRight, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  wpp =faWhatsapp ;
  mail=faEnvelope;
  send=faAnglesRight;
  paper=faPaperPlane;
}
