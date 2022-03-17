<template>
  <div id="app">
    <!-- Home -->
    <section id="home">
      <div class="inner-width">
        <div class="content">
          <h1></h1>
          <div class="sm">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin-in"></a>
            <a href="#" class="fab fa-youtube"></a>
          </div>
          <v-btn to="/product" text class="buttons">
            <span class="mr-2">Product</span>
          </v-btn>
          <div class="buttons">
            <a href="/product">See more</a>
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
    </section>

    <section id="home" name="about">
      <div class="inner-width">
        <div class="section-title">
          <h1 style="color: White">About Me</h1>
          <div>
            <PicTure />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// #home {
//   height: 100vh;
//   min-height: 500px;
//   background: url(../src/assets/bg.jpg) no-repeat center;
//   background-size: cover;
//   background-attachment: fixed;
// }

#home .inner-width {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

#home .content {
  padding: 100px;
  width: 100%;
  color: #fff;
}

#home .content h1 {
  font-size: 60px;
  margin-bottom: 60px;
}

#home .content h1::after {
  content: "Darkcode";
  animation: textanim 10s linear infinite;
}

@keyframes textanim {
  25% {
    content: "A Developer";
  }
  50% {
    content: "A Designer";
  }
  75% {
    content: "A Youtuber";
  }
}

.sm a {
  color: #fff;
  font-size: 22px;
  margin: 0 10px;
  transition: 0.2s linear;
}

.sm a:hover {
  color: #48dbfb;
}

#home .buttons {
  margin-top: 60px;
}

#home .buttons a {
  display: inline-block;
  margin: 15px 30px;
  color: #48dbfb;
  font-size: 15px;
  font-weight: 500;
  width: 180px;
  border: 1px solid #48dbfb;
  padding: 14px 0;
  border-radius: 6px;
  transition: 0.2s linear;
}

#home .buttons a:hover,
#home .buttons a:nth-child(2) {
  background-color: #48dbfb;
  color: #fff;
}
</style>
