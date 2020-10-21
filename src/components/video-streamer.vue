<template>
  <ion-card id="video-streamer-container" class="ion-no-padding ion-no-margin">
  </ion-card>
</template>

<script>
import { defineComponent } from "vue";
import { IonCard } from "@ionic/vue";

export default defineComponent({
  name: "videoStreamer",
  components: {
    IonCard,
  },
  methods: {},
});
</script>

<style>
#video-streamer-container {
  padding-top: 56.25%;
  background: black;
}
</style>