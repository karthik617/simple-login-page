<template>
    <div class="card-header" style="font-size:50px">Profile Page</div>
    <!-- <button @click="movetosignin">Logout</button> -->
    <button type="button" class="btn btn-primary" style="margin:25px">
            <router-link to="/sign-in" style="color:white">Log Out</router-link>
          </button>
    <h2>Hi! {{fname}} {{lname}}</h2>
</template>
<script>

export default({
    data(){
        return{
            fname:'',
            lname:'',
            // email:''
        }
    },
    mounted(){
        const p= this.$route.params;
        this.fname = p.firstName
        this.lname = p.lastName
    }
})
</script>


