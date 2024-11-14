import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-projects-cyber',
  templateUrl: './projects-cyber.component.html',
  styleUrls: ['./projects-cyber.component.css']
})
export class ProjectsCyberComponent implements OnInit, AfterViewInit {

  @ViewChildren('stepRef') stepsElements: QueryList<ElementRef>;

  steps = [
    {
      images: [
        'assets/splunk-download.png',
        'assets/splunk-forwarder-download.png'
      ],
      currentImageIndex: 0,
      title: '1º passo: Página de Download do Splunk Universal Forwarder',
      text: `Para iniciar o processo, fui até a página de download do Splunk Universal Forwarder, que é o software responsável por coletar dados de diferentes máquinas e enviá-los para o Splunk, onde eles podem ser indexados e analisados. O Universal Forwarder é uma peça fundamental para monitoramento e análise em tempo real, pois ele garante que os dados coletados nos sistemas sejam entregues ao Splunk. Cliquei na opção de download e escolhi a versão que seria compatível com as máquinas virtuais que configurei no laboratório, garantindo que pudesse ser instalado tanto em sistemas Linux quanto em Windows.`
    },
    {
      images: [
        'assets/splunk.cloud-credentials.png',
        'assets/splunk.cloud-credentials2.png'
      ],
      currentImageIndex: 0,
      title: '2º passo: Credenciais Personalizadas do Splunk (splunkclouduf.spl)',
      text: `Após baixar o Universal Forwarder, precisei fazer o download das credenciais personalizadas em formato .spl. Esse arquivo é essencial, pois ele autentica o Universal Forwarder com o servidor Splunk (seja local ou na nuvem) e permite que ele envie dados de forma segura. Baixei esse arquivo no meu computador principal e, em seguida, o transferi para as máquinas virtuais, onde o Universal Forwarder estava instalado. Esse passo garante que o ambiente de laboratório simule a segurança necessária para um ambiente real de produção.`
    },
    {
      images: [
        'assets/baixando-virtualbox.png',
        'assets/baixando a iso do windows 11...png',
        'assets/criando-vm.png',
        'assets/virtualbox-dashboard.png',
        'assets/windows 11 na vm.png', 
        'assets/instalando o univesal na vm.png',
        'assets/Instalação do App no Splunk Universal Forwarder concluída.png',
      ],
      currentImageIndex: 0,
      title: '3º passo: Configuração do Splunk Universal Forwarder em Ambiente Windows para Coleta de Dados no Laboratório',
      text: `Para otimizar o monitoramento e coleta de dados no laboratório, realizei a instalação do Splunk Universal Forwarder em uma máquina virtual Windows 11. O Universal Forwarder é um componente leve do Splunk, projetado para coletar e enviar dados de logs e eventos para um servidor central, onde esses dados serão analisados. A escolha do ambiente Windows permite simular cenários de produção com sistemas operacionais variados, refletindo melhor ambientes corporativos. Com essa instalação, preparei a máquina virtual para atuar como um agente de coleta de dados, facilitando o envio dessas informações para o Splunk Enterprise, onde serão armazenadas e processadas para análise detalhada.
              <strong>1. Baixando o VirtualBox</strong> - Primeiro, instalei o VirtualBox para criar e gerenciar a máquina virtual que simulará o ambiente de laboratório.
              <strong>2. Baixando a ISO do Windows 11</strong> - Em seguida, baixei a imagem ISO do Windows 11, necessária para instalar o sistema operacional na VM.
              <strong>3. Criando a Máquina Virtual</strong> - No VirtualBox, criei uma nova máquina virtual configurada para rodar o Windows 11, especificando parâmetros como memória, armazenamento e processador.
              <strong>4. Instalando o Windows 11 na VM</strong> - Com a máquina virtual criada, iniciei o processo de instalação do Windows 11, configurando o sistema operacional como se fosse em um computador físico.
              <strong>5. Instalando o Splunk Universal Forwarder na VM</strong> - Após a instalação do Windows 11, baixei e instalei o Splunk Universal Forwarder na máquina virtual para que ela pudesse atuar como agente de coleta de dados.
              <strong>6. Instalação do App no Splunk Universal Forwarder</strong> - Com o Universal Forwarder configurado, adicionei um app específico para expandir as funcionalidades e realizar testes adicionais no ambiente.
              A escolha do ambiente Windows permite simular cenários de produção com sistemas operacionais variados, refletindo melhor ambientes corporativos. Com essa configuração completa, a máquina virtual está preparada para coletar dados e enviá-los para o Splunk Enterprise, onde serão armazenados e processados para análise detalhada.`
    }
    // Adicione os outros passos aqui conforme necessário
  ];

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (typeof IntersectionObserver !== 'undefined') {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.renderer.addClass(entry.target, 'in-view');
              obs.unobserve(entry.target);
            }
          });
        }, observerOptions);

        this.stepsElements.forEach(step => {
          observer.observe(step.nativeElement);
        });
      } else {
        // Se IntersectionObserver não estiver disponível, aplicar as classes diretamente
        this.stepsElements.forEach(step => {
          this.renderer.addClass(step.nativeElement, 'in-view');
        });
      }
    }
  }

  prevImage(stepIndex: number): void {
    const step = this.steps[stepIndex];
    if (step.currentImageIndex > 0) {
      step.currentImageIndex--;
    } else {
      step.currentImageIndex = step.images.length - 1;
    }
  }

  nextImage(stepIndex: number): void {
    const step = this.steps[stepIndex];
    if (step.currentImageIndex < step.images.length - 1) {
      step.currentImageIndex++;
    } else {
      step.currentImageIndex = 0;
    }
  }

}
