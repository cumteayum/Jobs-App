<template>
  <h2>Jobs Available:</h2>
  <div v-if="!jobs.length">
    <h2>Loading Jobs...</h2>
  </div>
  <div v-for="(job, index) in jobs" :key="job">
    <router-link :to="{ name: 'JobDetails', params: { id: job.name, theme: job.theme } }">
      <h2 class="job-h2" :class="job.theme">{{ job.name }}</h2>
    </router-link>
    <h2 ref="cross" @click="deleteJob(index)">&nbsp; X</h2>
  </div>
</template>

<script>
import getData from '../composables/getData';

export default {
  setup() {
    const {jobs, cross, getDBData, deleteJob} = getData();
    getDBData();

    return {
      jobs,
      deleteJob,
    };
  },
};
</script>

<style scoped>
h2,
h3 {
  display: inline;
  cursor: pointer;
}
.job-h2:hover {
  color: #fc427b;
  cursor: pointer;
}
</style>
