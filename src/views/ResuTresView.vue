<template>
  <div class="container pt-3">
    <div class="about">
      <div class="container">
        <br />
        <h1>Capitulo 4 - Os Emissores de Eventos</h1>
        <span> Pro Node.js para desenvolvedores </span>
        <br />
        <hr />
        <a class="navbar-brand d-flex justify-content-center">
          <img
            src="../assets/images/emissor.png"
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
                    No último capítulo foi apresentado como funciona o modelo de
                    programação orientado á eventos do Node. Aqui, neste resumo,
                    veremos sobre os Event Emitters ou Emissores de Eventos, que
                    em teoria dentro do Node, são objetos que criam novos
                    eventos. <br />
                    Para se criar um emissor de eventos, devemos fazer a
                    importação do módulo central <b>events</b> e da instanciação
                    de um objeto chamado <i>EventEmitter</i>.
                  </p>
                </div>
              </div>
            </div>
            <div class="col" id="img">
              <a class="navbar-brand d-flex justify-content-center">
                <img
                  src="../assets/images/event-emitter.png"
                  width="300"
                  height="200"
                  class="d-inline-block align-text-top"
                />
              </a>
              <h6 class="navbar-brand d-flex justify-content-center">
                <b> Figura 1 </b> : Como funciona um emissor de eventos.
              </h6>
            </div>
          </div>
          <br />
          <p>
            A instância desse objeto pode, então, criar novos eventos
            utilizando-se do seu método <b>emit( )</b>. Veja o exemplo abaixo,
            nele o emissor de Eventos cria um evento chamado "testeUm" (nomes de
            eventos geralmente são nomeados no estilo camelCase), dentro de um
            arquivo chamado de "event01.js".
          </p>
          <div class="col" id="img">
            <a class="navbar-brand d-flex justify-content-center">
              <img
                src="../assets/images/teste-Um.png"
                width="300"
                height="150"
                class="
                  d-inline-block
                  align-text-top
                  border border-danger border border-4
                "
              />
            </a>
            <h6 class="navbar-brand d-flex justify-content-center">
              <b> Figura 2 </b> : Emissor de Eventos Simples.
            </h6>
          </div>
        </div>
      </div>
      <hr />
      <br />

      <p class="text-justify fs-5">
        Frequentemente, os eventos precisam fornecer alguma informação adicional
        junto de seu nome. Como, quando digitamos alguma letra, o evento também
        especifica qual tecla foi pressionada. Para conseguir fazer funcionar
        essa funcionalidade, o método <b>emit( )</b> recebe um número arbitrário
        de argumentos opcionais, logo após o nome do evento. Veja agora, no
        exemplo da <b>Figura 3</b>, como alguns argumentos adicionais são
        passados a <i>emit( )</i>.
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
        Esse terceiro resumo explorou muito bem o conceito dos emissores de evento,
        explicou um pouco sobre para que serve o objeto EventEmitter, além de mostrar como
        faz para podermos "escutar" um evento por meio dos métodos emitter.on ou
        addListener. Além de explicar como funciona para adicionarmos um novo
        Listener. 
      </h3>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "resumo-tres",
  components: {},
};
</script>
  
  <style scoped>
</style>