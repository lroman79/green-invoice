<template>
  <div>
    <nav class="navbar">
      <img id="logo-he" src="@/assets/images/green_logo.png" />
      </nav>
    <section class="signin">
    <div class="login-bg-img"></div>
    <form @submit.prevent="login" class="login-form">
      <div class="container">
    <h1 data-v-74c52926="">היי, טוב לראות אותך</h1>
      <label><input v-model="email" placeholder="מייל" class="mdc-text-field__input"></label>
      <div id="email-helper-text" class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent">כתובת המייל איתה נרשמת לחשבונית ירוקה</div>
      <br>
      <label><input v-model="password" placeholder="סיסמה" type="password" class="mdc-text-field__input"></label>
      <div id="password-helper-text" class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent"><a href="/password">שכחת סיסמה?</a></div>
      <br><br>
      <div class="buttons-container">
       <button type="submit" class="gi-button gi-button--green">כניסה</button>
       <button type="button" class="gi-button gi-button--blue"><span class="gi-button__text">כניסה עם גוגל</span><img src="https://cdn.greeninvoice.co.il/auth-app/assets/1.0.120/img/e7eb826.svg"></button>
      </div>
     <div class="action-links">עוד לא הצטרפת?<a href="/signup" class="signup-link"> ל-30 יום נסיון חינם</a></div>
      </div>
    </form>
    </section>
  </div>
</template>

<script>
 
  export default {
      name: 'login',
    data () {
      return {
        email: 'lukroman79@gmail.com',
        password: 'lroman79',
        error: false
      }
    },
    methods: {
      login: function () {
        let email = this.email;
        let password = this.password;
        this.$store.dispatch('auth/signUserIn', { email, password })
       .then(response => {
         console.log(response);
         this.$router.push('/')
         })
       .catch(err => console.log(err))
      }
    },
  }
  
</script>

<style>

.signin{
  display: flex;
  min-height: 100vh;
}
.signin .login-bg-img{
  width: 50%;
  background: #ffdcdc url('~@/assets/green_login_page.svg')100% no-repeat;
  background-size: 85%;
  background-position-x: 230px; 
  
}

.navbar {
    position: fixed;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 45px;
    z-index: 9999;
    transition: all .15s ease;
}

.navbar img#logo-he{
  width: 163px;
  position: absolute;
  right: 123px;
}

.signin form {
    direction: rtl;
    width: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 244px 25px;
}

.signin form .container{
    max-width: 420px;
    width: 100%;
}

.signin h1 {
    color: #23445a;
    line-height: 48px;
    font-size: 56px;
    margin-bottom: 70px;
    font-family: "Almoni Tzar DL 4.0 AAA";

}

.signin form .mdc-text-field__input {  
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: .009375em;
    text-decoration: inherit;
    text-transform: inherit;
    align-self: flex-end;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px 0 6px;
    transition: opacity .15s cubic-bezier(.4,0,.2,1);
    border: none;
    outline: none;
    border-bottom: 1px solid #23445a;;
    border-radius: 0;
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    
}

.signin form .buttons-container{
  display: flex;
  justify-content: space-between;
  margin: 21px 0 26px 0;
}

.signin form button.gi-button{
    height: 55px;
    line-height: 55px;
    padding: 0 40px;
    font-size: 1.1rem;
    border: inherit;
    padding-top: 0;
    padding-bottom: 0;
      
    display: flex;   
    justify-content: center;
    align-items: center;
    outline: none;
    font-weight: 700;
    border-radius: 100px;
    letter-spacing: .2px;
    transition: all .5s cubic-bezier(.075,.82,.165,1);
    cursor: pointer;  
}

.signin form button.gi-button:first-child {
    width: 55%;
}

.signin form button.gi-button--green {
    background: #18c746;
    border: 1px solid #18c746;
    color: #fff;
}

.signin form button span.gi-button__text {
    padding: 0 8px;
    white-space: nowrap;
}

.signin form button.gi-button:last-child {
    width: 40%;
}

.signin form button.gi-button--blue {
    background: transparent;
    border: 1px solid #0084f4;
    color: #0084f4;
}

.signin form button.gi-button img{
    height: 24px;
    width: 24px;
}
  .error {
    color: red;
  }

  .mdc-text-field-helper-text {
    color: #23445a;
    font-family: inherit;
    transition: all .3s ease;
    direction: inherit;
    width: 100%;
    letter-spacing: 0;
    font-size: 1rem;
}
.mdc-text-field-helper-text a{
  color: inherit;
}

.signin .action-links {
    text-align: right; 
    color: #0084f4;
    font-size: 20px;    
}

.signin .action-links .signup-link{
    color: #0084f4;
}

@media screen and (max-width: 1500px){
 .signin .login-bg-img {
    background-size: 90%;
    background-position-x: center;
 }
}

@media screen and (max-width: 768px){
  .navbar{
    position: unset;
    justify-content: center;
    padding: 0px;
  }
  .navbar img#logo-he{
    position: unset;
  }
  .signin h1{
    text-align: center;
  }
  .signin {
    display: block;
    }
  .signin form{
      width: 100%;
      padding: 60px 25px;
    }
  .signin .login-bg-img {
    display: none;
 }

 .signin form .buttons-container{
   flex-direction: column;
 }

 .signin form button.gi-button:first-child,
 .signin form button.gi-button:last-child
 {
   width: 100%;
   margin-bottom: 15px;
 }
}












</style>