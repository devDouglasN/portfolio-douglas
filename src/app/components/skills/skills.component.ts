import { Component } from '@angular/core';
import { faAngular, faAws, faDocker, faGit, faGithub, faJava } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlus, faDatabase } from '@fortawesome/free-solid-svg-icons';

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
  aws=faAws;
  angular=faAngular;
  faCirclePlus=faCirclePlus;
}
