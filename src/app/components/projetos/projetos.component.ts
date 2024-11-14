import { Component } from '@angular/core';
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
      descricao: 'PlanEventos é uma aplicação backend para gerenciar eventos...',
      link: 'https://github.com/devDouglasN/PlanEventos'
    },
    {
      titulo: 'ReadVista',
      imagem: './assets/read_vista.png',
      descricao: 'ReadVista é uma API de gerenciamento de bibliotecas...',
      link: 'https://github.com/devDouglasN/readvista-backend'
    },
    {
      titulo: 'User Registration App',
      imagem: './assets/userregistration.png',
      descricao: 'Aplicação web para cadastro e seleção de candidatos para vagas...',
      link: 'https://github.com/devDouglasN/userRegistration_App'
    },
    {
      titulo: 'InventoryFlow',
      imagem: './assets/InventoryFlow.jpeg',
      descricao: 'InventoryFlow é o backend de um projeto de logística...',
      link: 'https://github.com/devDouglasN/InventoryFlow_Kafka'
    },
    {
      titulo: 'Safe Exchange',
      imagem: './assets/safe_exchangee.png',
      descricao: 'Aplicação web onde os usuários podem cadastrar pedidos...',
      link: 'https://github.com/devDouglasN/safe_exchange'
    },
    {
      titulo: 'Sustenta Vida',
      imagem: './assets/SustentaVida.jpeg',
      descricao: 'SustentaVida é o backend de uma plataforma para pessoas em situação de rua...',
      link: 'https://github.com/devDouglasN/SustentaVida_backend'
    },
    {
      titulo: 'Clinic Med',
      imagem: './assets/clinicmed.jpeg',
      descricao: 'Clinic Med é uma API para monitorar o cadastro de médicos e pacientes...',
      link: 'https://github.com/devDouglasN/clinic-medi-pro'
    },
    {
      titulo: 'ProfTech Desk',
      imagem: './assets/proftech.jpeg',
      descricao: 'Sistema de Help Desk para cadastro de clientes e técnicos...',
      link: 'https://github.com/devDouglasN/proftech-desk'
    }
  ];
breakpointsConfig: any;
}
