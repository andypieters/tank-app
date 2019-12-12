<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Tanksessie toevoegen</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Km sgtand"
                name="odo"
                type="tel"
                step="0.1"
                v-model="fuelSession.odo"
              />
              <v-text-field
                label="Liters"
                name="liters"
                type="number"
                step="0.001"
                v-model="fuelSession.liters"
              />
              <v-text-field
                label="Literprijs"
                name="pricePerLiter"
                type="number"
                step="0.001"
                v-model="fuelSession.pricePerLiter"
              />
              <v-select
                v-model="fuelSession.fuelType"
                label="Brandstof"
                :items="fuelTypes"
              ></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn link to="/">Annuleren</v-btn>
            <v-spacer />
            <v-btn @click="save" color="primary">Opslaan</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import FuelSession from "@/models/FuelSession";
import store from "@/store";
import v4 from "uuid";
import { mapState } from "vuex";
export default Vue.extend({
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    save() {
      this.$emit("save", this.$props.fuelSession);
    }
  },
  data: function() {
    return {
      isNew: false
    };
  },
  computed: {
    ...mapState(["fuelTypes"])
  },
  props: {
    fuelSession: {
      type: Object as () => FuelSession,
      default: () => <FuelSession>{ id: v4(), createdAt: new Date() }
    }
  }
});
</script>
