<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center min-height="1000">
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote class="display-1">
          &#8220;Test job for interviewing&#8221;
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
