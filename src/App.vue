<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <Navigation></Navigation>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  props: {
    source: String
  },
  components: {
    Navigation
  },
  created(){
    this.$store.commit('initialiseStore');
  },
  data: () => ({
    drawer: null
  })
};
</script>
