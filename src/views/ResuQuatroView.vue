<template>
  <div class="container pt-3">
    <div class="about">
      <div class="container">
        <br />
        <h1>Capitulo 11 - O Protocolo HTTP</h1>
        <span> Pro Node.js para desenvolvedores </span>
        <br />
        <hr />
        <a class="navbar-brand d-flex justify-content-center">
          <img
            src="../assets/images/http.jpg"
            width="60%"
            height="60%"
            class="d-inline-block align-text-top"
          />
        </a>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify fs-5">
                    O Protocolo de Transferência de Hipertexto, também conhecido
                    como HTTP, se dirige a Web, sendo um protocolo sem estado,
                    baseado em texto e que funciona sobre o TCP ( Protocolo de
                    controle de transmissão ). <br />
                    É muito utilizada, uma versão encriptada do HTTP, conhecida
                    como <b>HTTPS</b> ou "HTTP Seguro", quando trabalhamos com
                    dados sensíveis. <br />
                    O HTTP é um protocolo de <i>requisição-resposta</i> que
                    utiliza-se do modelo de programação <i>cliente-servidor</i>,
                    geralmente usamos o navegador como sendo o cliente, em uma
                    transação HTTP.
                  </p>
                </div>
              </div>
            </div>
            <div class="col" id="img">
              <a class="navbar-brand d-flex justify-content-center">
                <img
                  src="../assets/images/http2.png"
                  width="350"
                  height="350"
                  class="d-inline-block align-text-top"
                />
              </a>
              <h6 class="navbar-brand d-flex justify-content-center">
                <b> Figura 1 </b> : Como funciona o Protocolo HTTP.
              </h6>
            </div>
          </div>
          <br />
          <p>
            Quando um navegador navega até um dado URL, uma requisição HTTP é
            feita ao servidor que hospeda ao URL, essa requisição normalmente é
            feita na porta <b>80 TCP</b>. O servidor processa a requisição e
            logo depois, responde ao cliente. O HTTP trabalha desse jeito, em um
            nivel muito elevado.
          </p>
          <p class="text-justify fs-5">
            Um pequeno exemplo:<br />
            A API do HTTP do Node está implementada no módulo central
            <i>http</i>, que deve ser importado na primeira linha do código (
            Figura 2 ). Na linha de baixo, temos o método
            <b>createServer( )</b> do módulo <i>http</i>, ele é utilizado para
            que possamos criar uma nova instância de servidor HTTP. <br />
            O servidor retornado por <b>createServer( )</b> é um emissor de
            eventos e não está ligado a nenhuma porta particular. Na última
            linha da Figura 2, o servidor é então ligado à porta 8000 com o uso
            do método <b>listen( )</b>.
          </p>
          <div class="col" id="img">
            <a class="navbar-brand d-flex justify-content-center">
              <img
                src="../assets/images/http02.png"
                width="280"
                height="220"
                class="
                  d-inline-block
                  align-text-top
                  border border-danger border border-4
                "
              />
            </a>
            <h6 class="navbar-brand d-flex justify-content-center">
              <b> Figura 2 </b> : Um servidor HTTP Simples.
            </h6>
          </div>
          <br />
          <p class="text-justify fs-5">
            A funçao que foi passada a <b>createServer( )</b> é um tratador
            opcional do evento <i>request</i>, que é chamada toda vez em que uma
            nova requisição HTTP é recebida. O tratador do evento recebe os 2
            argumentos, <b>request</b> e <b>response</b>. O argumento REQUEST é
            uma instancia de <i>http.IncomingMessage</i> e contém informações
            sobre a <b>requisição </b>
            do cliente. Já, o argumento RESPONSE é uma instância de
            <i>http.ServerResponse</i> e é utilizado para se <b>responder</b> ao
            cliente. <br />
            Na Figura 2, podemos observar que o tratador responde a todas as
            conexôes com uma simples string de HTML, utilizando-se de métodos
            como o "write( )"" e o "end( )"", dois métodos que se comportam como
            os métodos TCP de mesmos nomes.
          </p>
        </div>
      </div>
      <hr />
      <br />
      <h2>Métodos de requisição</h2>
      <p class="text-justify fs-5">
        A linha de requisição de uma requisição HTTP começa com um método de
        requisição, seguido do URL do recurso requisitado. O método de
        requisição é utilizado para especificar a ação a ser realizada na URL
        especificada. <br />
        Exemplo: Na Figura 3 , uma requisição GET foi realizada para o recurso
        que esta localizado em "/". O motivo desta requisição se baseia em
        visualizar o recurso que foi especificado , como poder ver ser foi
        exibida uma página web dentro de um navegador.
      </p>
      <div class="col" id="img">
        <a class="navbar-brand d-flex justify-content-center">
          <img
            src="../assets/images/ex-event-emitters.png"
            width="400"
            height="220"
            class="
              d-inline-block
              align-text-top
              border border-danger border border-4
            "
          />
        </a>
        <h6 class="navbar-brand d-flex justify-content-center">
          <b> Figura 3 </b> : Exemplo.
        </h6>
      </div>
      <p class="text-justify fs-5">
        Neste exemplo é considerado que alguma operação de E/S (alguma transação
        base de dados) foi realizada, criando assim, um novo usuário. Depois de
        completar esta operação, o emissor de eventos,
        <b>emitter</b> cria então um novo evento chamado de <i>userAdded</i>, e
        passa o nome e a senha do usuário.
      </p>
      <hr />
      <br />
      <h2>Escutando Eventos</h2>
      <p class="text-justify fs-5">
        No último exemplo (Figura 3), um emissor de eventos foi utilizado para
        criar um evento. Porém ninguem está o escutando. <br />
        Dentro do Node, escutadores de eventos são misturados junto aos
        emissores de eventos, com a utilização dos métodos <b>on( )</b> e
        <b>addListener( )</b>. Ambos os métodos podem ser utilizados para um
        substituir o outro. Ambos recebem um nome de evento e uma função
        tratadora como argumentos. No momento em que um evento do tipo
        especificado é emitido, as funções tratadoras correspondentes são
        chamadas. Veja a Figura 4.
      </p>
      <div class="col" id="img">
        <a class="navbar-brand d-flex justify-content-center">
          <img
            src="../assets/images/ex-event-emitters2.png"
            width="450"
            height="320"
            class="
              d-inline-block
              align-text-top
              border border-danger border border-4
            "
          />
        </a>
        <h6 class="navbar-brand d-flex justify-content-center">
          <b> Figura 4 </b> : Configurando um Escutador de Eventos utilizando ->
          <b>on( )</b>.
        </h6>
      </div>
      <br />
      <p class="text-justify fs-5">
        Neste código acima, vemos que um tratador de evento <i>userAdded</i> é
        juntado a <b>emitter</b>, por meio do método "on( )"". Logo após, o
        <b>emitter</b> emite um evento <i>userAdded</i>, que faz com que o
        tratador seja chamado. A saída deste exemplo é mostrada na figura 5.
      </p>
      <div class="col" id="img">
        <a class="navbar-brand d-flex justify-content-center">
          <img
            src="../assets/images/saida-emitter.png"
            width="280"
            height="90"
            class="
              d-inline-block
              align-text-top
              border border-danger border border-4
            "
          />
        </a>
        <h6 class="navbar-brand d-flex justify-content-center">
          <b> Figura 5 </b> : A saída da execução do código.
        </h6>
      </div>
      <br />
      <br />
      <h1>Os eventos <b> newListener</b></h1>
      <hr />
      <br />
      <p class="text-justify fs-5">
        Em todo caso em que um novo tratador de eventos é registrado, o emissor
        de eventos emite um evento <b>newListener</b>. Este evento é utilizado
        para detectar novos tratadores de eventos. Geralmente utilizamos esse
        evento quando precisamos alocar recursos ou realizar alguma ação para
        cada novo tratador de eventos. <br />
        Um evento "newListener" é tratado como qualquer outro evento, o tratador
        aguarda outros 2 argumentos: o nome do evento ( como uma string ) e a
        função tratadora. Veja a Figura 6.
      </p>
      <div class="col" id="img">
        <a class="navbar-brand d-flex justify-content-center">
          <img
            src="../assets/images/newlistener.png"
            width="450"
            height="250"
            class="
              d-inline-block
              align-text-top
              border border-danger border border-4
            "
          />
        </a>
        <h6 class="navbar-brand d-flex justify-content-center">
          <b> Figura 6 </b> : Adicionando um tratador do evento "newListener"
        </h6>
      </div>
      <p class="text-justify fs-5">
        Na imagem vemos que um tratador do evento <b>foo</b> é integrado a um
        emissor de eventos. Enquanto isso acontece, o emissor emite um evento
        "newListener" , fazendo assim com que o tratador do evento "newListener"
        seja chamado. <br />
        É valido lembrar que o evento "newListener" existe ao mesmo tempo em que
        é criado seus próprios eventos.
      </p>

      <br />
      <hr />
      <br />
      <h3>
        Esse terceiro resumo explorou muito bem o conceito dos emissores de
        evento, explicou um pouco sobre para que serve o objeto EventEmitter,
        além de mostrar como faz para podermos "escutar" um evento por meio dos
        métodos emitter.on ou addListener. Além de explicar como funciona para
        adicionarmos um novo Listener.
      </h3>
    </div>
  </div>
</template>
    
  <script>
export default {
  name: "resumo-quatro",
  components: {},
};
</script>
    
    <style scoped>
</style>