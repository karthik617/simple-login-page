<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-header" style="font-size:25px">Sign up</div>
      <div class="card-body">
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >First Name:</span
          >
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-model="fname"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >Last Name:</span
          >
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-model="lname"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >Email:</span
          >
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-model="email"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >Password:</span
          >
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-model="password"
          />
        </div>
        <!-- <div>
        <label>Confirm Password:</label>
        <input type="password" />
        </div> -->
        <div>
          <!-- <button @click="movetosignin"> Sign In</button> -->
          <button type="button" class="btn btn-primary" style="margin:25px">
            <router-link to="/sign-in" style="color:white">Sign In</router-link>
          </button>
          <button @click="SignUpData" type="button" class="btn btn-primary" style="margin:25px">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["adduserData"],
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    SignUpData() {
      this.adduserData(this.fname, this.lname, this.email, this.password);
      (this.fname = ""),
        (this.lname = ""),
        (this.email = ""),
        (this.password = "");
      this.$router.push({ name: "sign-in" });
    },
    //     movetosignin(){
    //      this.currentComponent('sign-in')

    // }
  },
};
</script>
