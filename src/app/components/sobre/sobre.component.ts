import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSuitcase, faHeadset, faPaperPlane, faFileLines } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  faSuitcase: IconProp = faSuitcase;
  faHeadset: IconProp = faHeadset;
  faPaperPlane: IconProp = faPaperPlane;
  faFileLines: IconProp = faFileLines;
}
