<template>
  <form @submit.prevent>
    <div v-if="showModal">
      <Modal>
        <h3>{{ modal }}</h3>
      </Modal>
    </div>
    <input v-model="name" type="text" name="name" placeholder="Name" />
    <input v-model="job" type="text" name="job" placeholder="Job Offered" />
    <input v-model="theme" type="text" name="theme" placeholder="theme" />
    <button @click="submitForm" type="submit">Register</button>
  </form>
</template>

<script>
// This component is intentionally made for demonstratig the use of Composition API
import { ref, reactive, computed } from "vue";
import axios from "axios";
import { db } from "../firebase/firebase.js";
import Modal from "./Modal.vue";

export default {
  setup() {
    const name = ref(null);
    const job = ref(null);
    const theme = ref(null);
    const showModal = ref("");

    const modal = computed(() => {
      return `${name.value}, Your request have been submitted. visit ${job.value}.js.org for more info !`;
    });

    function submitForm() {
      db.collection("jobs")
        .add({
          name: name.value,
          job: job.value,
          theme: theme.value,
        })
        .then((res) => {
          console.log(res.id);
          showModal.value = true;
        });
    }
    return { name, job, theme, showModal, submitForm, modal };
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem;
  justify-content: space-between;
}
form input {
  margin: 0.7rem;
}

input::placeholder {
  color: #ffdd59;
}

input[type="text"],
textarea {
  background-color: transparent;
  border: 2px solid #ffdd59;
  padding: 0.6rem;
  transition: 0.3s;
  border-radius: 5px;
  color: #ffdd59;
}
input[type="text"]:focus {
  outline: none;
  border: 2px solid#ff4d4d;
  cursor: pointer;
}
button {
  background: #fff200;
  border: none;
  text-decoration: none;
  display: block;
  margin: auto;
  border-radius: 5px;
  color: #000;
  font-weight: 400;
  font-family: "Space Mono", monospace;
  padding: 0.5rem 0.5rem;
  width: 30%;
  transition: 0.4s;
}
button:hover {
  width: 70%;
}
@media all and (min-width: 900px) {
  input[type="text"],
  textarea {
    background-color: transparent;
    border: 2px solid #ffdd59;
    padding: 0.6rem;
    transition: 0.3s;
    width:60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #ffdd59;
  }
}
</style>
