<template>
  <SessionForm
    :fuelSession="session"
    v-on:cancel="cancel"
    v-on:save="saveSession"
  ></SessionForm>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import SessionForm from "@/components/SessionForm.vue";
import FuelSession from "../models/FuelSession";

export default Vue.extend({
  computed: {
    ...mapGetters(["getSessionById"]),

    session(): FuelSession {
      return <FuelSession>this.getSessionById(this.$route.params.id);
    }
  },
  methods: {
    cancel() {
      this.$router.push("/");
    },
    saveSession(session: FuelSession) {
      this.$store.commit("saveFuelSession", session);
      this.$router.push("/");
    }
  },
  components: {
    SessionForm
  }
});
</script>
