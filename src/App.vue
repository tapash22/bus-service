<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <router-view/>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheFooter from './components/TheFooter.vue';
import TheNavigation from './components/TheNavigation.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),

  components:{
    TheNavigation,
    TheFooter
  }
};
</script>
