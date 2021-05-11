<template>
  <div class="blog">
      <h3>
        <slot name="heading">Fallback Heading</slot>
    </h3>
    <br>
        <slot name="content">Fallback Content</slot>
    <br>
    <br>
      <slot class="button" name="button">Button</slot>
  </div>

</template>

<script>
export default {
    data(){
        return{
        }
    }
}
</script>

<style>

</style>