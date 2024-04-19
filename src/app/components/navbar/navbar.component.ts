import { Component } from '@angular/core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faUser=faUser;
  faBars=faBars;
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }
  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'Iniciar Sessão' }).result.then(
			(result: any) => {
				this.closeResult = `${result}`;
			}
		);
	}
}
