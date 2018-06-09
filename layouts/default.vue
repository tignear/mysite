<template>
<div id="global-wrapper" @click="globalClick">
    <my-header/>
    <nuxt id="content"/>
    <my-footer/>
</div>
</template>
<script>
import MyHeader from '~/components/Header.vue'
import MyFooter from '~/components/Footer.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  },
  methods:{
    globalClick:function(e){
        this.$store.commit("closeSidebar")
    }
  }
}
</script>
<style scoped>
#global-wrapper{
    display: flex;
    flex-flow: column nowrap;
}

</style>
