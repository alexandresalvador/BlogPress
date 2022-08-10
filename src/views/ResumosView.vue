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
                    <b> Resumo #1 - Capitulo 2 - O Sistema de Módulos de Node </b> 
                  </p>
                  <button type="button" class="btn btn-link">
                  <a href="#" class=""  >
                    <router-link to="/sistemas-modulos-node"> Ver Mais </router-link>
                  </a>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <p class="text-danger">24/08/2022</p>
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
                    Resumo #2 - Capítulo 3 - O módulo Async
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <p class="text-danger">07/09/2022</p>
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
                    Resumo #3 - Capítulo 4 - Os Emissores de Eventos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <p class="text-danger">21/09/2022</p>
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
                  <p class="text-justify">Resumo #4 - Capítulo 11 - HTTP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <p class="text-danger">05/10/2022</p>
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
                    Resumo #5 - Capítulo 12 - A Estrtura Express
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container pt-3">
          <div class="row">
            <p class="text-danger">19/10/2022</p>
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