<template>
  <div id="app">
    <main>

   <router-view>

    </router-view>
   </main>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="css">
  @import "~@/styles/main.css";
  @import url('//db.onlinewebfonts.com/c/11e560ecca30e9c378a2c9cc7e52c938?family=Almoni+Tzar+DL+4.0+AAA');
  @font-face {font-family: "Almoni Tzar DL 4.0 AAA"; src: url("//db.onlinewebfonts.com/t/11e560ecca30e9c378a2c9cc7e52c938.eot"); src: url("//db.onlinewebfonts.com/t/11e560ecca30e9c378a2c9cc7e52c938.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/11e560ecca30e9c378a2c9cc7e52c938.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/11e560ecca30e9c378a2c9cc7e52c938.woff") format("woff"), url("//db.onlinewebfonts.com/t/11e560ecca30e9c378a2c9cc7e52c938.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/11e560ecca30e9c378a2c9cc7e52c938.svg#Almoni Tzar DL 4.0 AAA") format("svg"); }
#app {
    font-family: almoni-neue-dl;
}

.page-width{
  margin: 0 auto;
  max-width: 900px;
  text-align: center;
  padding: 100px 0;
}
</style>
