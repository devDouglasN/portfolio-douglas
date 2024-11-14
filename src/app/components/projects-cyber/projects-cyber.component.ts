import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

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
    // Adicionando os passos 3 a 9
    {
      images: [
        'assets/baixando-virtualbox.png',
        'assets/baixando a iso do windows 11...png',
        'assets/criando-vm.png',
        'assets/virtualbox-dashboard.png',
        'assets/windows 11 na vm.png', 
        'assets/instalando o univesal na vm.png',
        'assets/instalando o univesal na vm.png',

      ],
      currentImageIndex: 0,
      title: '3º passo: Configuração do Splunk Universal Forwarder em Ambiente Windows para Coleta de Dados no Laboratório',
      text: `Para otimizar o monitoramento e coleta de dados no laboratório, realizei a instalação do Splunk Universal Forwarder em uma máquina virtual Windows 11. O Universal Forwarder é um componente leve do Splunk, projetado para coletar e enviar dados de logs e eventos para um servidor central, onde esses dados serão analisados. A escolha do ambiente Windows permite simular cenários de produção com sistemas operacionais variados, refletindo melhor ambientes corporativos. Com essa instalação, preparei a máquina virtual para atuar como um agente de coleta de dados, facilitando o envio dessas informações para o Splunk Enterprise, onde serão armazenadas e processadas para análise detalhada.
              1. Baixando o VirtualBox - Primeiro, instalei o VirtualBox para criar e gerenciar a máquina virtual que simulará o ambiente de laboratório.
              2. Baixando a ISO do Windows 11 - Em seguida, baixei a imagem ISO do Windows 11, necessária para instalar o sistema operacional na VM.
              3. Criando a Máquina Virtual - No VirtualBox, criei uma nova máquina virtual configurada para rodar o Windows 11, especificando parâmetros como memória, armazenamento e processador.
              4. Instalando o Windows 11 na VM - Com a máquina virtual criada, iniciei o processo de instalação do Windows 11, configurando o sistema operacional como se fosse em um computador físico.
              5. Instalando o Splunk Universal Forwarder na VM - Após a instalação do Windows 11, baixei e instalei o Splunk Universal Forwarder na máquina virtual para que ela pudesse atuar como agente de coleta de dados.
              6. Instalação do App no Splunk Universal Forwarder - Com o Universal Forwarder configurado, adicionei um app específico para expandir as funcionalidades e realizar testes adicionais no ambiente.
              7. A escolha do ambiente Windows permite simular cenários de produção com sistemas operacionais variados, refletindo melhor ambientes corporativos. Com essa configuração completa, a máquina virtual está preparada para coletar dados e enviá-los para o Splunk Enterprise, onde serão armazenados e processados para análise detalhada.`
      },
    {
      images: [
        'assets/baixando iso do linux ubuntu.png',
        'assets/baixando a iso do linux.png',
        'assets/criando maquina linux.png',
        'assets/linux-instalado.png',
        'assets/sistema linux atualizado.png',
        'assets/instalacao do splunk enterprise bem sucedida.png',
        'assets/Splunk foi iniciado com sucesso.png',
        'assets/Splunk enterprise instalado no linux com sucesso.png',
      ],
      currentImageIndex: 0,
      title: '4º passo: Centralizando a Análise e Monitoramento de Dados com Splunk Enterprise em Ambiente Linux',
      text: `Para realizar a análise de dados e logs de maneira centralizada, configurei o Splunk Enterprise em uma máquina virtual rodando Linux. O Splunk Enterprise é uma plataforma robusta que permite visualizar e monitorar dados de diversas fontes em tempo real. Utilizar um ambiente Linux proporciona flexibilidade e eficiência, especialmente em laboratórios de testes e desenvolvimento. Com essa instalação, preparei o sistema para centralizar o monitoramento e a análise de dados, essencial para diversos cenários de produção.
            1. Baixando o VirtualBox - Para iniciar o processo, instalei o VirtualBox, permitindo a criação e gestão de máquinas virtuais de forma prática e organizada.
            2. Baixando a ISO do Linux (Ubuntu) - Em seguida, fiz o download da ISO do Ubuntu Linux, escolhida por sua estabilidade e ampla compatibilidade com diversas ferramentas de monitoramento e análise.
            3. Criando a Máquina Virtual no VirtualBox - No VirtualBox, configurei uma nova máquina virtual para rodar o Ubuntu, especificando detalhes como memória RAM, armazenamento e processador para um desempenho ideal.
            4. Instalando o Linux na VM - Após configurar a VM, iniciei o processo de instalação do Ubuntu, garantindo que o sistema estivesse pronto para receber o Splunk.
            5. Instalando o Splunk Enterprise na VM Linux - Com o sistema operacional preparado, baixei e instalei o Splunk Enterprise, configurando as credenciais iniciais para acesso administrativo e personalizando as configurações para o laboratório.
            6. Acesso à Interface do Splunk Enterprise - Após a instalação, acessei a interface do Splunk via navegador, conferindo a conexão e o funcionamento adequado da ferramenta.
            7. Pronto para Monitoramento e Análise de Dados - Com a instalação completa, o ambiente está preparado para monitorar dados em tempo real, coletando informações de fontes diversas para uma análise detalhada no Splunk Enterprise.`
    },
    {
      images: [
        'assets/imagem5.jpg'
      ],
      currentImageIndex: 0,
      title: 'Imagem 5: Instalação do Splunk Enterprise no Windows',
      text: `Além do Linux, instalei o Splunk Enterprise em uma máquina virtual com Windows, garantindo que o laboratório reflita a diversidade de sistemas em um ambiente real. Essa instalação no Windows é crucial para capturar e indexar dados específicos desse sistema operacional, permitindo que o Splunk receba dados tanto de ambientes Linux quanto Windows. Essa abordagem mista oferece uma visão mais completa e realista dos dados provenientes de diferentes sistemas.`
    },
    {
      images: [
        'assets/imagem6.jpg'
      ],
      currentImageIndex: 0,
      title: 'Imagem 6: Encaminhamento de Dados para o Splunk no Windows',
      text: `Após a instalação do Splunk Enterprise no Windows, configurei o Universal Forwarder para encaminhar dados dessa máquina para o indexador do Splunk. Essa configuração possibilita que eventos e logs do sistema Windows sejam transmitidos continuamente, facilitando o monitoramento e a análise de dados em tempo real. Essa integração garante que o Splunk receba dados completos, independentemente do sistema operacional de origem.`
    },
    {
      images: [
        'assets/imagem7.jpg'
      ],
      currentImageIndex: 0,
      title: 'Imagem 7: Carregamento e Monitoramento de Dados no Splunk',
      text: `Nesta fase, iniciei o processo de carregamento e monitoramento de dados. O Splunk permite que eu suba arquivos de dados e configure inputs de diferentes fontes, possibilitando uma visão holística dos dados de entrada. Esse monitoramento constante é essencial para garantir que todas as informações coletadas sejam indexadas e prontas para análise. Dessa forma, asseguro que o laboratório esteja recebendo e processando dados de maneira confiável e contínua.`
    },
    {
      images: [
        'assets/imagem8.jpg'
      ],
      currentImageIndex: 0,
      title: 'Imagem 8: Análise de Dados no Splunk - Aplicativo de Busca',
      text: `Com o recebimento e indexação dos dados configurados, comecei a explorar o aplicativo de busca do Splunk. Esse aplicativo é a principal ferramenta para consultar, filtrar e entender os dados recebidos. Utilizei diferentes critérios de busca e filtros para obter insights específicos, o que é essencial para identificar padrões e detectar anomalias nos dados coletados pelo laboratório.`
    },
    {
      images: [
        'assets/imagem9.jpg'
      ],
      currentImageIndex: 0,
      title: 'Imagem 9: Criação de Visualizações e Dashboards',
      text: `Para facilitar a análise visual e o monitoramento de dados em tempo real, configurei dashboards e visualizações no Splunk. Esses dashboards consolidam informações importantes em gráficos e tabelas, permitindo uma análise mais intuitiva e rápida dos dados. A criação de dashboards é um passo importante para transformar dados brutos em insights visuais, facilitando a tomada de decisão com base em dados.`
    }
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
