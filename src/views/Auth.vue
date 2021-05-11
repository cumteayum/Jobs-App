<template>
  <div class="auth">
      <slot :authType="authType"></slot>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name: 'Login',
            authType: ['Login', 'Sign Up', 'Logout', 'Sign Out']
        }
    }
}
</script>

<style>

</style>