<template>
  <div class="btn">
      <slot :btn="button"></slot>
  </div>
</template>

<script>
export default {
    data(){
        return{
            button: "Button Default"
        }
    }
}
</script>

<style>

</style>