<template>
  <div class="container pt-3">
    <div class="about">
      <div class="container">
        <br />
        <h1>Bem-Vindo á meu Blog!</h1>
        <hr />
        <div class="col d-flex align-items-center" id="img">
          <div class="carousel-item active" id="imagem-wrapper">
            <a class="navbar-brand">
              <img
                src="../assets/images/imgbanner.jpeg"
                class="d-block w-100"
                id="imagem"
                alt="..."
              />
            </a>
          </div>
        </div>
        <div class="container3">
          <div class="row">
            <h1 class="text-justify">Resumos em destaque</h1>
            <hr />
            <div class="col d-flex justify-content-center" id="img">
              <a class="navbar-brand">
                <img
                  src="../assets/images/imgcap2.jpeg"
                  width="300"
                  height="200"
                  class="
                    d-inline-block
                    align-text-top
                    border
                    shadow
                    p-3
                    mb-5
                    bg-white
                    rounded
                  "
                />
              </a>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify">
                    <b>
                      Resumo #1 - Capitulo 2 - O Sistema de Módulos de Node
                    </b>
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
          <hr />
          <br />
          <div class="row">
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify">
                    <b> Resumo #2 - Capítulo 3 - O módulo Async </b>
                  </p>
                  <h6>
                    Nós podemos resolver muitos problemas mais complexos
                    utilizando a funcionalidade central do Node. Mas, um dos
                    melhores pontos do Node fica em sua grande comunidade de
                    desenvolvedores e a extensa quantidade de módulos de
                    terceiros. Quem lida com todos estes módulos é o...
                  </h6>

                  <a href="#" class="">
                    <router-link to="/modulo-async">
                      Continuar lendo
                    </router-link>
                  </a>
                </div>
              </div>
            </div>
            <div class="col d-flex justify-content-center" id="img">
              <a class="navbar-brand">
                <img
                  src="../assets/images/imgcap3.jpeg"
                  width="300"
                  height="200"
                  class="
                    d-inline-block
                    align-text-top
                    border
                    shadow
                    p-3
                    mb-5
                    bg-white
                    rounded
                  "
                />
              </a>
            </div>
          </div>
        </div>

        <div class="container3">
          <div class="row">
            <h1 class="text-justify">Sobre Mim</h1>
            <hr />
            <br />
            <div class="col d-flex align-items-center" id="img">
              <a class="navbar-brand">
                <img
                  src="../assets/images/eu.jpg"
                  width="50%"
                  height="50%"
                  class="
                    d-inline-block
                    align-text-top
                    border
                    shadow
                    p-3
                    mb-5
                    bg-white
                    rounded-circle
                  "
                />
              </a>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify fs-5">
                    Olá, meu nome é Alexandre Salvador, tenho 20 anos, sou
                    estudante de programação, estou cursando Sistemas Para
                    Internet na Faculdade Ielusc, estou no sexto semestre. Ainda
                    não possuo nenhum emprego na área, apenas estou estudando no
                    momento. Pretendo me formar na faculdade em 2023. Este blog
                    será aonde eu publicarei 6 artigos tratando de assuntos
                    diversos sobre o Node.js. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div class="container3">
          <div class="row">
            <h1 class="text-justify">Sobre o Livro</h1>
            <hr />
            <div class="col d-flex align-items-center" id="img">
              <a class="navbar-brand">
                <img
                  src="../assets/images/livro.jpg"
                  width="50%"
                  height="50%"
                  class="
                    d-inline-block
                    align-text-top
                    border
                    shadow
                    p-3
                    mb-5
                    bg-white
                    rounded
                  "
                />
              </a>
            </div>
            <div class="col d-flex align-items-center">
              <div class="container2">
                <div class="about">
                  <p class="text-justify fs-4">
                    O livro Pro Node.js para Desenvolvedores oferece um guia
                    completo sobre o Node.js. O que ele é, por que interessa e
                    como configurá-lo, além de se aprofundar em seus principais
                    conceitos e APIs. É a referência completa para a
                    implementação e utilização do Node.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container3">
          <h1>Contate-me:</h1>
          <br />

          <div class="row">
            <div class="col">
              <a
                class="btn btn-primary btn-lg btn-floating"
                style="background-color: #25d366"
                href="https://wa.me/5547991952941?text=Opa%2C+quero+falar+contigo+eu+vi+o+seu+blog."
                role="button"
                ><i class="bi bi-whatsapp"></i
              ></a>
              Whatsapp
            </div>
            <div class="col">
              <a
                class="btn btn-primary btn-lg btn-floating"
                style="background-color: #ac2bac"
                href="https://www.instagram.com/alexandresalvad0r_/?hl=pt-br"
                role="button"
                ><i class="bi bi-instagram"></i>
              </a>
              Instagram
            </div>
            <div class="w-100"></div>
            <div class="col">
              <a
                class="btn btn-primary btn-lg btn-floating"
                style="background-color: #0082ca"
                href="https://www.linkedin.com/in/alexandre-salvador2001/"
                role="button"
                ><i class="bi bi-linkedin"></i
              ></a>
              LinkedIn
            </div>
            <div class="col">
              <a
                class="btn btn-primary btn-lg btn-floating"
                style="background-color: #333333"
                href="https://github.com/alexandresalvador"
                role="button"
                ><i class="bi bi-github"></i
              ></a>
              GitHub
            </div>
          </div>
        </div>

        <!-- <div class="item">
        <h6> Nossas redes sociais</h6>
        <ul>
          <li>
            <a href="#">
              <i class="bi bi-instagram"></i>
              <span> Instagram</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-instagram"></i>
              <span> Instagram</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-instagram"></i>
              <span> Instagram</span>
            </a>
          </li>
        </ul>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.container3 {
  padding: 40px;
}
#imagem-wrapper {
  height: 25vh;
  overflow: hidden;
  position: relative; /* Para fazer que a imagem com position-absolute respeite a sua posição consoante este selector, ou evitar que saia do mesmo */
}
#imagem {
  width: 600px;
  /* código abaixo centra a imagem ao centro */
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>