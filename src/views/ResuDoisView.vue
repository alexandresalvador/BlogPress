<template>
  <div class="container pt-3">
    <div class="about">
      <div class="container">
        <br />
        <h1>Capítulo 3 - O módulo Async</h1>
        <span> Pro Node.js para desenvolvedores </span>
        <br />
        <hr />
        <a class="navbar-brand d-flex justify-content-center">
          <img
            src="../assets/images/async2.png"
            width="90%"
            height="90%"
            class="d-inline-block align-text-top"
          />
        </a>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <div class="col" id="img">
              <a class="navbar-brand d-flex justify-content-center">
                <img
                  src="../assets/images/asyncimg1.jpg"
                  width="300"
                  height="200"
                  class="d-inline-block align-text-top"
                />
              </a>
              <h6 class="navbar-brand d-flex justify-content-center">
                <b> Figura 1 </b> : Diferença entre síncrono e assíncrono
              </h6>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify fs-5">
                    Neste resumo iniciaremos uma exploração do modelo de
                    programação do Node, o objetivo aqui é falar de forma mais
                    clara sobre todos os conceitos que envolvem programação
                    assincrona, o módulo Async e o Tratamento de Exceções.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div class="row">
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <br />
                  <h1>Programação Assíncrona</h1>
                  <br />
                  <p class="text-justify fs-5">
                    Algo importante a se falar sobre o modelo de programação do
                    Node, é que por aqui, quase tudo é feito de forma
                    assíncrona. Sob o paradigma do Node, funcões assíncronas
                    recebem um argumento extra, conhecida por
                    <i> "continuação" </i> ou <i> "função de rechamada" </i>,
                    essa função é chamada após o código assíncrono ter
                    finalizado a sua execução..
                  </p>
                </div>
              </div>
            </div>
            <div class="col" id="img">
              <a class="navbar-brand d-flex justify-content-center">
                <img
                  src="../assets/images/asyncimg2.png"
                  width="400"
                  height="200"
                  class="
                    d-inline-block
                    align-text-top
                    border border-danger border border-4
                  "
                />
              </a>
              <h6 class="navbar-brand d-flex justify-content-center">
                <b> Figura 2 </b> : Exemplo de leitura de arquivo assíncrona
              </h6>
            </div>
          </div>
          <p class="text-justify fs-5">
            A <b> Figura 2 </b> mostra um exemplo de chamada de função
            assíncrona. Note que este código vai ler um arquivo do sistema de
            arquivos e mostrar o conteúdo em tela. Mais tarde, o acesso ao
            sistema de arquivos será revisitado novamente, mas por enquanto,
            esse exemplo já é o suficiente para podermos entender o básico.
          </p>
          <p class="text-justify fs-5">
            O módulo central <b>fs</b>, que foi importado na primeira linha, é
            utilizado para se trabalhar com o sistema de arquivos. <br />
            Já o método "readFile()" trabalha assincronamente, fazendo a leitura
            do arquivo <i>foo.txt</i> por meio da decodificaçâo chamada de
            <b>UTF-8</b>, após o arquivo ser lido,é chamada a
            <b>função anônima de rechamada</b>, jà mencionada aqui neste resumo.
            Essa função recebe 2 parâmetros, <i>error</i> e <i>data</i>, que
            significam justamente qualquer condição de erro e o conteúdo do
            arquivo.
          </p>
          <p>
            Este exemplo nos mostra 2 importantes convençôes para os
            desenvolvedores de Node. <br />
            Primeiro -> Se um método recebe uma função de rechamada como
            argumento, ela deve ser o último argumento da lista. <br />
            Segundo -> Se um método recebe um erro como argumento, ele deve ser
            o primeiro da lista. <br />
            Não são regras de linguagem, mas no geral, são bem aceitas entre a
            comunidade de desenvolvedores do Node.
          </p>
          <p class="text-justify fs-5">
            Agora, quando executamos esse programa, podemos observar que ele
            demonstra um aspecto muito importante da programação assíncrona.
            <br />
            Para testar, colocamos o código fonte do exemplo da
            <b> Figura 2</b> dentro de um arquivo "file-reader.js". E depois, no
            mesmo diretório, criamos um arquivo "foo.txt", dentro deste arquivo
            escrevemos a palvra "teste" e salvamos. <br />
            Na <b>Figura 3 </b>, é mostrado no terminal como deve ser a saída da
            execução do programa de exemplo.
          </p>
          <br />
          <a class="navbar-brand d-flex justify-content-center">
            <img
              src="../assets/images/asyncimg3.png"
              width="180"
              height="90"
              class="
                d-inline-block
                align-text-top
                border border-danger border border-4
              "
            />
          </a>
          <h6 class="navbar-brand d-flex justify-content-center">
            <b> Figura 3 </b> : Saída do programa de exemplo.
          </h6>
          <br />
          <p class="text-justify fs-5">
            Note que a mensagem <b> Lendo o arquivo...</b> è mostrada antes do
            conteúdo do arquivo, não obstante ao fato da mensagem não ser
            impressa antes da ultima linha de código.
          </p>
          <p class="text-justify fs-5">
            Quando <b>readFile()</b> é chamada, ela faz uma chamada de
            <i>E/S não bloqueadora</i> ao sistema de arquivos. Isso quer dizer
            que o Node não fica esperando que o sistema de arquivos retorne os
            dados, e que ao invés disso, o Node segue para a proxima etapa, que
            é uma chamada a <i>console.log()</i>. O sistema de arquivos,
            eventualmente, retorna com o conteúdo de <b>foo.txt</b>. Quando isso
            ocorre, a função de rechamada "readFile()'' é chamada e o conteúdo
            do arquivo é mostrado na tela.
          </p>
        </div>
      </div>
      <hr />
      <br />

      <h3>O inferno da Rechamada</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
        obcaecati fugiat, quisquam maxime eius in dolore magnam consectetur
        quasi velit minus omnis modi laboriosam quis rem fuga ut necessitatibus
        officiis?
      </p>
      <br />
      <h1>Tratamento de Exceções</h1>
      <hr />
      <p class="text-justify fs-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
        voluptatum voluptas incidunt dolorum quisquam amet vitae ea inventore
        optio consectetur, enim alias labore pariatur illum. Alias est dolorem
        in cupiditate.
      </p>

      <h2>Domínios e Conexão Explícita</h2>
      <hr />
      <p class="text-justify fs-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque
        eaque eos perspiciatis cum delectus magni ut, odio culpa expedita
        consequatur eius aspernatur laboriosam illum deserunt ab dolorem esse
        sapiente?
      </p>
      <br />
      <h1>O módulo Async</h1>
      <hr />
      <p class="text-justify fs-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore
        repellat dolorem iste sint, aspernatur possimus similique animi!
        Distinctio nostrum voluptates doloribus labore, quisquam maiores aliquid
        pariatur in recusandae illo!
      </p>
      <hr />
      <br />
      <h2>O Modelo Cascata</h2>
      <h2>O Modelo de Fila</h2>
      <h2>Métodos e Variações de repetiçâo</h2>
      <br>
      <hr>
      <h3>Em resumo, xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "resumo-dois",
  components: {},
};
</script>

<style scoped>
</style>