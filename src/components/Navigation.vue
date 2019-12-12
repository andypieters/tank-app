<template>
  <v-list dense>
    <v-list-item link to="/">
      <v-list-item-action>
        <v-icon>mdi-home</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="/session/add">
      <v-list-item-action>
        <v-icon>mdi-contact-mail</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Sessie toevoegen</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
