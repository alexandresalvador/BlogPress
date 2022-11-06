<template>
  <div class="container pt-3">
    <div class="about">
      <div class="container">
        <br />
        <h1>Capítulo 6 - O Sistema de Arquivos do Node</h1>
        <span> Pro Node.js para desenvolvedores </span>
        <br />
        <hr />
        <a class="navbar-brand d-flex justify-content-center" href="#">
          <img
            src="../assets/images/rescinco/foto-arquivos.png"
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
                  src="../assets/images/rescinco/foto-arquivo1.jpg"
                  width="400"
                  height="300"
                  class="d-inline-block align-text-top"
                />
              </a>
              <h6 class="navbar-brand d-flex justify-content-center">
                <b> Figura 1: Exemplo via : LuizTools</b>
              </h6>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify fs-5">
                    Este capítulo promete mostrar como o sistema de arquivos
                    pode ser outra grande ferramenta no cinto de utilidades do
                    desenvolvedor Node. Ja que pelo Node ser uma linguagem
                    madura do lado servidor e ter as mesmas responsabilidades
                    que linguagens como PHP, Java e Python, o sistema de
                    arquivos é uma realidade que não depende de implementações
                    específicas de fornecedor ou de "hacks".
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify fs-5">
                    Indo direto ao ponto, todo app Node possui uma série de
                    variáveis que indicam aonde o Node está trabalhando no
                    sistema de arquivos. Uma dessas variáveis é a
                    <b>__filename</b>, referenciada como o caminho absoluto do
                    arquivo que está em execução. Também temos a
                    <b>__dirname</b>, similar a outra variável, essa é
                    referenciada como sendo o caminho absoluto do diretório que
                    possui o arquivo que está em execução. Ambas podem ser
                    acessadas sem que seja necessária a importação de algum
                    módulo. Na <b>Figura 2</b> é mostrado o uso de ambas as
                    variáveis:
                  </p>
                </div>
              </div>
            </div>
            <div class="col" id="img">
              <a class="navbar-brand d-flex justify-content-center">
                <img
                  src="../assets/images/rescinco/foto-arquivo2.jpg"
                  width="500"
                  height="300"
                  class="d-inline-block align-text-top"
                />
              </a>
              <h6 class="navbar-brand d-flex justify-content-center">
                <b> Figura 2: Filename e Dirname</b>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <br />
      <h1>O módulo <i>path</i></h1>
      <hr />
      <p class="text-justify fs-5">
        Como vimos no nosso primeiro resumo, os <b>Módulos de Arquivo</b> são
        módulos não centrais carregados a partir do sistema de arquivos. Eles
        podem ser especificados pelos caminhos absolutos, relativos ou pelo
        diretório <i>node_modules</i>. Os nomes de módulos que são tratados como
        caminhos absolutos, começam com uma barra ("/"), EX:
        <b> require ("/some/path/foo");</b> <br />
        Se o caminho de um módulo não for relacionado à um módulo central, ou a
        um caminho absoluto ou relativo, o Node começa a buscar nas pastas de
        node_modules. <br />
        Os <b>Módulos Centrais</b> são módulos compilados no binário do Node. O
        módulo <i>path</i> é um módulo central que fornece vários métodos úteis
        para se trabalhar com caminhos de arquivos. Apesar deste módulo
        trabalhar com caminhos de arquivos, a maioria de seus métodos só
        realizam simples transformações de strings, sem que, de fato, precisem
        acessar o sistema de arquivos. Na figura 3 vemos como se inclui o módulo
        path dentro de um app node.
      </p>
      <a class="navbar-brand d-flex justify-content-center" href="#">
        <img
          src="../assets/images/rescinco/foto-arquivo3.jpg"
          width="500"
          height="300"
          class="d-inline-block 
                 align-text-top
                 border border-danger 
                 border border-4"
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 3</b>
        </h6>
      <br />

      <p class="text-justify fs-5">
        Lidar com caminhos entre diversos sistemas operacionais poder ser um
        pouco chato, ja que geralmente o Windows usa uma barra invertida (\)
        para separar as partes de um caminho de um arquivo, diferentemente de
        outros sistemas operacionais -> (/). Para solucionar isto, utilizamos a
        propriedade <i>path.sep</i>, que serve para manter o separador de
        arquivos do sistema operacional atual. A figura 4 mostra como
        <i>path.sep</i> em conjunto com o método <i>join()</i> de matrizes,
        podem ser usados pra se criar caminhos de arquivos específicos da
        plataforma.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo4.jpg"
          width="500"
          height="300"
          class="d-inline-block
                align-text-top
                border border-danger 
                border border-4"
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 4 </b>
      </h6>
      <br />
      <h1>O Módulo <i> fs</i> </h1>
      <hr />
      <p class="text-justify fs-5">
        .
      </p>

      <h2>Determinando se um arquivo existe</h2>
      <p class="text-justify fs-5">
        .
      </p>
      <h2>Abrindo Arquivos</h2>
      <p class="text-justify fs-5">
        .
      </p>
      <h2>Lendo dados de arquivos</h2>
      <p class="text-justify fs-5">
        .
      </p>

      <br />
      <h2>Os métodos <i>readFile()</i> e <i>readFileSync()</i></h2>
      <hr />
      <!-- <a class="navbar-brand d-flex justify-content-center" href="#">
        <img
          src="../assets/images/rescinco/foto-arquivo2.jpg"
          width="50%"
          height="50%"
          class="d-inline-block align-text-top"
        />
      </a> -->
      <br />
      <p class="text-justify fs-5">
        .
      </p>
      <br />
      <h2>Os métodos <i>writeFile()</i> e <i>writeFileSync()</i></h2>
      <hr />
      <p class="text-justify fs-5">
        .
      </p>
      <p>
        .
      </p>
      <br />
      <h2>Fechando, renomeando e excluindo arquivos</h2>
      <p class="text-justify fs-5">
        .
      </p>
      <br>
      <h2>Criando, lendo e removendo diretórios</h2>
      <p class="text-justify fs-5">
        .
      </p>
      <br />
      <h1>Vigiando arquivos</h1>
      <hr />
      <!-- <a class="navbar-brand d-flex justify-content-center" href="#">
        <img
          src="../assets/images/packagejson.png"
          width="30%"
          height="30%"
          class="d-inline-block align-text-top"
        />
      </a> -->
      <hr />
      <p class="text-justify fs-5">
        .
      </p>
      <br />
      <hr />
      <br />
      <h3>
        Em resumo.....
      </h3>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "resumo-cinco",
  components: {},
};
</script>
  
  <style scoped>
</style>