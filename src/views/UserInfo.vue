<template>
  <div class="page-width">
    <h1>User Info</h1> 
   <div>
     <ul v-if="displayUsers">
      <li><b>Registered Business ID</b> - {{displayUsers.businesses[0]['id']}}</li>
      <li><b>First Name</b> - {{displayUsers.firstName}}</li>
      <li><b>Last Name</b> - {{displayUsers.lastName}}</li>
      <li><b>ID Number</b> - {{displayUsers.idNumber}}</li>
      <li><b>Address</b> - {{displayUsers.businesses[0]['address']}}</li>
      <li><b>City</b> - {{displayUsers.businesses[0]['city']}}</li>
    </ul> 
    <ul v-else>No data for display</ul>
   </div>
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
        let parseObj = this.userInfo;  
          
        if(parseObj){
         parseObj = Object.keys(parseObj).reduce(function(obj, key) {
          if ( key !== "settings" ) {
            obj[key] = parseObj[key];
          }
          return obj;
         }, {});
        }
       //const { businesses, settings , ...newObject } = filteredObj;
       return parseObj;  
      }
      
  },
    methods: {
      
    }
  }

</script>

<style scoped>
ul{
    list-style: none;
    text-align: left;
    border: solid 1px green;
    margin: 0px;
    padding: 10px;
}
</style>