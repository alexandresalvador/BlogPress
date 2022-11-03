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
        Neste exemplo , uma requisição GET foi realizada para o recurso que esta
        localizado em "/". O motivo desta requisição se baseia em visualizar o
        recurso que foi especificado , como poder ver ser foi exibida uma página
        web dentro de um navegador.
      </p>
      <p class="h2 d-flex justify-content-center">
        GET / HTTP/1.1 <br />
        Host: localhost: 8000 <br />
      </p>
      <br />
      <p class="text-justify fs-5">
        Na primeira linha, a linha de requisição, é especificado o
        <i>método de requisição, o URL requisitado e o protocolo</i> que esta
        sendo utilizado. O método de requisição é o <b>GET</b>, o url é o
        <b>"/"</b> e o protocolo é o <b>HTTP version 1.1</b>. <br />
        Após a linha de requisição temos uma coleção de
        <b>cabeçalhos de requisição</b>, muito úteis para parametrizar a
        requisição, no exemplo apenas o cabeçalho chamado <b>Host</b> esta
        incluido. Esse cabeçalho é obrigatório no HTTP 1.1, e serve para
        especificar o nome do domínio e a porta (8000) do servidor que está
        sendo requisitado. Outro cabeçalho de requisição muito comum é o
        <b>COOKIE</b>. Apesar de que não foi mostrado no exemplo, dentro de uma
        requisição também pode haver um "corpo", que serve para passar algumas
        informações adicionais ao servidor . <br />
        <br />
        Outro método de requisição bastante comum, é o <b>POST</b>, que permite
        que o cliente remeta dados ao servidor, essas requisições Post são
        usadas geralmente para envios de formulários HTML. <br />
        Outros métodos de requisição suportados pelo HTTP 1.1 são:
      </p>
      <hr />
      <p class="h5 d-flex justify-content-center">
        <b>
          HEAD -- Utilizado para verificar se um recurso existe, sem que seja
          necessário baixar todo o seu conteúdo. <br />
          PUT -- Similares a requisição POST, porém, estes são utilizadas para
          atualizar recursos ja existentes no servidor. <br />
          DELETE -- Utilizado para apagar um recurso de um servidor. <br />
          PATCH -- Similar ao PUT, mas é geralmente utilizado para fazer
          atualizações parciais a um recurso ja existente. Diferentemente de
          PUT, que deve reenviar todo o recurso, durante uma atualização.
        </b>
      </p>
      <br />
      <br />
      <h1>Os códigos de Resposta</h1>
      <hr />
      <p class="text-justify fs-5">
        A linha de status de toda resposta HTTP inclui um código de status
        numérico, junto de uma frase de descrição. A frase serve apenas para
        explicar o que acontece, enquanto o código de status é realmente
        utilizado pelo cliente, e junto dos cabeçahos de resposta, orienta como
        a resposta deve ser tratada. <br />
        Esta é uma pequena amostra de alguns Códigos de Status muito comuns:
      </p>
      <hr />
      <p class="h5">
        - <b>200 OK </b> = Indica que a requisição HTTP foi tratada com sucesso.
        <br />
        - <b>201 Created </b> = Indica que a requisição foi realizada, e um novo
        recurso foi criado no servidor <br />
        - <b>400 Bad Request </b> = Indica que a requisição foi mal formada e
        que não pode ser entendida. <br />
        - <b>401 Unauthorized </b> = O servidor responderá assim se for exigido
        uma autenticação, e as credencias forem recusadas. <br />
        - <b>404 Not Found </b> = O servidor não conseguiu localizar a URL
        solicitada. <br />
        - <b>500 Internal Server Error </b> = O servidor encontrou algum erro
        enquanto tentava realizar a requisição.
      </p>
      <br />
      <h2>Cabeçalhos de Resposta</h2>
      <p class="text-justify fs-5">
        Estes cabeçalhos, junto dos códigos de status de resposta, são
        utilizados para interpretar os dados enviados de volta do servidor.
        <br />
        Alguns cabeçalhos de reposta mais comuns incluem :
      </p>
      <hr />
      <p class="h5 d-flex justify-content-center">
        <b>
          Cache-Control -- Especifica se um recurso pode ser cacheado. <br />
          Content-Encoding -- Especifica a codificação utilizada nos dados.
          <br />
          Content-Lenght -- Especifica o comprimento do corpo da resposta, em
          bytes. <br />
          Content-Type -- Esse cabeçalho diz ao cliente como interpretar os
          dados. <br />
          Location -- Quando o cliente é redirecionado, o URL alvo é armazenado
          nesse cabeçalho. <br />
          Set-Cookie -- Cria um novo cookie no cliente, que futuramente deve ser
          incluido no cabeçalho "Cookie". <br />
        </b>
      </p>
      <hr />
      <br />
      <h1>O que são os Middleware ?</h1>
      <hr />
      <div class="col" id="img">
        <a class="navbar-brand d-flex justify-content-center">
          <img
            src="../assets/images/middle.png"
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
          <b> Figura 3 </b> : Pequeno exemplo de Middleware.
        </h6>
      </div>
      <br />
      <p class="text-justify fs-5">
        Implementar todas as funcionalidades de um servidor chega a ser uma
        árdua tarefa, mesmo com o auxilio dos módulos centrais do Node. A
        alternativa mais popular para evitarmos extensas linhas de código, é de
        adotarmos os <b>Middleware</b>! <br />
        Middleware são funções que processam requisições em um estilo de linha
        de montagem, ou seja, uma porção de middleware inicialmente processa uma
        requisição que chega. Esse middleware pode processar a requisição por
        completo, ou relizar uma operação na requisição, e depois passá-la para
        outra porção de middleware, para um processamento adicional. <br />
        Na figura 3, vemos um middleware que não realiza nenhum processamento.
        Ele recebe 3 argumentos, <b>request, response e next</b>. Request e
        Response são os mesmos objetos usados para processar requisições que já
        conhecemos. O <i>NEXT</i> é uma função chamada para invocar a próxima
        porção de middleware. Podemos incluir o "next( )" dentro de uma sentença
        <i>return</i> se quisermos assegurar que a execução não irá continuar
        quando o próximo middleware for completado.
      </p>
      <hr />
      <br />
      <h1><b>HTTPS</b></h1>
      <hr />
      <br />
      <div class="col" id="img">
        <a class="navbar-brand d-flex justify-content-center">
          <img
            src="../assets/images/https.png"
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
          Via :<b> HostGator</b>
        </h6>
      </div>
      <br />
      <p class="text-justify fs-5">
        Por causa do HTTP transmitir dados em um texto puro, isso o faz ser um
        tanto quanto inseguro na hora em que temos que transmitir dados
        sensíveis como as informaçoes do cartão de crédito, emails, senhas, e
        até mensagens de conversas privadas. Para evitarmos problemas com isso,
        devemos utilizar de um protocolo seguro, por sorte, o HTTP tem um
        protocolo irmão, o <b> HTTPS</b>, que nada mais é do que o HTTP padrão
        executado dentro de um canal seguro.
      </p>
      <p class="text-justify fs-5">
        Sendo mais especifico, o canal é segurado utilizando-se do protocolo
        <b>SSL/TLS</b>( Camada de Soquete Seguro/ Segurança de Camada de
        Transporte). Sob esse protocolo, cada cliente e servidor deve ter uma
        chave criptográfica privada. Para se criar uma chave privada podemos
        fazer isso utilizando um utilitário gratuito, o "OpenSSL". <br />
        <br />
        Dentro do Livro "Pro Node.js para Desenvolvedores" você consegue ter um
        passo-a-passo de como fazer isso.
      </p>
      <br />
      <hr />
      <br />
      <h3>
        Em resumo, aqui foi explicado muitas coisas relacionadas ao que de fato
        se baseia o protocolo HTTP, introduzindo um vasto material, foi
        essencial para apresentar conceitos que precisam ser entendidos se
        quisermos trabalhar com HTTP futuramente. Esse capítulo também abordou
        assuntos interessantes como os códigos de respostas, os middlewares,
        Cookies e como ter uma maior segurança através do Protocolo HTTPS.
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