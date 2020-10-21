<template>
  <ion-card>
    <ion-item>
      <ion-label position="stacked">Server IP:</ion-label>
      <ion-input
        id="server"
        placeholder="192.168.0.198"
        @input="handleInput($event.target.value)"
      ></ion-input>
    </ion-item>
  </ion-card>
</template>

<script>
import { IonCard, IonLabel, IonInput } from "@ionic/vue";

// Alex's local Pi IP
const defaultServerIP = "192.168.0.198";

// For testing on local
// const defaultServerIP = '127.0.0.1';

export let serverIP = defaultServerIP;

export default {
  name: "serverSelect",
  components: {
    IonCard,
    IonLabel,
    IonInput,
  },
  methods: {
    handleInput(value) {
      if (value != "") {
        serverIP = value;
      } else {
        serverIP = defaultServerIP;
      }
    },
  },
};
</script>

<style>
</style>