import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent {
  wpp = faWhatsapp;
  mail = faEnvelope;
  send = faPaperPlane;

  onSubmit() {
    // Handle form submission logic here
    alert('Mensagem enviada com sucesso!');
  }
}
