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
                src="../assets/images/css.png"
                class="d-block w-100"
                id="imagem"
                alt="..."
              />
            </a>
          </div>
        </div>
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
          <h1>Minhas Redes Sociais:</h1>
          <br />
          <div class="">
            <div class="container">
              <a
                class="btn btn-primary btn-lg btn-floating"
                style="background-color: #ac2bac"
                href="#!"
                role="button"
                ><i class="bi bi-instagram"></i>
              </a>
              - Alexandre Salvador
            </div>
            <hr />

            <div class="container">
              <a
                class="btn btn-primary btn-lg btn-floating"
                style="background-color: #0082ca"
                href="#!"
                role="button"
                ><i class="bi bi-linkedin"></i
              ></a>
              - Alexandre Salvador
            </div>
            <hr />
            <div class="container">
              <a
                class="btn btn-primary btn-lg btn-floating"
                style="background-color: #333333"
                href="#!"
                role="button"
                ><i class="bi bi-github"></i
              ></a>
              - alexandresalvador
            </div>
            <hr />
            <div class="container">
              <a
                class="btn btn-primary btn-lg btn-floating"
                style="background-color: #25d366"
                href="#!"
                role="button"
                ><i class="bi bi-whatsapp"></i
              ></a>
              -  (47) 99195-2941
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
  top: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>