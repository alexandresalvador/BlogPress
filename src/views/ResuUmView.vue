<template>
  <div class="container pt-3">
    <div class="about">
      <div class="container">
        <br />
        <h1>Capítulo 2 - O Sistema de Módulos de Node</h1>
        <span> Pro Node.js para desenvolvedores </span>
        <br />
        <hr />
        <a class="navbar-brand d-flex justify-content-center" href="#">
          <img
            src="../assets/images/foto-node.jpg"
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
                  src="../assets/images/npm.png"
                  width="300"
                  height="200"
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify fs-5">
                    Nós podemos resolver muitos problemas mais complexos
                    utilizando a funcionalidade central do Node. Mas, um dos
                    melhores pontos do Node fica em sua grande comunidade de
                    desenvolvedores e a extensa quantidade de módulos de
                    terceiros. Quem lida com todos estes módulos é o <b>NPM</b>,
                    o gerenciador de pacotes do Node, que desde a versão 0.6.3
                    do Node, é a principal ferramenta de linha de comando.
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
                  <p class="text-justify fs-5">
                    O NPM em si gerencia, e muito bem, os módulos do Node e suas
                    dependências. Com o auxilio do comando <b>search</b> do NPM,
                    podemos procurar por pacotes com base em uma ou mais
                    palavras-chave: <i>"npm search xpto".</i> Para utilizarmos
                    um módulo, precisamos somente de instalar ele em nossa
                    máquina. Para instalarmos um pacote digitamos
                    <b>npm install</b> e depois o nome do pacote. Para
                    instalarmos versões mais recentes de determinado pacote,
                    precisamos especificar um número de versão.
                  </p>
                </div>
              </div>
            </div>
            <div class="col" id="img">
              <a class="navbar-brand d-flex justify-content-center">
                <img
                  src="../assets/images/pack.png"
                  width="300"
                  height="200"
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
          </div>
          <p>
            Os módulos do Node seguem um esquema de versionamento
            <i>maior.menor.emenda</i> - Ex: <b>$ npm i commander@1.0.0</b>, aqui
            foi instalada a versão 1.0.0 do commander, o caractere <b>@</b> é
            utilizado apenas para separar o nome do pacote com a sua versão.
          </p>
        </div>
      </div>
      <hr />
      <br />
      <p class="text-justify fs-5">
        Além disso, o NPM permite que pacotes também sejam instalados por meio
        de URLs <i>git</i>.
      </p>
      <div class="h2 d-flex justify-content-center">
        EXEMPLO - "git ://github.com/user/project.git#commit-ish"
      </div>
      <hr />
      <p>
        Dentro deste exemplo, <b>commit-ish</b> representa uma marca, SHA( ID do
        commit ), ou um ramo que pode ser fornecido como um argumento para o
        <b>git checkout</b>. A maioria dos módulos de Node utiliza o ecossistema
        do GitHub para controle de bugs e raestreamento de erros. É bem
        aconselhavel aprendermos a utilizar o GitHub para hospedarmos o nosso
        código.
      </p>
      <br />
      <p class="text-justify fs-5">
        Quando instalamos os pacotes, eles são salvos em algum lugar dentro de
        nossa máquina local. Geralmente, estão localizados dentro de um
        subdiretório conhecido como <b>node_modules</b>, que é subordinado ao
        nosso diretório atual. Podemos ver todos os módulos instalados, e
        verificar se tal módulo foi instalado, por meio do comando
        <i>npm ls</i>. Se algum módulo depender de outro, o NPM consegue
        observar essa dependência e automaticamente instalar junto qualquer
        módulo que seja necessário ser instalado também.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/nodemodules.png"
          width="300"
          height="200"
          class="
            d-inline-block
            align-text-top
            border border-danger border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        Figura 1: node_modules
      </h6>
      <br />
      <h1>Pacotes Globais</h1>
      <hr />
      <p class="text-justify fs-5">
        Os pacotes são bibliotecas que são incluidas em nosso programa. Os
        pacotes locais devem ser instalados em todos os projetos em que forem
        utilizados. Mas também existem os pacotes globais, que podem ser
        instalados em apenas um só projeto, e funcionam para todos os outros.
        Como regra, esses pacotes geralmente possuem ferramentas de linha de
        comandos, que devem ser incluidas na variável ambiental "PATH".
      </p>

      <p class="text-justify fs-5">
        Para instalarmos globalmente um pacote, utilizamos o comando:
      </p>
      <h2 class="d-flex justify-content-center">
        npm install -g ( ou npm install -global )
      </h2>
      <p class="text-justify fs-5">
        Podemos utilizar essa opção <b>-g</b> na maioria dos comandos NPM. Como
        em <b>"npm ls -g"</b> para visualizar os pacotes globais instalados, por
        exemplo.
      </p>
      <br />
      <h2>Ligando Pacotes</h2>
      <p class="text-justify fs-5">
        Com auxílio do NPM, podemos criar ligações para pacotes locais. Quando
        fazemos a ligação a um pacote, ele pode ser referenciado como sendo um
        global, isto é útil para quando estivermos desenvolvendo um módulo e
        queremos que outro projeto referencie a nossa cópia local desse módulo.
        São 2 fases para ocorrer uma ligação entre pacotes, a primeira, é a
        criação da ligação, primeiramente precisamos ir até o diretório do
        projeto em que queremos que se torne ligável, e digitar "npm link".
      </p>
      <h4 class="d-flex justify-content-center">
        <b
          >$ cd xpto <br />
          $ npm link
        </b>
      </h4>
      <p class="text-justify fs-5">
        A segunda fase da ligação de módulos é referenciar realmente a ligação,
        é parecido à instalação de um pacote. Agora, nós nos mudamos até o
        diretório que vai importar o módulo ligado, e digitamos mais uma vez o
        "npm link", só que agora precisamos escrever o nome do módulo ligado,
        desse jeito:
      </p>
      <h4 class="d-flex justify-content-center">
        <b
          >$ cd teste <br />
          $ npm link xpto</b
        >
      </h4>
      <p class="text-justify fs-5">
        Para fazermos alguma remoção de módulos ligados, é do mesmo jeito, só
        que agora trocamos o "npm link" pelo "npm unlink". <br />
        Quando quisermos atualizar algum pacote, utilizamos o comando
        <b>npm update</b>. <br />
        E para desinstalar pacotes, podemos usar tanto o <b>npm uninstall</b>,
        quanto o <b>npm rm</b>, seguido do nome do pacote que queremos remover.
      </p>

      <br />
      <h1>A função require()</h1>
      <hr />
      <a class="navbar-brand d-flex justify-content-center" href="#">
        <img
          src="../assets/images/require.png"
          width="90%"
          height="90%"
          class="d-inline-block align-text-top"
        />
      </a>
      <br />
      <p class="text-justify fs-5">
        Para gerenciar os pacotes do Node é utilizado o NPM. Porém, para
        importarmos módulos para os nossos programas, nós utilizamos uma função
        chamada
        <b>require()</b>! <br />
        Esta função utiliza um único argumento: Uma string que especifique o
        módulo que vai ser carregado. <br />
        Se o caminho para o módulo específicado existir, a função require() vai
        retornar um objeto que pode ser utilizado para conectar com o módulo, se
        o módulo nao for encontrado, vai ser emitida uma excessão. Este é um
        exemplo com o módulo commander, retirado da página 17 do livro:
      </p>
      <h4 class="d-flex justify-content-center">
        <b> var commander = require("commander")</b>
      </h4>
      <br />
      <h2>Módulos Centrais e Módulos de Arquivo</h2>
      <hr />
      <p class="text-justify fs-5">
        <b>Módulos Centrais</b> são módulos compilados no binário do Node. Esses
        módulos recebem a maior prioridade fornecida por <b>require()</b>,
        signifcando que , caso houver um confito de nomes entre os módulos, o
        módulo central será carregado.
      </p>
      <p>
        Um exemplo é o Node ter um módulo central chamado <b>HTTP</b>, que
        fornece funcionalidades para trabalho com o HTTP. Uma chamada
        <b>require("http")</b> sempre vai carregar o módulo central http.
      </p>
      <p class="text-justify fs-5">
        <b>Módulos de Arquivo</b> são módulos não centrais carregados a partir
        do sistema de arquivos. Podem ser especificados usando os caminhos
        absolutos, relativos ou pelo diretório <i>node_modules</i>. Os nomes de
        módulos que são tratados como caminhos absolutos, começam com uma barra
        ("/"), como mostra neste exemplo do livro:
      </p>
      <h4 class="d-flex justify-content-center">
        <b> require ("/some/path/foo");</b>
      </h4>
      <p class="text-justify fs-5">
        Se o caminho de um módulo não for relacionado à um módulo central, ou a
        um caminho absoluto ou relativo, o Node começa a buscar nas pastas de
        node_modules. <br />
        Quando a função require() não encontra uma correspondencia exata, ela
        adiciona extensões como <b>.js, .json e .node</b>. Se mesmo assim o Node
        não conseguir encontrar uma correspondência, uma mensagem de erro é
        emitida.
      </p>

      <br />
      <h1>O arquivo package.json</h1>
      <hr />
      <a class="navbar-brand d-flex justify-content-center" href="#">
        <img
          src="../assets/images/packagejson.png"
          width="30%"
          height="30%"
          class="d-inline-block align-text-top"
        />
      </a>
      <br />
      <p class="text-justify fs-5">
        Toda a informação relevante do nosso projeto precisa estar armazenada
        dentro de um arquivo de configuração conhecido como "package.json", que
        deve estar no diretório raiz de nosso projeto. Conforme indica a sua
        extensão, esse arquivo deve conter dados JSON válidos. Sem um
        package.json, nosso código fica inacessível ao npm. Os dados JSON neste
        arquivo aderem a um esquema. Devemos especificar um nome e uma versão a
        nosso pacote. O nome deve identificar nosso pacote unicamente no
        registro do NPM. Quando utilizamos o NPM, o nome se torna parte de um
        URL , de um argumento de linha de comandos e de um nome de diretório.
        Sendo assim, esses nomes não podem começar com um ponto, um sublinhado
        ou qualquer outro tipo de caractere que não seja seguro para URLs. Outra
        dica é utilizar nomes curtos, descritivos e que não contenham as
        palavras <b>js</b> e <b>node</b>, implícitamente.
      </p>
      <br />
      <p class="text-justify fs-5">
        O campo <i>description</i> serve para escrevermos uma breve descrição
        textual de nosso pacote. NO campo <i>keywords</i> é onde fornecemos
        algumas palavras-chave para descrevermos melhor o nosso pacote. Essas
        palavras-chave podem ser buscadas pelo comando <b>search</b> do NPM.
      </p>
      <a class="navbar-brand d-flex justify-content-center" href="#">
        <img
          src="../assets/images/package2.png"
          width="40%"
          height="40%"
          class="
            d-inline-block
            align-text-top
            border border-danger border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        Figura 2: package.json
      </h6>
      <br />
      <p class="text-justify fs-5">
        No campo <i>author</i> é especificado o nome de apenas o autor do
        projeto, se houverem outros contribuintes, eles podem ser especificados
        em um segundo campo, o <i> contributors</i>.
      </p>
      <br />
      <h2>Dependências</h2>
      <hr />
      <p class="text-justify fs-5">
        As <b>dependências do pacote</b> são especificadas no campo
        <i>dependencies</i> dentro do package.json, esse campo é um objeto que
        mapeia nomes de pacotes para strings de versão, essa string pode ser
        qualquer expressão de versão entendida pelo NPM. <br />
        Uma dica para atualizarmos automaticamente o campo
        <i>dependencies</i> conforme instalamos novos pacotes, é utilizar o
        sinalizador <b>--save</b> junto ao comando <i>npm install</i>. <br />
        Ex: "npm install xpto --save" <br />
      </p>
      <br />
      <h2>Scripts</h2>
      <hr />
      <p class="text-justify fs-5">
        Esse campo contém um mapeamento de comandos npm para comandos de script.
        Esses comandos, que podem ser quaisquer comandos executáveis, são
        rodados num processo de shell externo. <br />
        OS 2 comandos mais utilizados sao o <b>start</b>( inicia o app ) e o
        <b>test</b>( roda um ou mais scripts de teste de nosso aplicativo), Veja
        um exemplo, retirado do livro, na página 25: <br />
        <br />
        <b
          >"scripts": { <br />
          "start": "node server.js", <br />
          "test": "echo \"Error: no test specified\" && exit 1" <br />
          }</b
        >
        <br />
        Para executar os comandos <i>start</i> e <i>test</i>, precisamos passar
        o nome do comando para o NPM. Se o NPM tratar um código de saída
        diferente de zero, ele trata como um erro, e aborta o comando.
      </p>
      <br />
      <h2>Como gerar um Arquivo package.json ?</h2>
      <hr />
      <p class="text-justify fs-5">
        Para ajudar a resolver diversos problemas, e deixar menos entediante e
        difìcil, o Node nos oferece o <b>npm init</b> , um assistente de linha
        de comandos que cria automaticamente um package.json para nós. Se o
        package.json ja existir, o npm init apenas adiciona informações novas ao
        arquivo.
      </p>
      <br />
      <h2>O objeto module</h2>
      <hr />
      <p class="text-justify fs-5">
        Por fim, o Node oferece uma variável livre "module", em todo arquivo,
        ela representa o módulo atual. Esse <i>module</i> é um objeto que contém
        uma propriedade conhecida como <b>exports</b>, cujo valor é um objeto
        vazio. O valor de exports é retornado pela função require(), definindo
        assim, a interface pública de um módulo. O objeto module oferece várias
        outras propriedades, que não sao comumente utilizadas, como o id, o
        filename, o loaded e o children.
      </p>
      <br />
      <h2>Publicando no NPM</h2>
      <hr />
      <p class="text-justify fs-5">
        Para publicarmos nossos módulos no NPM, precisamos criar uma conta de
        usuário no NPM. DEppois de criada a conta, podemos acessar os nossos
        módulos públicos pelo endereço "https ://npmjs.org/~nome-do-usuario".
        <br />
        Depois de configurarmos a nossa conta no NPM, temos que criar um arquivo
        package.json para nosso módulo. No fim, digitamos o comando
        <b>npm publish</b> para criar uma entrada no NPM baseada em nosso
        arquivo package.json.
      </p>
      <br />
      <hr>
      <br>
      <h3>
        Em resumo, boa parte do desenvlvimento de aplicativos Node é trabalhar
        com <b>npm</b> e pacotes de terceiros. Aqui não foi abordado todo o
        sistema de pacotes, mas sim, o suficiente para podermos trabalhar com
        Node.
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "resumo-um",
  components: {},
};
</script>

<style scoped>
</style>