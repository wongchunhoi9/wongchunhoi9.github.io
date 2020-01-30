<template>
<div class="header-container">
    <header class="the-header">
        <b-navbar toggleable="md" type="light" variant="light" fixed="top" >
            <b-navbar-brand to="/" class="nav-brand"> wongchunhoi9</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-text>    ----   </b-nav-text>
                <b-nav-item class="nav-item"><nuxt-link to="/work">work</nuxt-link></b-nav-item>
                <b-nav-item class="nav-item"><nuxt-link to="/sound">sound</nuxt-link></b-nav-item>
                <b-nav-item class="nav-item" disabled=""><nuxt-link to="/blog">blog</nuxt-link></b-nav-item>
                <b-nav-item class="nav-item"><nuxt-link to="/about">about</nuxt-link></b-nav-item>
                
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!-- <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form> -->


            </b-navbar-nav>
            </b-collapse>
        </b-navbar>

    </header>
  
</div>
</template>

<style scoped>
.header-container {
  height: 60px;
}
.the-header {
  width: 100%;
  position: fixed;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.nav-brand{
    color: rgb(125, 133, 138)
}
.nav-brand a{
    color: rgb(55, 76, 168)
} 
.nav-item a {
    color: rgb(18, 25, 41);
}

.nav-item a.nuxt-link-active {
  color:rgba(100, 177, 125, 0.699);
}
</style>