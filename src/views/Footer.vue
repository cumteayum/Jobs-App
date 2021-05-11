<template>
  <footer class="footer-main">
      <slot :text="text" :date="date" :company="company">Fallback Footer Text</slot>
  </footer>
</template>

<script>
export default {
    data(){
        return{
            text: "Copyright ",
            date: new Date().getFullYear(),
            company: 'fireship'
        }
    }
}
</script>

<style>

</style>