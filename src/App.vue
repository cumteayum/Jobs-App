<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link> |
    <router-link :to="{ name: 'Register' }">Register</router-link>|

    <!-- <Auth #default="slotProps">
      <h4 ref="btn" @click="handleLogin">{{ slotProps.authType[0] }}</h4>
    </Auth> -->
    <Auth v-if="!user" #default="slotProps">
      <h4 ref="btn" @click="handleSignUp">{{ slotProps.authType[1] }}</h4>
    </Auth>

    <Auth v-if="user" #default="slotProps">
      <h4 ref="btn" @click="handleSignOut">{{ slotProps.authType[3] }}</h4>
    </Auth>

    <h2 v-if="user">Signed in as {{ user.displayName }}</h2>
  </div>
  <router-view />
</template>

<script>
import Auth from "./views/Auth.vue";
import { db } from "./firebase/firebase";

export default {
  components: { Auth },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    handleSignUp() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          this.user = user;
        });
    },
    handleSignOut() {
      firebase
        .auth()
        .signOut()
        .then(() => this.user=null);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

body {
  font-family: "Space Mono", monospace;
  background-color: #303952;
}
#app {
  text-align: center;
  color: #feca57;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #feca57;
  transition: all 0.3s linear;
  text-decoration: none;
}

a:hover {
  color: #ff9f43;
}

#nav a.router-link-exact-active {
  color: #ff6b6b;
}
/* Utility Classes */
.normal {
  color: #feca57;
}
.red {
  color: #ff4d4d;
}
.green {
  color: #32ff7e;
}
.crimson {
  color: #ff3838;
}
.blue {
  color: #18dcff;
}
.vanilla {
  color: #fff200;
}
h4 {
  cursor: pointer;
}
h4:hover {
  color: #fff200;
}
</style>
