<template>
    <SessionForm v-on:cancel="cancel" v-on:save="saveSession"></SessionForm>
</template>

<script lang="ts">
import Vue from 'vue'
import SessionForm from '@/components/SessionForm.vue'
import FuelSession from '@/models/FuelSession'

export default Vue.extend({
    components: {
        SessionForm
    },
    methods:{
        cancel(){
            this.$router.push('/');
        },
        saveSession(session: FuelSession){
            this.$store.commit('saveFuelSession', session);
            this.$router.push('/');
        }
    }
})
</script>