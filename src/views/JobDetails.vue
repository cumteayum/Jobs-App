<template>
  <h2 :class="theme">This is JobDetails page</h2>
  <img ref="image" :src="src" alt="Image Here" />

  <!-- Named Slots demonstration  -->
  <Content>
    <template v-slot:heading> Sample heading </template>

    <template v-slot:content>
      quaerat, consequaturl Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Animi, necessitatibus. pariatur officiis similique mollitia deleniti
      ex deserunt fugiat quas, vel nam non delectus dolore. Earum, cum similique
      soluta deserunt optio eum enim doloribus saepe? Placeat temporibus omnis
      velit. Quas.
    </template>

    <template v-slot:button> Read More </template>
  </Content>
  <br /><br />

  <h2>Tags:</h2>
  <Tags #default="slotProps">
    <h3 class="tag" :class="slotProps.type">{{ slotProps.tag }}</h3>
  </Tags>

  <!-- Dynamic Component Here -->
 <!-- <component :is="currentComponent"></component> -->
 <!-- <button @click="currentComponent='Tags'">Change Component</button> -->

 <Footer #default="slotProps">
    <!-- <h4> Copyright fireship </h4> -->
    <h4>{{ slotProps.text }} Ishan Nagar {{ slotProps.date }} | {{ slotProps.company }}</h4>
 </Footer>
</template>


<script>
import Content from "./Content.vue";
import Tags from "./Tags.vue";
import Button from "./Button.vue";
import Footer from "./Footer.vue";

export default {
  props: ["id", "theme", "img"],
  components: { Content, Tags, Button, Footer },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/photos/2")
      .then((res) => res.json())
      .then((data) => {
        this.$refs.image.src = data.url;
      });
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.red {
  background-color: #ff3f34;
}
.green {
  background: #0be881;
}
.blue {
  background: #4bcffa;
}
.orange {
  background: #ff9f1a;
}

body {
  /* background-color: #3d3d3d; */
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  height: 300px;
  width: 300px;
  align-items: center;
  justify-content: center;
}
h3 {
  height: 2rem;
  width: 8rem;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin: 1rem 11rem;
  /* background: #000; */
  border-radius: 4px;
}
</style>