import { Component } from '@angular/core';
import { faAngular, faBootstrap, faDocker, faGit, faGithub, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  java=faJava;
  docker=faDocker;
  mysql=faDatabase;
  git =faGit;
  github=faGithub;
  angular=faAngular;
}
