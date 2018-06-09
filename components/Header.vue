<template>
<header>
    <h1><nuxt-link tag="a" to="/">Tignear's House</nuxt-link></h1>
    <div id="bgFilter" v-bind:class="{open:this.$store.state.isOpenSidebar}"></div>
    <div>
        <button id="toggleSidebar" @click.stop="sidebar"><i class="fas fa-bars"/></button>
        <my-sidebar id="sidebar" v-bind:class="{open:this.$store.state.isOpenSidebar}"/>
    </div>
</header>
</template>
<script>
import MySidebar from '~/components/Sidebar.vue'
import {MUTATION} from '~/store/index.js'
export default {
    components:{
        MySidebar
    },
    methods:{
        sidebar:function(e){
            if(this.$store.state.isOpenSidebar){
                this.$store.commit(MUTATION.closeSidebar)
            }else{
                this.$store.commit(MUTATION.openSidebar)
            }
        }
    }
}
</script>
<style scoped>
header{
    margin: 0px;
}
a{
    color: white;
    text-decoration: none;
}
a:hover{
    opacity: 0.7;
}
header{
    display: flex;
    background-color: black;
}
header h1{
    padding: 10px;
    margin: 0px;
}
#toggleSidebar{
    position: fixed;
    z-index: 1001;
    top:12px;
    right:32px;
    font-size: 32px;
}
#sidebar{
    height: 100%;
    transition: all 0.2s;
    transform: translate(100%);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    padding-top: 64px;
}
#sidebar.open{
    transform: translate(0);
    opacity: 1;
}
#bgFilter{
    position:fixed;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    background-color: white;
    opacity: 0;
    z-index: 1000;
    visibility:hidden;
}
#bgFilter.open{
    opacity: 0.90;
    transition: all 0.2s;
    visibility:visible;
}
</style>

