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
                <b> Figura 1 </b> : Diferença entre síncrono e assíncrono.
              </h6>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify fs-5">
                    Neste resumo iniciaremos uma exploração do modelo de
                    programação do Node, o objetivo aqui é falar de forma mais
                    clara sobre uma boa parte dos conceitos que envolvem
                    programação assincrona, o Tratamento de Exceções e o Módulo
                    Async.
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
                    finalizado a sua execução.
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
                <b> Figura 2 </b> : Exemplo de leitura de arquivo assíncrona.
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
            Já o método "readFile( )" trabalha assincronamente, fazendo a
            leitura do arquivo <i>foo.txt</i> por meio da decodificaçâo chamada
            de <b>UTF-8</b>, após o arquivo ser lido,é chamada a
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
            Quando <b>readFile( )</b> é chamada, ela faz uma chamada de
            <i>E/S não bloqueadora</i> ao sistema de arquivos. Isso quer dizer
            que o Node não fica esperando que o sistema de arquivos retorne os
            dados, e que ao invés disso, o Node segue para a proxima etapa, que
            é uma chamada a <i>console.log( )</i>. O sistema de arquivos,
            eventualmente, retorna com o conteúdo de <b>foo.txt</b>. Quando isso
            ocorre, a função de rechamada "readFile( )'' é chamada e o conteúdo
            do arquivo é mostrado na tela( teste ).
          </p>
        </div>
      </div>
      <hr />
      <br />

      <h2>O inferno da Rechamada</h2>
      <br />
      <p>
        Também conhecida como <b>"Callback Hell"</b>, é um incidente que pode
        acontecer facilmente por causa da sintaxe CPS que é utilizada no Node.
        Esta situação ocorre quando rechamadas são aninhadas em vários níveis
        dentro de outras rechamadas, podendo deixar o código confuso de se ler e
        manter. <br />
        Também é conhecido como a <b>Pirâmide do Apocalipse</b>, muito por causa
        da estrutura piramidal em que o código se assemelha (Figura 4). <br />
        Mais tarde neste resumo, veremos o módulo async que pode nos ajudar a
        evitar esse problema.
      </p>
      <br />
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/callhell.gif"
          width="500"
          height="200"
          class="
            d-inline-block
            align-text-top
            border border-danger border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 4 </b> : Inferno de Rechamada.
      </h6>
      <br />
      <br />
      <h1>Tratamento de Exceções</h1>
      <hr />
      <p class="text-justify fs-5">
        O código assìncrono também tem implicações sérias no tratamento de
        exceções. No código JavaScript síncrono, sentenças
        <b>try... catch ... finally</b> sâo utilizadas para o tratamento de
        erros, porém, a natureza dirigida por rechamadas do Node dá a permissão
        para que funções sejam executadas fora do código de tratamento de erros
        em que foram estabelecidas. Veja na Figura 5, uma tentativa incorreta de
        tratameno assíncrono de erros:
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/asyncimg4.png"
          width="400"
          height="280"
          class="
            d-inline-block
            align-text-top
            border border-danger border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 5 </b> : Tentativa Incorreta.
      </h6>
      <br />
      <p class="text-justify fs-5">
        Note que nesta figura, é adicionado um tradicional tratamento de erros
        ao exemplo de leitura de arquivos da <b>Figura 2</b>, o nome do arquivo
        a ser lido foi fixado no código como uma string vazia, logo, quando
        <b>readFile( )</b> for invocada, essa função será impossibilitada de ler
        o arquivo, preenchendo então, o argumento <i>error</i> da função de
        rechamada. Esta função por sua vez, vai emitir o erro. <br />
        Supôe-se que a cláusula <b>catch</b> vai tratar o erro expedido, mas,
        quando a função de rechamada é executada, a sentença
        <b>try... catch</b> não é mais parte da pilha de chamadas, e a execução
        entâo é deixada sem captura.
      </p>
      <p class="text-justify fs-5">
        Exceçôes síncronas ainda podem ser tratadas com sentenças
        <i>try... catch... finally</i>, porém precisamos perceber que elas sâo
        um pouco inúteis dentro do Node. A grande maioria das exceçôes do Node
        sâo assìncronas e podem ser tratadas de diversas formas. <br />
        A segunda maneira de processar exceçôes assíncronas é configurar um
        tratador global de exceçôes. Porém, embora eles sejam úteis para evitar
        quebras, eles não devem ser utilizados para se recorrer de erros.
        Porque, se não for tratada de forma apropriada, uma exceçâo pode deixar
        o nosso aplicativo em um estado indeterminado, seguir em frente pode
        trazer erros adicionais.
      </p>
      <h2>Domínios e Conexão Explícita</h2>
      <hr />
      <p class="text-justify fs-5">
        Um <b> domínio </b> é o mecanismo ideal para o tratamento assíncrono de
        erros no Node. Esses domínios permitem que varias operações de E/S sejam
        agrupadas em uma unidade só. <br />
        Quando uma função de rechamada, por exemplo, que é registrada com um
        domínio cria um erro, o domínio é notificado, para poder tratar o erro
        da forma mais apropriada possível. Na figura 6 é mostrado como os
        domínios podem ser utilizados para tratar exceçôes.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/domain.png"
          width="400"
          height="280"
          class="
            d-inline-block
            align-text-top
            border border-danger border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 6 </b> : Tratamento de exceçôes utilizando domínios.
      </h6>
      <br />
      <p class="text-justify fs-5">
        Na segunda linha, o módulo <b>domain</b> é importado e um novo domínio é
        criado. O método <b> run( )</b> do domínio, é utilizado para executar a
        função fornecida. Dentro deste contexto, do run( ), todos os novos
        métodos de rechamadas (ou temporizadores ou emissores de eventos) são
        implicitamente registrados com o domínio. Se um erro é emitido, é
        disparado então, o tratador de erros do domínio. No final, quando o
        domínio não é mais necessário, é chamado o método <b>dispose( )</b>.
      </p>
      <p class="text-justify fs-5">
        Se criarmos vários domínios, podemos conecta-los explicitamente a outro
        domínio, mesmo no contexto de <b>run( )</b>.
      </p>
      <br />
      <h1>O módulo Async</h1>
      <hr />
      <p class="text-justify fs-5">
        O <b>async</b> é nada mais do que um módulo de terceiros, de código
        aberto, extremamente útil para o gerenciamento de fluxo de controle
        assíncrono. <br />
        Apesar de ser originalmente desenvolvido para aplicativos Node, o
        <i>async</i> também pode ser utilizado no lado <i>cliente</i>, ja que
        tem suporte em diversos navegadores populares, como o Google Chrome, por
        exemplo. Os desenvolvedores podem oferecer 1 ou mais funções e,
        utilizando o módulo async, definir como elas serão executadas.
      </p>
      <p class="text-justify fs-5">
        Um aspecto desafiador do desenvolvimento assíncrono é de assegurar a
        ordem em que funções são executadas, simultaneamente em que haja uma
        legibilidade do código. Com o <b>async</b>, para assegurarmos uma
        execução serial é só utiizar o método <i>series( )</i>. <br />
        Como primeiro argumento, ele recebe uma matriz ou objeto contendo
        funções a serem executadas em ordem. Cada uma destas funções recebe uma
        rechamada como argumento. O primeiro argumento para cada função de
        rechamada é um objeto de erro, ou <i>null</i>, se não houver um erro.
      </p>
      <p class="text-justify fs-5">
        O segundo argumento para as funçôes de rechamada é opcional, ele
        representa o valor de retorno. A invocação da função de rechamada faz
        com que <b>series( )</b> passe para a proxima função. Contudo, se
        qualquer função passar um erro a sua rechamada, então nenhuma das demais
        funções é executada.
      </p>
      <p class="text-justify fs-5">
        O método <b>series( )</b> também recebe um segundo argumento opcional,
        uma rechamada que é invocada depois que todas as funções forem
        completadas. Essa rechamada final recebe 2 argumentos, um erro e uma
        matriz ou objeto contendo o resultado das funções. Se qualquer função
        passar um erro a sua rechamada, o controle é imediatamente passado à
        função de rechamada final. A figura 7 mostra como podemos usar o método
        series( ) de async para resolver todos os problemas relacionados a fluxo
        de controle, sem complicar muito o código. Para instalar o async ->
        <b> npm install async</b>.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/asyncseries.png"
          width="370"
          height="480"
          class="
            d-inline-block
            align-text-top
            border border-danger border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 7 </b> : Exemplo de execuçâo de funções em série, usando
        async.
      </h6>
      <br />
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/async-console.png"
          width="270"
          height="150"
          class="
            d-inline-block
            align-text-top
            border border-danger border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 8 </b> : Saída no console do código da Figura 7.
      </h6>
      <br />
      <p class="text-justify fs-5">
        No exemplo da <b>Figura 7</b> foi feita uma chamada series( ) com uma
        matriz de funções contendo as tarefas originais de temporizadores
        incorporados em funções anônimas. Em cada uma das tarefas, o valor de
        retorno desejado é passado como segundo argumentoda função de rechamada.
        Na chamada series( ) também é incluida uma função de rechamada final,
        resolvendo o problema de não se saber quando todos os resultados estarão
        prontos. Na <b> Figura 8</b> é mostrada a saída no console, que verifica
        se as 3 tarefas foram executadas na ordem determinada ou não.
      </p>
      <hr />
      <br />
      <h2>
        Em breve falaremos um pouco também sobre:
        <b>
          Execução em paralelo, O Modelo Cascata, O Modelo de Fila e Métodos e
          Variações de repetiçâo</b
        >
      </h2>
      <br />
      <hr />
      <h3>
        No geral, vimos que no Node quase tudo é feito de forma assíncrona. E
        que as funcões assíncronas recebem um argumento extra, conhecida como
        "função de rechamada" , uma função que é invocada logo após a algum
        código assíncrono ter finalizado sua execução. Vimos também um pouco
        sobre o "Inferno da rechamada" ou a "Pirâmide do Apocalipse", e como
        Exceçôes síncronas como "try... catch... finally", podem ser um pouco
        inúteis dentro do Node. Na parte final vimos o que é o módulo async e
        para o que ele é útil, em breve o artigo será atualizado e terá mais um pouco de exemplos práticos.
      </h3>
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