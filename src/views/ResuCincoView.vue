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
                <b> Figura 2: Filename e Dirname.</b>
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
        acessar o sistema de arquivos. Na <b>Figura 3</b> vemos como se inclui o módulo
        path dentro de um app node.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo3.jpg"
          width="500"
          height="300"
          class="
            d-inline-block
            align-text-top
            border border-info border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 3: Importando o módulo.</b>
      </h6>
      <br />

      <p class="text-justify fs-5">
        Lidar com caminhos entre diversos sistemas operacionais poder ser um
        pouco chato, ja que geralmente o Windows usa uma barra invertida (\)
        para separar as partes de um caminho de um arquivo, diferentemente de
        outros sistemas operacionais -> (/). Para solucionar isto, utilizamos a
        propriedade <i>path.sep</i>, que serve para manter o separador de
        arquivos do sistema operacional atual. A <b>Figura 4</b> mostra como
        <i>path.sep</i> em conjunto com o método <i>join()</i> de matrizes,
        podem ser usados pra se criar caminhos de arquivos específicos da
        plataforma.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo4.jpg"
          width="500"
          height="300"
          class="
            d-inline-block
            align-text-top
            border border-info border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 4: Criando diretórios funcionais. </b>
      </h6>
      <br />
      <h1>O Módulo <i> fs</i></h1>
      <hr />
      <p class="text-justify fs-5">
        Basicamente, aplicativos Node realizam Entrada/Saída de arquivos através
        do módulo <b>fs</b>, um módulo central que possui métodos que fornecem
        várias operações padrões encapsuladas do sistema de arquivos. Para
        importar esse módulo é facil: <br />
        <b>const fs = require('fs');</b> <br />
        Quase todos os métodos do sistema de arquivos possui versões síncronas e
        assíncronas. Algo notável ao "fs" é a sua vasta quantidade de métodos
        síncronos, que podem ser indentificados ao olharmos seu sufixo
        <b>Sync</b>. Já as versões assíncronas de cada método recebe uma função
        de rechamada como último argumento. <br />
        Mas porque quase metade de todos os métodos do sistema de arquivos é
        síncrona ? Geralmente muitos aplicativos acessam o sistema de arquivos
        em busca de dados de configuração, na inicialização. Quando isso
        acontece, é muito mais simples ler sincronamente um arquivo de
        configuração, sem uma grande preocupação com a potencialização do
        desempenho. <br />
        Além de que, o Node pode ser utilizado para se criar programas
        utilitários simples, como scripts de shell, esses scripts podem se virar
        com base em um comportamento síncrono. Mas não se esqueça, precisamos
        utilizar métodos síncronos com muita cautela.
      </p>
      <br />
      <h2>Determinando se um arquivo existe:</h2>
      <br>
      <p class="text-justify fs-5">
        Para podermos determinar se um dado caminho existe utilizamos os métodos
        <b>exists()</b> e <b>existsSync()</b>. Ambos os métodos recebem uma
        string de caminho como argumento. <br />
        Se a versão síncrona for usada, um valor booleano que representa a
        existencia do caminho é retornado. Já se a versão assíncrona é
        utilizada, o mesmo valor booleano agora é passado como argumento para a
        função de rechamada. <br />
        Veja no exemplo da <b>Figura 5</b>, nele é verificado a existência do diretório
        raiz usando ambos os métodos (exists e existsSync). No momento em que a
        funçao de rechamada de <i>exists()</i> é invocada, os resultados de
        ambos os métodos são comparados. Obviamente eles devem retornar o mesmo
        valor, mas supondo uma equivalência, o caminho é impresso, seguido de um
        valor booleano que representa a sua existência.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo5.jpg"
          width="500"
          height="300"
          class="
            d-inline-block
            align-text-top
            border border-danger border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 5: Verificando a existência de um arquivo. </b>
      </h6>
      <br />
      <br />
      <h2>Abrindo Arquivos:</h2>
      <br>
      <p class="text-justify fs-5">
        Para abrir arquivos, utilizamos os métodos <b>open()</b> e
        <b>openSync()</b>. O primeiro argumento para ambos esses métodos é uma
        string que representa o nome do arquivo a ser aberto. O segundo
        argumento é uma string sinalizadora que deve denotar como o arquivo
        deverá ser aberto. O Node permite de várias maneiras diferentes você
        abrir arquivos, somente para leitura, leitura e escrita, apensamento, se
        o arquivo não existir ele é criado, etc... <br />
        Também temos um terceiro argumento opcional, tanto para
        <b>open()</b> quanto para <b>openSync()</b>, que especifica o modo, que
        por omissão, é "0666". O método assíncrono "Open()" recebe uma função de
        rechamada como quarto argumento. Como argumento, a função de rechamada
        recebe um erro e o descritor de arquivo do arquivo aberto. O descritor
        de arquivo, se passado à função de rechamada ou retornado por
        "openSync()", pode ser passado a outras funções para realização de
        operações de arquivo tais como leitura e escrita. <br />
        Na <b>Figura 6</b>, usamos o método open() para abrir o arquivo /dev/null
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo6.jpg"
          width="500"
          height="300"
          class="
            d-inline-block
            align-text-top
            border border-danger border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 6: Abrindo arquivo utilizando o "open()". </b>
      </h6>
      <br />
      <br />
      <h2>Lendo Dados de Arquivos:</h2>
      <br>
      <p class="text-justify fs-5">
        Para lermos dados de um arquivo aberto, utilizamos os métodos
        <i>read()</i> e <i>readSync()</i>. Esses métodos recebem uma gama de
        argumentos, então o exemplo da <b>Figura 7</b> vai nos ajudar a entender mais
        sobre eles. <br />
        Neste exemplo, que esta lendo dados de um arquivo "teste.txt", inicia
        com uma chamada a <i>stat()</i>. Isto é interessante porque o tamanho do
        arquivo vai ser necessário mais tarde. <br />
        Logo depois, o arquivo é aberto usando-se o "open()", um passo
        necessário para podermos obter o descritor de arquivo. Depois de
        abrirmos o arquivo, iniciamos um <b>buffer de dados</b>, grande o
        suficiente para conter todo o arquivo.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo7.jpg"
          width="650"
          height="400"
          class="
            d-inline-block
            align-text-top
            border border-dark border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 7: Lendo um arquivo usando "read()".</b>
      </h6>
      <br />
      <p class="text-justify fs-5">
        Em seguida, vem a chamada real a <b>read()</b>. O
        <b>primeiro argumento</b> é o descritor de arquivo fornecido por
        "open()". O <b>segundo argumento</b> é o buffer a ser utilizado para
        guardar os dados lidos do arquivo. O <b>terceiro</b> se refere ao
        deslocamento, dentro do buffer, em que os dados irão ser colocados (aqui
        neste exemlo o deslocamento é 0). <br />
        O <b>quarto</b> indica o número de bytes a serem lidos (neste exemplo,
        todo o conteudo do arquivo será lido). E por último, o
        <b>quinto argumento</b> se refere a um <i>inteiro</i> especificando a
        posição no arquivo do inicio da leitura, se esse valor for "null", a
        leitura se inicia na posição atual do arquivo, que é ajustada para o
        ínicio quando ele é aberto inicialmente e é atualizada a cada leitura.
        <br />
        Se fosse uma chamada a <b>readSync</b>, ele retornaria o número de bytes
        que foram lidos com sucesso do arquivo. A função assìncrona "read()"
        receberia como seu último argumento uma função de rechamada, que, por
        sua vez, receberia um objeto de erro, o número de bytes lidos e o buffer
        como argumentos. na função de rechamada, o buffer de dados crus são
        convertidos numa string <b>"UTF-8"</b> e, logo após, sâo mostrados no
        console.
      </p>
      <hr />
      <br />
      <h2>Os métodos <i>readFile()</i> e <i>readFileSync().</i></h2>
      <br />
      <p class="text-justify fs-5">
        Esses 2 métodos oferecem uma maneira muito mais breve de se ler dados de
        arquivos. Recebendo um nome de arquivo como argumento. eles leem todo o
        coneúdo desse arquivo automaticamente, sem que fosse necessário o uso de
        descritores de arquivos, buffers ou outras chatices. <br />
        Na <b>Figura 8</b>, vemos o código feito na <i>>Figura 7</i>, só que dessa vez,
        reescrito usando "readFile()". veja que o segundo argumento para
        "readFile()" especifica que os dados devem ser retornados como uma
        string UTF-8. O buffer "cru" será retornado, caso esse argumento for
        null, ou omitido.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo8.jpg"
          width="500"
          height="300"
          class="
            d-inline-block
            align-text-top
            border border-dark border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 8: Utilizando o "readFile()". </b>
      </h6>
      <br />

      <br />
      <h1>Escrevendo Dados em Arquivos:</h1>
      <hr />
      <p class="text-justify fs-5">
        Escrever dados em um arquivo é muito similar a lê-los. Os métodos usados
        para se escreverem um arquivo são <b>write()</b> e <b>writeSync()</b>.
        Veja o exemplo da <b>Figura 9</b>.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo9.jpg"
          width="650"
          height="400"
          class="
            d-inline-block
            align-text-top
            border border-danger border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 9: Utilizando o "write()". </b>
      </h6>
      <br />
      <p class="text-justify fs-5">
        Neste exemplo, vemos o método <b>write()</b> sendo utilizado para abrir
        um arquivo "teste.txt" para escrita. Também é criado um buffer que
        contém os dados a serem escritos no arquivo. Em seguida, "write()" é
        utilizado para realmente escrever dados no arquivo. <br />
        O <b>primeiro argumento</b> para write() é o descritor de arquivo
        fornecido por "open()". O <b>segundo argumento</b> é o buffer contendo
        os dados a serem escritos. O <b>terceiro</b> e <b>quarto</b> argumentos
        correspondem ao deslocamento do buffer para o ínicio da escrita e o
        número de bytes a serem escritos. <br />
        O <b>quinto argumento</b> é um <i>inteiro</i> representando a posição do
        arquivo em que a escrita deve começar. Se esse argumento for "null", os
        dados são escritos na posição atual do arquivo, e "writeFileSync()"
        retorna o numero de bytes escritos com sucesso no arquivo. Já por outro
        lado, "write()" recebe uma função de rechamada com 3 argumentos: um
        objeto de exceção, o número de bytes escritos e o objeto de buffer.
      </p>

      <br />
      <h2>Os métodos <i>writeFile()</i> e <i>writeFileSync().</i></h2>
      <hr />
      <p class="text-justify fs-5">
        Esses métodos fornecem atalhos para <b>write()</b> e <b>writeSync()</b>.
        Como você poder ver na <b>Figura 10</b>, o <b>writeFile()</b> recebe um caminho
        de arquivo e os dados a serem escritos como seus 2 primeiros argumentos.
        Com um terceiro argumento opcional, podemos especificar a codificação
        (UTF-8) e outras opções. Por fim, a função de rechamada para
        <b>writeFile()</b> recebe um objeto de erro como seu único argumento.
      </p>
      <p>
        Dois outros métodos, <i>appendFile()</i> e <i>appendFileSync()</i> são
        utilizados para se apensar dados a um arquivo existente, sem sobrepor
        dados existentes. Se o arquivo ainda não existir, ele então é criado.
        Esses 2 métodos são utilizados da mesma forma que <i>writeFile()</i> e
        <i>writeFileSync()</i>.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo10.jpg"
          width="650"
          height="400"
          class="
            d-inline-block
            align-text-top
            border border-danger border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 10: Utilizando o "writeFile()". </b>
      </h6>
      <br />
      <hr>
      <br />
      <h1>Fechando, Renomeando e Deletando Arquivos:</h1>
      <br>
      <p class="text-justify fs-5">
        Como regra geral de programação, sempre fechamos qualquer arquivo que
        abrimos. No Node, arquivos são fechados usando-se de métodos
        <b>close()</b> e <b>closeSync</b>. <br />
        Ambos recebem um descritor de arquivo como argumento, Na versão
        assíncrona, uma função de rechamada é esperada como segundo argumento. O
        único argumento dessa função de rechamada é usado para indicar um
        possível erro. <br />
        Na <b>Figura 11</b>, um arquivo é aberto usando-se <b>open()</b>e, logo depois
        é fechado imediatamente usando se <b>close()</b>.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo11.jpg"
          width="650"
          height="400"
          class="
            d-inline-block
            align-text-top
            border border-warning border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 11: Fechando Arquivos.</b>
      </h6>
      <br />
      <p class="text-justify fs-5">
        Para renomear um arquivo, nós usamos os métodos <b>rename()</b> e
        <b>renameSync</b>. O primeiro argumento para esses métodos é o
        <b> nome atual do arquivo </b> a ser renomeado. E obviamente, o segundo
        argumento é o novo nome desejado. <br />
        A função de rechamada para "rename()" recebe um argumento, representando
        uma possivel exceçâo. Na <b>Figura 12</b>, vemos como é facil renomear o
        arquivo "teste.txt" como "teste2.txt".
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo12.jpg"
          width="650"
          height="400"
          class="
            d-inline-block
            align-text-top
            border border-warning border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 12: Renomeando Arquivos.</b>
      </h6>
      <br />
      <p class="text-justify fs-5">
        Para excluirmos um arquivo, nós usamos os métodos <b>unlink()</b> e
        <b>unlinkSync</b>, que recebe um caminho de arquivo como argumento. A
        versão assíncrona recebe também uma função de rechamada como argumento.
        Essa função recebe um argumento, representando uma possivel exceçâo. Na
        <b>Figura 13</b>, temos um código que serve para excluir um arquivo chamado
        "teste.txt" localizado no mesmo diretório usando o "unlink()".
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo13.jpg"
          width="650"
          height="400"
          class="
            d-inline-block
            align-text-top
            border border-warning border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 13: Excluindo Arquivos.</b>
      </h6>
      <br />

      <br />
      <h1>Criando diretórios: </h1>
      <br>
      <p class="text-justify fs-5">
        Novos diretório sâo criados com os métodos <b>mkdir()</b> e
        <b>mkdirSync()</b>. O primeiro argumento para "mkdir()" é o caminho do
        diretório a ser criado. Como esse método cria apenas o diretório do
        último nível, ele não pode ser utilizado para construir toda uma
        hierarquia de diretórios numa única chamada. <br />
        Esse método recebe um segundo argumento opcional, que especifica as
        permissões do diretório e que tem valor omissivo igual a "0777". A
        versão assíncrona também recebe uma função de rechamada, cujo seu único
        argumento é uma possível exceção. No nosso último exemplo, na <b>Figura 14</b>,
        vemos que o "mkdir()" é usado para criar a árvore de diretórios
        teste/teste2 no diretório do aplicativo.
      </p>
      <a class="navbar-brand d-flex justify-content-center">
        <img
          src="../assets/images/rescinco/foto-arquivo14.jpg"
          width="650"
          height="400"
          class="
            d-inline-block
            align-text-top
            border border-primary border border-4
          "
        />
      </a>
      <h6 class="navbar-brand d-flex justify-content-center">
        <b> Figura 14: Criando diversos diretórios.</b>
      </h6>

      <br />
      <hr />
      <br />
      <h3>
        Neste resumo um pouco mais extenso, foi apresentado neste capítulo, como
        funcionam as APIs de Sistema de Arquivos do Node. Vimos também que,
        trabalhar de forma eficaz com o sistema de arquivos é um fator
        fundamental em qualquer aplicativo legítimo. já que, sem um acesso ao
        sistema de arquivos, um aplicativo nao consegue realizar simples tarefas
        como ler arquivos de configuração, criar arquivos de saída e escrever em
        regisros de erros. Vimos como o módulo fs é fundamental para se tratar
        as tarefas do sistema de arquivos do Node, e quais são os métodos mais
        importantes que esse módulo nos trás. É claro, não se teve como mostrar
        todos os métodos neste resumo, mas se voce estiver interessado, você
        poder ver a documentação completa do módulo fs acessando esse link
        abaixo, <b>Até mais!</b>
      </h3>
      <br />
      <div class="col">
        <a
          class="btn btn-primary btn-lg btn-floating"
          style="background-color: #25d366"
          href="http://nodejs.org/api/fs.html"
          role="button"
          ><i class="bi bi-files"></i
        ></a>
        <b> Documentaçâo : Node.js - Filesystem </b>
      </div>
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