<template>
  <div v-for="tag in tags" :key="tag">
      <slot :tag="tag.name" :type="tag.type">
          Fallback tags
      </slot>
  </div>
</template>

<script>
export default {
    data(){
        return{
            tags: [{
                name:"Vue",
                type:"green"
            },{
                name:"Angular",
                type:"red"
            },{
                name:"Svelte",
                type:"orange"
            },
            {
                name:"React",
                type:"blue"
            }]
        }
    }
}
</script>

<style scoped>
    
</style>