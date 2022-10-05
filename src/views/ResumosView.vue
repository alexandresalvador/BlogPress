<template>
  <div>
    <div class="container pt-3">
      <div class="about">
        <br />
        <h1>Todos os Resumos</h1>
        <br />
        <hr />
        <div class="container pt-3">
          <div class="row">
            <p class="text-success">10/08/2022</p>
            <div class="col d-flex align-items-center" id="img">
              <a class="navbar-brand">
                <img
                  src="../assets/images/imgcap2.jpeg"
                  width="70%"
                  height="70%"
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify">
                    <b> Resumo #1 - Capitulo 2 - O Sistema de Módulos de Node </b> 
                  </p>
                  <h6>
                    Nós podemos resolver muitos problemas mais complexos
                    utilizando a funcionalidade central do Node. Mas, um dos
                    melhores pontos do Node fica em sua grande comunidade de
                    desenvolvedores e a extensa quantidade de módulos de
                    terceiros. Quem lida com todos estes módulos é o...
                  </h6>
                    <a href="#" class="">
                    <router-link to="/sistemas-modulos-node">
                      Continuar lendo
                    </router-link>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <p class="text-success">24/08/2022</p>
            <div class="col d-flex align-items-center" id="img">
              <a class="navbar-brand">
                <img
                  src="../assets/images/imgcap3.jpeg"
                  width="70%"
                  height="70%"
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify">
                    <b> Resumo #2 - Capítulo 3 - O módulo Async </b>
                  </p>
                   <h6>
                    Neste resumo iniciaremos uma exploração do modelo de
                    programação do Node, o objetivo aqui é falar de forma mais
                    clara sobre uma boa parte dos conceitos que envolvem
                    programação assincrona, o Tratamento de Exceções e o...
                  </h6>
                  <a href="#" class="">
                    <router-link to="/modulo-async">
                      Continuar lendo
                    </router-link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <p class="text-success">14/09/2022</p>
            <div class="col d-flex align-items-center" id="img">
              <a class="navbar-brand">
                <img
                  src="../assets/images/imgcap4.jpeg"
                  width="70%"
                  height="70%"
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify">
                    <b> Resumo #3 - Capítulo 4 - Os Emissores de Eventos </b>
                  </p>
                  <h6>
                    No último capítulo foi apresentado como funciona o modelo de
                    programação orientado á eventos do Node. Aqui, neste resumo,
                    veremos sobre os Event Emitters ou Emissores de Eventos, que em teoria....
                  </h6>
                  <a href="#" class="">
                    <router-link to="/emissores-eventos">
                      Continuar lendo
                    </router-link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <p class="text-success">05/10/2022</p>
            <div class="col d-flex align-items-center" id="img">
              <a class="navbar-brand">
                <img
                  src="../assets/images/imgcap11.jpeg"
                  width="70%"
                  height="70%"
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify">
                    <b> Resumo #4 - Capítulo 11 - Protocolo HTTP </b>
                  </p>
                  <h6>
                    O Protocolo de Transferência de Hipertexto, também conhecido
                    como HTTP, se dirige a Web, sendo um protocolo sem estado,
                    baseado em texto e que funciona sobre o...
                  </h6>
                  <a href="#" class="">
                    <router-link to="/protocolo-http">
                      Continuar lendo
                    </router-link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <p class="text-danger">12/10/2022</p>
            <div class="col d-flex align-items-center" id="img">
              <a class="navbar-brand">
                <img
                  src="../assets/images/node.png"
                  width="70%"
                  height="70%"
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify">
                    Resumo #5 - Capítulo 12 - A Estrutura Express
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <p class="text-danger">26/10/2022</p>
            <div class="col d-flex align-items-center" id="img">
              <a class="navbar-brand">
                <img
                  src="../assets/images/node.png"
                  width="70%"
                  height="70%"
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify">Resumo #6 - Capítulo 15 - Testando</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todos-resumos",
};
</script>

<style scoped>
p {
  font-family: "Poppins", sans-serif;
}
</style>