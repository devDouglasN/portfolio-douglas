import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faFileLines } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

  constructor() { }

  faPaperPlane: IconProp = faPaperPlane;
  faFileLines: IconProp = faFileLines;
}
