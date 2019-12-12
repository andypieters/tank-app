<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Tank sessies</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn link to="/session/add" icon><v-icon>mdi-plus</v-icon></v-btn>
          </v-toolbar>
          <v-list>
            <v-list-item
              :key="fuelSession.id"
              v-for="fuelSession in fuelSessions"
              
            >
            <v-list-item-content>
              <v-list-item-title>{{ fuelSession.odo }}</v-list-item-title>
              <v-list-item-subtitle>{{ fuelSession.liters }} x {{fuelSession.pricePerLiter}}</v-list-item-subtitle>
            </v-list-item-content>
              
              <v-list-item-action>
                <span>
                <v-btn icon @click="editSession(fuelSession)">
                  <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="deleteSession(fuelSession)">
                  <v-icon color="red lighten-1">mdi-delete</v-icon>
                </v-btn>
                </span>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapState(["fuelSessions"])
  },
  methods: {
    editSession(session) {
      this.$router.push({ name: "editSession", params: { id: session.id } });
    },
    deleteSession(fuelSession) {
      this.$store.commit('deleteFuelSession', fuelSession);
    }
  }
};
</script>
