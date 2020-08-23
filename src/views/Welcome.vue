<template>
  <div class="page-width">
    <h1 v-if="displayUsers">
      Hello, {{displayUsers.firstName}} welcome to your page {{displayUsers.businesses[0]['name']}}.
    </h1>
    <h1 v-else>Loading...</h1>
   <RouterLink to="/user-info" class="link-button">
            <span class="btn-text">More Info</span>
            &rarr;
          </RouterLink>
  </div>
</template>

<script>

  export default {
      name: 'welcome',
    data () {
      return {
        userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : ''
      }
    },
    computed: {
      displayUsers(){      
       return this.userInfo; 
      }
  },
    methods: {
      
    },
  }
</script>

<style>


  .error {
    color: red;
  }
</style>