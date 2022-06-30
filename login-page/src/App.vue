<template>
  <router-view></router-view>
  <!-- <component :is="currentcomponent"></component> -->
</template>

<script>
// import SignIn from "./components/SignIn.vue";
// import SignUp from "./components/SignUp.vue";
// import ProfilePage from "./components/ProfilePage.vue";

export default {
  // components: {
  //   SignIn,
  //   SignUp,
  //   ProfilePage,
  // },
  data() {
    return {
      // currentcomponent: "sign-in",
      userData: [
        {
          id: "1",
          firstName: "karthik",
          lastName: "yadav",
          email: "karthik123@gmail.com",
          password: "karthik123",
        },
      ],
    };
  },
  provide() {
    return {
      userData: this.userData,
      adduserData: this.adduserData,
      // currentComponent: this.currentComponent,
    };
  },
  methods: {
    // currentComponent(val) {
    //   this.currentcomponent = val;
    // },
    adduserData(fname, lname, email, password) {
      this.userData.push({
        id: new Date().toISOString(),
        firstName: fname,
        LastName: lname,
        email: email,
        password: password,
      });
      console.log(this.userData);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
