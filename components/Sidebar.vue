<template>
    <header>
        <h2>Contents</h2>
        <nav>
            <nuxt-link tag="a" to="/">Home</nuxt-link>
            <nuxt-link tag="a" to='/profile'>Profile</nuxt-link>
            <nuxt-link tag="a" to='/thanks'>Thanks</nuxt-link>
        </nav>
    </header>
</template>
<style scoped>
header{
    background-color: black;
    color: white;
    padding:30px;
    display: flex;
    flex-direction: column ;
}
nav{
    display: flex;
    flex-direction: column ;
}
nav a{
    color:white;
}
</style>
