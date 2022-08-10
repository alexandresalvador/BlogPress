<template>
  <div class="container pt-3">
    <div class="about">
      <div class="container">
        <br />
        <h1>Capítulo 2 - O Sistema de Módulos de Node</h1>
        <span> Páginas 11 - 33</span>
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
                    máquina. Para instalarmos um pacote difitamos
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