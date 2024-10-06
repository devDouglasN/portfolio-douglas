import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngular, faAws, faDocker, faGit, faGithub, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // Ícones Font Awesome para habilidades em programação

  faJava = faJava;
  faDocker = faDocker;
  faDatabase = faDatabase;
  faGit = faGit;
  faGithub = faGithub;
  faAngular = faAngular;
  git: IconProp;
  java: IconProp;
}
