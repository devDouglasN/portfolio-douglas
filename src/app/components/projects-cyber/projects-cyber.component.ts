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
      text: `Para iniciar o processo, fui até a <strong>página de download do Splunk Universal Forwarder</strong>, que é o software responsável por coletar dados de diferentes máquinas e enviá-los para o Splunk, onde eles podem ser indexados e analisados. O <strong>Universal Forwarder</strong> é uma peça fundamental para <strong>monitoramento e análise em tempo real</strong>, pois ele garante que os dados coletados nos sistemas sejam entregues ao Splunk. Cliquei na opção de download e escolhi a versão que seria compatível com as máquinas virtuais que configurei no laboratório, garantindo que pudesse ser instalado tanto em sistemas Linux quanto em Windows.`
    },
    {
      images: [
        'assets/splunk.cloud-credentials.png',
        'assets/splunk.cloud-credentials2.png'
      ],
      currentImageIndex: 0,
      title: '2º passo: Credenciais Personalizadas do Splunk (splunkclouduf.spl)',
      text: `Após baixar o <strong>Universal Forwarder</strong>, precisei fazer o download das <strong>credenciais personalizadas em formato .spl</strong>. Esse arquivo é essencial, pois ele autentica o Universal Forwarder com o <strong>servidor Splunk (seja local ou na nuvem)</strong> e permite que ele envie dados de forma segura. Baixei esse arquivo no meu computador principal e, em seguida, o transferi para as máquinas virtuais, onde o Universal Forwarder estava instalado. Esse passo garante que o ambiente de laboratório simule a segurança necessária para um ambiente real de produção.`
    },
    // Passos 3 a 9 atualizados
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
      text: `Para otimizar o monitoramento e coleta de dados no laboratório, realizei a instalação do <strong>Splunk Universal Forwarder</strong> em uma <strong>máquina virtual Windows 11</strong>. O Universal Forwarder é um componente leve do Splunk, projetado para coletar e enviar dados de logs e eventos para um servidor central, onde esses dados serão analisados. A escolha do ambiente Windows permite simular cenários de produção com sistemas operacionais variados, refletindo melhor ambientes corporativos. Com essa instalação, preparei a máquina virtual para atuar como um agente de coleta de dados, facilitando o envio dessas informações para o <strong>Splunk Enterprise</strong>, onde serão armazenadas e processadas para análise detalhada.
                1. <strong>Baixando o VirtualBox</strong> - Primeiro, instalei o VirtualBox para criar e gerenciar a máquina virtual que simulará o ambiente de laboratório.
                2. <strong>Baixando a ISO do Windows 11</strong> - Em seguida, baixei a imagem ISO do Windows 11, necessária para instalar o sistema operacional na VM.
                3. <strong>Criando a Máquina Virtual</strong> - No VirtualBox, criei uma nova máquina virtual configurada para rodar o Windows 11, especificando parâmetros como memória, armazenamento e processador.
                4. <strong>Instalando o Windows 11 na VM</strong> - Com a máquina virtual criada, iniciei o processo de instalação do Windows 11, configurando o sistema operacional como se fosse em um computador físico.
                5. <strong>Instalando o Splunk Universal Forwarder na VM</strong> - Após a instalação do Windows 11, baixei e instalei o Splunk Universal Forwarder na máquina virtual para que ela pudesse atuar como agente de coleta de dados.
                6. <strong>Instalação do App no Splunk Universal Forwarder</strong> - Com o Universal Forwarder configurado, adicionei um app específico para expandir as funcionalidades e realizar testes adicionais no ambiente.
                7. A escolha do ambiente Windows permite simular cenários de produção com sistemas operacionais variados, refletindo melhor ambientes corporativos. Com essa configuração completa, a máquina virtual está preparada para coletar dados e enviá-los para o <strong>Splunk Enterprise</strong>, onde serão armazenados e processados para análise detalhada.`
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
      text: `Para realizar a <strong>análise de dados e logs de maneira centralizada</strong>, configurei o <strong>Splunk Enterprise</strong> em uma <strong>máquina virtual rodando Linux</strong>. O Splunk Enterprise é uma plataforma robusta que permite visualizar e monitorar dados de diversas fontes em tempo real. Utilizar um ambiente Linux proporciona flexibilidade e eficiência, especialmente em laboratórios de testes e desenvolvimento. Com essa instalação, preparei o sistema para centralizar o monitoramento e a análise de dados, essencial para diversos cenários de produção.
                1. <strong>Baixando o VirtualBox</strong> - Para iniciar o processo, instalei o VirtualBox, permitindo a criação e gestão de máquinas virtuais de forma prática e organizada.
                2. <strong>Baixando a ISO do Linux (Ubuntu)</strong> - Em seguida, fiz o download da ISO do Ubuntu Linux, escolhida por sua estabilidade e ampla compatibilidade com diversas ferramentas de monitoramento e análise.
                3. <strong>Criando a Máquina Virtual no VirtualBox</strong> - No VirtualBox, configurei uma nova máquina virtual para rodar o Ubuntu, especificando detalhes como memória RAM, armazenamento e processador para um desempenho ideal.
                4. <strong>Instalando o Linux na VM</strong> - Após configurar a VM, iniciei o processo de instalação do Ubuntu, garantindo que o sistema estivesse pronto para receber o Splunk.
                5. <strong>Instalando o Splunk Enterprise na VM Linux</strong> - Com o sistema operacional preparado, baixei e instalei o Splunk Enterprise, configurando as credenciais iniciais para acesso administrativo e personalizando as configurações para o laboratório.
                6. <strong>Acesso à Interface do Splunk Enterprise</strong> - Após a instalação, acessei a interface do Splunk via navegador, conferindo a conexão e o funcionamento adequado da ferramenta.
                7. <strong>Pronto para Monitoramento e Análise de Dados</strong> - Com a instalação completa, o ambiente está preparado para monitorar dados em tempo real, coletando informações de fontes diversas para uma análise detalhada no Splunk Enterprise.`
    },
    {
      images: [
        'assets/terceira-maquina-linux-forewarder.png',
        'assets/criei o grupo e o nome.png',
        'assets/descompactei.png',
        'assets/vamos para uma nova pasta.png',
        'assets/porta criada.png',
        'assets/restart.png',
        'assets/restart splunk.png',
        'assets/comando para apontar para o splunk enterprise.png',
        'assets/servidor splunk enterprise configurado com sucesso com o endereço 10.0.2.15 e a porta 9997.png',
        'assets/interface de Search & Reporting do Splunk Enterprise e conseguiu executar uma consulta no índice _internal.png',
      ],
      currentImageIndex: 0,
      title: '5º passo: Configurando um Ambiente Distribuído com Splunk Enterprise e Splunk Universal Forwarder',
      text: `Para criar um ambiente de monitoramento distribuído, configurei o <strong>Splunk Universal Forwarder</strong> em uma máquina Linux para coletar e encaminhar dados ao <strong>Splunk Enterprise</strong>, instalado em outra máquina virtual Linux. Esse tipo de configuração permite monitorar múltiplos sistemas centralizando os dados em um único indexador, pronto para análise detalhada.

                1. <strong>Configuração do Splunk Universal Forwarder</strong>
                <strong>Download e Instalação do Splunk Universal Forwarder:</strong>
                Baixei o pacote do Universal Forwarder no site oficial da Splunk e o instalei em uma máquina Linux. Escolhi o diretório <strong>/opt</strong> para manter a padronização.
                <strong>Configuração de Usuário e Permissões:</strong>
                Criei um usuário dedicado (<strong>splunkfwd</strong>) com permissões limitadas, garantindo maior segurança ao Forwarder.
                Ajustei as permissões do diretório de instalação para que o usuário splunkfwd tivesse controle total.
                <strong>Inicialização do Forwarder:</strong>
                Após a instalação, inicializei o Splunk Forwarder com o comando:

                <pre><code>./splunk start --accept-license</code></pre>
                Aceitei os termos de licença e configurei as credenciais administrativas iniciais.
                2. <strong>Configuração do Splunk Enterprise (Indexador)</strong>
                <strong>Habilitação de Porta para Recebimento de Dados:</strong>
                No Splunk Enterprise, configurei a porta TCP <strong>9997</strong> para receber dados enviados pelo Forwarder.
                Validei que a porta estava ativa utilizando comandos como <strong>netstat</strong> e <strong>ss</strong>.
                <strong>Teste de Conexão:</strong>
                Testei a comunicação entre o Splunk Universal Forwarder e o Splunk Enterprise para garantir que os dados seriam entregues corretamente.
                3. <strong>Integração entre Forwarder e Indexador</strong>
                <strong>Configuração do Servidor de Destino no Forwarder:</strong>
                Configurei o Splunk Forwarder para enviar dados ao indexador (Splunk Enterprise) utilizando o comando:
               
                <pre><code>./splunk add forward-server 10.0.2.15:9997 -auth admin:&lt;senha&gt;</code></pre>
                Onde <strong>10.0.2.15</strong> é o endereço IP do Splunk Enterprise.
                <strong>Monitoramento de Diretórios no Forwarder:</strong>
                Configurei o Forwarder para monitorar o diretório <strong>/var/log</strong>, que contém logs importantes do sistema:

                <pre><code>./splunk add monitor /var/log</code></pre>
                <strong>Validação da Configuração:</strong>
                Verifiquei que o indexador estava recebendo os dados através da interface web do Splunk Enterprise, consultando o índice interno <strong>_internal</strong>.
                4. <strong>Validação Final e Monitoramento</strong>
                Após finalizar as configurações, acessei a interface do Splunk Enterprise para confirmar que os eventos estavam sendo recebidos do Forwarder.
                Realizei buscas utilizando o índice <strong>_internal</strong>, validando os dados enviados pela máquina do Universal Forwarder.
                O ambiente foi testado e está totalmente funcional, com o Splunk Enterprise preparado para centralizar logs de diferentes fontes monitoradas pelo Forwarder.
                <strong>Resultado</strong>
                O ambiente agora está preparado para coleta e centralização de logs em um sistema distribuído:

                O <strong>Splunk Universal Forwarder</strong> coleta logs de diretórios monitorados na Máquina 3.
                Os dados são enviados ao <strong>Splunk Enterprise</strong> (Máquina 2), que indexa e organiza as informações para análise.
                O sistema está pronto para monitorar logs em tempo real, com escalabilidade para adicionar mais fontes de dados no futuro.
                Com essa configuração, estabeleci um pipeline robusto de coleta e análise de dados, essencial para cenários corporativos e projetos de monitoramento centralizado.`
    },
    {
      images: [
        'assets/windows 11.png',
        'assets/baixar o enterprise.png',
        'assets/baixar enterprise.png',
        'assets/windowsdouglas - senha.png',
        'assets/enterprise-baixado.png',
      ],
      currentImageIndex: 0,
      title: '6º Passo: Configuração do Splunk Enterprise em Ambiente Windows',
      text: `<strong> Configuração do Splunk Enterprise em Ambiente Windows</strong>
                    Neste passo, instalei o <strong>Splunk Enterprise</strong> em uma <strong>máquina virtual rodando Windows</strong>, complementando o ambiente de monitoramento distribuído já configurado anteriormente. A escolha do Windows como sistema operacional para o Splunk demonstra a flexibilidade da ferramenta em suportar diferentes plataformas, permitindo a centralização de logs e dados de sistemas Windows e Linux em um único ambiente.
    
                    1. <strong>Preparação da Máquina Windows</strong>
                    <strong>Configuração da Máquina Virtual (VM):</strong>
    
                    Usei o <strong>VirtualBox</strong> para criar a VM com Windows.
                    Configurei os recursos de hardware, como memória RAM e disco, para atender aos requisitos do Splunk.
                    <strong>Download do Instalador do Splunk Enterprise:</strong>
    
                    Acessei o site oficial da Splunk e baixei o instalador compatível com o Windows.
                    Garanti que os requisitos mínimos do sistema estavam atendidos antes de prosseguir com a instalação.
                    2. <strong>Instalação do Splunk Enterprise no Windows</strong>
                    <strong>Execução do Instalador:</strong>
    
                    Iniciei o processo de instalação clicando no instalador baixado.
                    Durante o processo, selecionei as opções padrão para simplificar a instalação.
                    <strong>Configuração de Credenciais:</strong>
    
                    Após a instalação, configurei as credenciais iniciais de administrador para acessar o Splunk Enterprise.
                    <strong>Configuração de Porta Padrão:</strong>
    
                    O Splunk foi configurado para utilizar a porta padrão <strong>8000</strong>, permitindo o acesso à interface web.
                    3. <strong>Inicialização e Validação</strong>
                    <strong>Início do Serviço Splunk:</strong>
    
                    Após a instalação, iniciei o serviço do Splunk para disponibilizar a interface web.
                    <strong>Acesso à Interface Web:</strong>
    
                    No navegador, acessei o Splunk Enterprise utilizando:
    
                    <pre><code>http://&lt;IP_DA_VM_WINDOWS&gt;:8000</code></pre>
    
                    Validei o funcionamento correto, acessando a interface e verificando os dashboards padrões.
                    4. <strong>Preparação para Centralização de Dados</strong>
                    <strong>Configuração de Recebimento de Dados:</strong>
                    No Splunk Enterprise instalado no Windows, habilitei a porta <strong>9997</strong> para receber dados de forwarders (caso necessário).
                    Verifiquei que o sistema estava pronto para receber logs de fontes externas.
                    <strong>Resultado</strong>
                    A instalação do Splunk Enterprise no Windows foi bem-sucedida, ampliando as possibilidades de monitoramento e análise no ambiente híbrido. Com isso:
    
                    <strong>Ambiente Multiplataforma:</strong>
                    Agora o ambiente inclui servidores Linux e Windows integrados ao Splunk Enterprise.
                    <strong>Flexibilidade na Centralização de Dados:</strong>
                    O Splunk no Windows pode funcionar como um indexador ou ser utilizado para monitorar logs de sistemas e aplicativos baseados em Windows.
                    <strong>Escalabilidade para Novas Fontes de Dados:</strong>
                    O ambiente está preparado para monitorar tanto eventos do Windows quanto logs enviados de outras máquinas via Forwarders.
                    Com isso, o sistema está totalmente funcional para monitorar dados em tempo real de ambientes mistos, oferecendo análises centralizadas em um só local.`
    },
    {
      images: [
        'assets/habilitar o indexador (Splunk Enterprise) para receber dados na porta 9997.png',
        'assets/indo para o firewall.png',
        'assets/regras de entrada, entrando.png',
        'assets/regras de entrada, configurando.png',
        'assets/regras de entrada, configurandoo.png',
        'assets/dando nome.png',
        'assets/reiniciando o splunk.png',
        'assets/baixando o universal forwarder.png',
        'assets/baixando o universal forwarderr.png',
        'assets/logs do sistema.png',
      ],
      currentImageIndex: 0,
      title: '7º passo: Carregamento e Monitoramento de Dados no Splunk',
      text: `<strong>7º Passo: Configuração do Splunk Universal Forwarder em Ambiente Windows</strong>
                    Neste passo, instalei o <strong>Splunk Universal Forwarder</strong> em uma <strong>máquina virtual rodando Windows</strong>, configurando-o para enviar logs de eventos do sistema para o Splunk Enterprise. Essa configuração complementa o ambiente híbrido, unindo sistemas Windows e Linux em uma solução centralizada para coleta e análise de dados.

                    1. <strong>Preparação da Máquina Windows</strong>
                    <strong>Configuração da Máquina Virtual (VM):</strong>
    
                    Usei o <strong>VirtualBox</strong> para criar a VM com Windows.
                    Configurei os recursos de hardware, como memória RAM e disco, para garantir compatibilidade com o Splunk.
                    
                    <strong>Abertura da Porta 9997 no Firewall:</strong>
    
                    - Acesse o <strong>Windows Defender Firewall</strong> e configurei uma nova regra de entrada:
                    - Selecionei a opção <strong>Porta</strong> e defini o protocolo como <strong>TCP</strong>.
                    - Especifiquei a porta local <strong>9997</strong>, permiti a conexão em todos os perfis e finalizei a regra.

                    2. <strong>Download e Instalação do Splunk Universal Forwarder</strong>
                    <strong>Download do Instalador:</strong>
    
                    Acessei o site oficial da Splunk, fiz login e baixei o instalador do Universal Forwarder para Windows.
                    
                    <strong>Execução do Instalador:</strong>
    
                    - Executei o arquivo <code>.msi</code> baixado.
                    - Aceitei os termos de licença e selecionei "An on-premises Splunk Enterprise instance".
                    - Na tela de instalação, configurei o serviço como <strong>Local System</strong> e habilitei o monitoramento de logs do sistema Windows.

                    <strong>Configuração de Credenciais:</strong>
    
                    Durante a instalação, criei o nome de usuário e senha para o Splunk Universal Forwarder.

                    <strong>Configuração do Destino de Logs:</strong>
    
                    Digitei o endereço IP do Splunk Enterprise (<strong>10.0.2.15</strong>) e a porta <strong>9997</strong> como destino dos logs coletados.

                    3. <strong>Inicialização e Validação</strong>
                    <strong>Início do Serviço Splunk:</strong>
    
                    Após a instalação, o Splunk Universal Forwarder iniciou automaticamente.

                    <strong>Validação no Splunk Enterprise:</strong>
    
                    No Splunk Enterprise, acessei a interface web e verifiquei que os dados estavam sendo recebidos:
    
                    <pre><code>http://10.0.2.15:8000</code></pre>
    
                    Consultei os eventos no índice interno com o comando:
                    <pre><code>index=_internal</code></pre>
    
                    Validei que os eventos do sistema Windows estavam sendo coletados corretamente.

                    <strong>Objetivo Desse Módulo</strong>
                    <strong>Monitorar Logs do Windows:</strong>
                    Coletar logs de eventos do sistema Windows (por exemplo, falhas de aplicativos, eventos de segurança).
                    
                    <strong>Centralizar Dados no Indexador:</strong>
                    Todos os logs são enviados para o Splunk Enterprise, permitindo análises centralizadas.
                    
                    <strong>Garantir Monitoramento em Tempo Real:</strong>
                    O Forwarder envia logs em tempo real, ajudando na detecção de problemas ou ameaças.
                    
                    <strong>Resultado:</strong>
                    Com essa configuração, o ambiente está totalmente funcional para monitorar logs do Windows e integrá-los a uma solução centralizada que inclui dados de diferentes plataformas, garantindo visibilidade e controle total.`
    },
    {
      images: [
        'assets/imagem8.jpg'
      ],
      currentImageIndex: 0,
      title: 'Imagem 8: Análise de Dados no Splunk - Aplicativo de Busca',
      text: `Com o recebimento e indexação dos dados configurados, comecei a explorar o <strong>aplicativo de busca do Splunk</strong>. Esse aplicativo é a principal ferramenta para consultar, filtrar e entender os dados recebidos. Utilizei diferentes critérios de busca e filtros para obter insights específicos, o que é essencial para identificar padrões e detectar anomalias nos dados coletados pelo laboratório.`
    },
    {
      images: [
        'assets/imagem9.jpg'
      ],
      currentImageIndex: 0,
      title: 'Imagem 9: Criação de Visualizações e Dashboards',
      text: `Para facilitar a análise visual e o monitoramento de dados em tempo real, configurei <strong>dashboards e visualizações no Splunk</strong>. Esses dashboards consolidam informações importantes em gráficos e tabelas, permitindo uma análise mais intuitiva e rápida dos dados. A criação de dashboards é um passo importante para transformar dados brutos em insights visuais, facilitando a tomada de decisão com base em dados.`
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
