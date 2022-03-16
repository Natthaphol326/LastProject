<template>
  <div id="app">
    <nav class="navbar" :class="{ onScroll: !view.topOfPage }">
      <div class="inner-width">
        <a href="/home" class="logo"></a>
        <button class="menu-toggler">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="navbar-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Education</a>
          <a href="#">Works</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>

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
          <div class="buttons">
            <a href="/about">Contact me</a>
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Home -->
    <section id="home" name="about">
      <div class="inner-width">
        <div class="section-title">
          <h1>About Me</h1>
          <div>
            <PicTure />
          </div>
        </div>
      </div>
    </section>
    <MenuBar />
  </div>
</template>

<script>
import MenuBar from "@/components/MunuBar.vue";
import PicTure from "@/components/PicTure.vue";
export default {
  data() {
    return {
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
  },
  components: {
    MenuBar,
    PicTure,
  },
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

* {
  font-size: 1rem;
}
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Ubuntu", sans-serif;
  box-sizing: border-box;
}

.navbar {
  position: fixed;
  background-color: transparent;
  width: 100%;
  padding: 30px 0;
  top: 0;
  z-index: 999;
  transition: 0.3s linear;
  &.onScroll {
    background-color: #fff;
    ul li {
      color: #10b761;
    }
  }
}

.inner-width {
  max-width: 1300px;
  margin: auto;
  padding: 0 40px;
}

.navbar .inner-width {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 44px;
  height: 32px;
  background-image: url("../src/assets/white-logo.png");
  background-size: contain;
}

.menu-toggler {
  background: none;
  width: 30px;
  border: none;
  cursor: pointer;
  position: relative;
  outline: none;
  z-index: 999;
  display: none;
}

.menu-toggler span {
  display: block;
  height: 3px;
  background-color: #fff;
  margin: 6px 0;
  position: relative;
  transition: 0.3s linear;
}

.navbar-menu a {
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  margin-left: 30px;
  transition: 0.2s linear;
}

.navbar-menu a:hover {
  color: #48dbfb !important;
}

.sticky {
  background-color: #fff;
  padding: 18px 0;
}
.sticky .navbar-menu a {
  color: #111;
}

.sticky .menu-toggler span {
  background-color: #111;
}

.sticky .logo {
  background-image: url("../src/assets/black-logo.png");
}

#home {
  height: 100vh;
  min-height: 500px;
  background: url("../src/assets/bg.jpg") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
}

#home .inner-width {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

#home .content {
  width: 100%;
  color: #fff;
}

#home .content h1 {
  font-size: 60px;
  margin-bottom: 60px;
}

#home .inner-width h1 {
  width: 100%;
  color: #fff;
  font-size: 60px;
  margin-bottom: 60px;
}

#home .content h1::after {
  content: "Welcome To";
  animation: textanim 10s linear infinite;
}

@keyframes textanim {
  25% {
    content: "Pet Shop";
  }
  50% {
    content: "We have food";
  }
  75% {
    content: "And many more";
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

@media screen and (max-width: 980px) {
  .menu-toggler {
    display: block;
  }

  .navbar-menu {
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: #353b48;
    top: 0;
    right: -100%;
    max-width: 400px;
    padding: 80px 50px;
    transition: 0.3s linear;
  }

  .navbar-menu a {
    display: block;
    font-size: 30px;
    margin: 30px 0;
  }

  .sticky .navbar-menu {
    background-color: #f1f1f1;
  }

  .navbar-menu.active {
    right: 0;
  }

  .menu-toggler.active span:nth-child(1) {
    transform: rotate(-45deg);
    top: 4px;
  }

  .menu-toggler.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggler.active span:nth-child(3) {
    transform: rotate(45deg);
    bottom: 14px;
  }
}
</style>
