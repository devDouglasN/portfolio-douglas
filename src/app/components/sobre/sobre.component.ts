import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faFileLines } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  faPaperPlane: IconProp = faPaperPlane;
  faFileLines: IconProp = faFileLines;
}
