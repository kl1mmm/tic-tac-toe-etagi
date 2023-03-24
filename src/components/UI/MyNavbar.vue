<template>
  <header class="navbar">
    <div class="h-left">
      <a href="#" class="link">
        <svg class="logo" width="72" height="16" viewBox="0 0 72 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M21.5 8C21.5 5.23858 23.7386 3 26.5 3C29.2614 3 31.5 5.23858 31.5 8C31.5 10.7614 29.2614 13 26.5 13C23.7386 13 21.5 10.7614 21.5 8ZM26.5 0C22.0817 0 18.5 3.58172 18.5 8C18.5 12.4183 22.0817 16 26.5 16C30.9183 16 34.5 12.4183 34.5 8C34.5 3.58172 30.9183 0 26.5 0ZM13.0424 0.519089C13.7196 -0.158094 14.8149 -0.158094 15.4921 0.519089C16.1581 1.18507 16.1581 2.29161 15.4921 2.95759L10.8848 7.56486C10.6445 7.80518 10.6445 8.19482 10.8848 8.43514L15.4921 13.0424C16.1693 13.7196 16.1693 14.8149 15.4921 15.4921C14.8149 16.1693 13.7196 16.1693 13.0424 15.4921L8.43514 10.8848C8.19482 10.6445 7.80518 10.6445 7.56486 10.8848L2.95759 15.4921C2.28041 16.1693 1.18507 16.1693 0.507887 15.4921C-0.169296 14.8149 -0.169296 13.7196 0.507887 13.0424L5.11516 8.43514C5.35548 8.19482 5.35548 7.80518 5.11516 7.56486L0.507887 2.95759C-0.169296 2.28041 -0.169296 1.18507 0.507887 0.507887C1.18507 -0.169296 2.28041 -0.169296 2.95759 0.507887L7.56575 5.11605C7.8059 5.35619 8.1952 5.35639 8.43559 5.11649L13.0424 0.519089ZM52.4921 0.519089C51.8149 -0.158094 50.7196 -0.158094 50.0424 0.519089L45.4356 5.11649C45.1952 5.35639 44.8059 5.35619 44.5658 5.11605L39.9576 0.507887C39.2804 -0.169296 38.1851 -0.169296 37.5079 0.507887C36.8307 1.18507 36.8307 2.28041 37.5079 2.95759L42.1152 7.56486C42.3555 7.80518 42.3555 8.19482 42.1152 8.43514L37.5079 13.0424C36.8307 13.7196 36.8307 14.8149 37.5079 15.4921C38.1851 16.1693 39.2804 16.1693 39.9576 15.4921L44.5649 10.8848C44.8052 10.6445 45.1948 10.6445 45.4351 10.8848L50.0424 15.4921C50.7196 16.1693 51.8149 16.1693 52.4921 15.4921C53.1693 14.8149 53.1693 13.7196 52.4921 13.0424L47.8848 8.43514C47.6445 8.19482 47.6445 7.80518 47.8848 7.56486L52.4921 2.95759C53.1581 2.29161 53.1581 1.18507 52.4921 0.519089ZM58.5 8C58.5 5.23858 60.7386 3 63.5 3C66.2614 3 68.5 5.23858 68.5 8C68.5 10.7614 66.2614 13 63.5 13C60.7386 13 58.5 10.7614 58.5 8ZM63.5 0C59.0817 0 55.5 3.58172 55.5 8C55.5 12.4183 59.0817 16 63.5 16C67.9183 16 71.5 12.4183 71.5 8C71.5 3.58172 67.9183 0 63.5 0Z"
                fill="url(#paint0_radial_4_57)"/>
          <defs>
            <radialGradient id="paint0_radial_4_57" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(35.75 8) rotate(90) scale(8 35.75)">
              <stop stop-color="#EB0057"/>
              <stop offset="1" stop-color="#E38BAC"/>
            </radialGradient>
          </defs>
        </svg>
      </a>
    </div>
    <div class="h-center">
      <a @click="$router.push('/game/')" href="#" class="link">Игровое поле</a>
      <a @click="$router.push('/rating/')" href="#" class="link">Рейтинг</a>
      <a @click="$router.push('/sessions/')" href="#" class="link">Активные игроки</a>
      <a @click="$router.push('/history/')" href="#" class="link">История игр</a>
      <a @click="$router.push('/players-list/')" href="#" class="link">Список игроков</a>
    </div>
    <div class="h-right">
      <MyIconButton @click="$router.push('/')" class="ExitBtn"></MyIconButton>
    </div>
  </header>
  <nav>
    <div class="navbarPhone">
      <div class="container nav-container">
        <input class="checkbox" type="checkbox" name="" id=""/>
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="logo">
          <img src="@/components/UI/pics/logo.svg" alt="XOXO" style="width: 72px; height: 16px;">
        </div>
        <div class="menu-items">
          <li><a @click="$router.push('/game/')" href="#">Игровое поле</a></li>
          <li><a @click="$router.push('/rating/')" href="#">Рейтинг</a></li>
          <li><a @click="$router.push('/sessions/')" href="#">Активные игроки</a></li>
          <li><a @click="$router.push('/history/')" href="#">История игр</a></li>
          <li><a @click="$router.push('/players-list/')" href="#">Список игроков</a></li>
          <li><a class="item-leave" @click="$router.push('/')" href="#">Выйти
            <MyIconButton class="phoneExitBtn"></MyIconButton>
          </a>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MyIconButton from "@/components/UI/MyIconButton";

export default {
  name: "MyNavbar",
  components: {MyIconButton}
}
</script>

<style scoped>
.navbarPhone {
  display: none;
}

.navbar {
  display: flex;
  justify-content: space-between;
  height: 4em;
  box-shadow: 0 0.125em 0.375em rgba(44, 57, 121, 0.1);
  border-radius: 0 0 1em 1em;
  font-weight: 500;
  font-size: 1em;
  line-height: 4.05em;
  background: #FFFFFF;
}

.link {
  text-decoration: none;
  color: #373745;
}

.h-left {
  padding-left: 3em;
}

.h-right {
  padding-right: 3em;
}

.h-center a {
  margin-left: 2.5em;
}

@media screen and (max-width: 905px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .navbar {
    display: none;
  }

  .container {
    max-width: 905px;
    width: 100%;
    margin: auto;
  }

  .navbarPhone {
    display: block;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 2px 6px rgba(44, 57, 121, 0.1);
    border-radius: 0 0 16px 16px;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  .navbarPhone .menu-items {
    display: flex;
  }

  .navbarPhone .nav-container li {
    list-style: none;
  }

  .navbarPhone .nav-container a {
    text-decoration: none;
    color: #0e2431;
    font-weight: 700;
    font-size: 0.9em;
    font-style: normal;
    padding: 0.7rem;
  }

  .menu-items .item-leave {
    display: flex;
    align-content: center;
  }

  .phoneExitBtn {
    margin-left: 5%;
  }

  .navbarPhone.nav-container a:hover {
    font-weight: bolder;
  }

  .nav-container {
    display: block;
    position: relative;
    height: 50px;
  }

  .nav-container .checkbox {
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    top: 15px;
    right: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .nav-container .hamburger-lines {
    height: 26px;
    width: 32px;
    position: absolute;
    top: 12px;
    right: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .nav-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #0e2431;
  }

  .nav-container .hamburger-lines .line1 {
    transform-origin: 0 0;
    transition: transform 0.4s ease-in-out;
  }

  .nav-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .nav-container .hamburger-lines .line3 {
    transform-origin: 0 100%;
    transition: transform 0.4s ease-in-out;
  }

  .navbarPhone .menu-items {
    padding-top: 60px;
    width: 100%;
    transform: translateY(-150%);
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    transition: transform 0.5s ease-in-out;
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
    background: #FFFFFF;
    box-shadow: 0 2px 6px rgba(44, 57, 121, 0.1);
    border-radius: 0 0 16px 16px;
  }

  .navbarPhone .menu-items li {
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .logo {
    position: absolute;
    top: 28%;
    left: 1.2em;
    font-size: 1.2rem;
    color: #0e2431;
  }

  .nav-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }

  .nav-container input[type="checkbox"]:checked ~ .logo {
    transition: opacity 1s;
    opacity: 0;
  }
}

</style>