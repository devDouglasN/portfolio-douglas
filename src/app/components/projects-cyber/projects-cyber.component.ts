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
      title: 'Imagem 1: Página de Download do Splunk Universal Forwarder',
      text: `Para iniciar o processo, fui até a página de download do Splunk Universal Forwarder, que é o software responsável por coletar dados de diferentes máquinas e enviá-los para o Splunk, onde eles podem ser indexados e analisados. O Universal Forwarder é uma peça fundamental para monitoramento e análise em tempo real, pois ele garante que os dados coletados nos sistemas sejam entregues ao Splunk. Cliquei na opção de download e escolhi a versão que seria compatível com as máquinas virtuais que configurei no laboratório, garantindo que pudesse ser instalado tanto em sistemas Linux quanto em Windows.`
    },
    {
      images: [
        'assets/splunk.cloud-credentials.png',
        'assets/splunk.cloud-credentials2.png'
      ],
      currentImageIndex: 0,
      title: 'Imagem 2: Credenciais Personalizadas do Splunk (splunkclouduf.spl)',
      text: `Após baixar o Universal Forwarder, precisei fazer o download das credenciais personalizadas em formato .spl. Esse arquivo é essencial, pois ele autentica o Universal Forwarder com o servidor Splunk (seja local ou na nuvem) e permite que ele envie dados de forma segura. Baixei esse arquivo no meu computador principal e, em seguida, o transferi para as máquinas virtuais, onde o Universal Forwarder estava instalado. Esse passo garante que o ambiente de laboratório simule a segurança necessária para um ambiente real de produção.`
    },
    // Adicione os demais passos aqui...
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
