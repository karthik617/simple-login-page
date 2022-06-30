<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-header" style="font-size:25px">Sign In</div>
      <div class="card-body">
        <div class="input-group mb-3" :class="invalid ? 'invalid' : 'valid'">
          <label
            ><span class="input-group-text" id="inputGroup-sizing-default"
              >Email</span
            ></label
          >
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-model="email"
          />
        </div>
        <div class="input-group mb-3" :class="invalid ? 'invalid' : 'valid'">
          <label
            ><span class="input-group-text" id="inputGroup-sizing-default"
              >Password</span
            ></label
          >
          <input
            type="password"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-model="password"
          />
        </div>
        <div v-if="invalid">
          <form class="form-floating">
            <input
              type="email"
              class="form-control is-invalid"
              id="floatingInputInvalid"
            />
            <label for="floatingInputInvalid" style="font-size:25px">Invalid input</label>
          </form>
        </div>
        <button
          @click="SignInSucess"
          type="button"
          class="btn btn-primary"
          style="margin: 25px"
        >
          Sign In
        </button>
        <!-- <button @click="movetosignup">SignUp</button> -->
        <button type="button" class="btn btn-primary" style="margin: 25px">
          <router-link to="/sign-up" style="color: white">Sign up</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["userData"],
  data() {
    return {
      email: "",
      password: "",
      invalid: false,
    };
  },
  methods: {
    SignInSucess() {
      const emailid = this.email;
      const password = this.password;
      const userData = this.userData;
      userData.forEach((user) => {
        //console.log(user.email)
        if (emailid !== "") {
          if (emailid === user.email) {
            console.log(emailid);
            if (password !== "") {
              if (password === user.password) {
                console.log(password);
                console.log("login");
                console.log(user);
                console.log(typeof user);
                this.$router.push({ name: "profile", params: user });
                // this.currentComponent("profile-page");
              } else {
                this.invalid = true;
                this.$router.push({ name: "sign-in" });
                console.log("invalid password");
              }
            } else {
              this.invalid = true;
              this.$router.push({ name: "sign-in" });
              console.log("password cannot be empty");
            }
          } else {
            this.$router.push({ name: "sign-in" });
            console.log("invalid email");
          }
        } else {
          this.invalid = true;
          this.$router.push({ name: "sign-in" });
          console.log("emailid cannot be empty");
        }
      });
      this.email = "";
      this.password = "";
    },
    // movetosignup() {
    //   this.currentComponent("sign-up");
    // },
  },
};
</script>

<style scoped>
div.invalid label {
  color: red;
}
div.invalid input {
  border-color: red;
}
</style>
