import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  faGithub = faGithub;

  projetos = [
    {
      titulo: 'CypherCard',
      imagem: './assets/cyphercard-1.png',
      descricao: 'Simula a avaliação de crédito e emissão de cartões...',
      link: 'https://github.com/devDouglasN/cyphercard'
    },
    {
      titulo: 'PlanEventos',
      imagem: './assets/plan-evento.webp',
      descricao: 'PlanEventos é uma aplicação backend para gerenciar eventos, permitindo cadastrar eventos com detalhes completos sobre participantes, organizadores, data, local, horário, número de pessoas e outras informações relevantes.',
      link: 'https://github.com/devDouglasN/PlanEventos'
    },
    {
      titulo: 'ReadVista',
      imagem: './assets/readvista-image.png',
      descricao: 'ReadVista é uma API de gerenciamento de bibliotecas projetada para facilitar o processo de empréstimo e devolução de livros.',
      link: 'https://github.com/devDouglasN/readvista-backend'
    },
    {
      titulo: 'User Registration App',
      imagem: './assets/userregistrationapp-image.png',
      descricao: 'Aplicação web para cadastro, alteração e seleção de candidatos para vagas de emprego. Auxilia na organização de registros de candidatos ideais de forma rápida e organizada.',
      link: 'https://github.com/devDouglasN/userRegistration_App'
    },
    {
      titulo: 'Safe Exchange',
      imagem: './assets/safeexchange-image.png',
      descricao: 'Aplicação web na qual os usuários podem cadastrar pedidos e fazer ofertas para os pedidos de outros usuários, inserindo informações como valor e data de entrega.',
      link: 'https://github.com/devDouglasN/safe_exchange'
    },
    {
      titulo: 'Clinic Med',
      imagem: './assets/clinicmed-image.png',
      descricao: 'Clinic Med é uma API para uma clínica médica criada para monitorar o cadastro de médicos, pacientes e agendamento de consultas.',
      link: 'https://github.com/devDouglasN/clinic-medi-pro'
    },
    {
      titulo: 'ProfTech Desk',
      imagem: './assets/proftechdesk-image.png',
      descricao: 'Sistema de Help Desk que permite o cadastro e exclusão de clientes e técnicos gerenciado pelo banco de dados, possibilitando que os clientes registrem chamadas e os técnicos as atendam.',
      link: 'https://github.com/devDouglasN/proftech-desk'
    }
  ];

  breakpointsConfig = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    930: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  };
  swiperContainer: any;

  ngAfterViewInit() {
    if (this.swiperContainer) {
      const swiperEl = this.swiperContainer.nativeElement;
      swiperEl.breakpoints = this.breakpointsConfig;
    }
  }
}
