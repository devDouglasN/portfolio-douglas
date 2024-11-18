import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreComponent } from './components/sobre/sobre.component';
import { FormacaoComponent } from './components/formacao/formacao.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { VideosComponent } from './components/videos/videos.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { ProjectsCyberComponent } from './components/projects-cyber/projects-cyber.component';
import { AwsProjectComponent } from './aws-project/aws-project.component';
import { CyberCatalogComponent } from './components/cyber-catalog/cyber-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobreComponent,
    FormacaoComponent,
    ContatoComponent,
    FooterComponent,
    SkillsComponent,
    ProjetosComponent,
    VideosComponent,
    CertificateComponent,
    ProjectsCyberComponent,
    AwsProjectComponent,
    CyberCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
