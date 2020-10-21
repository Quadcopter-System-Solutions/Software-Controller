<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col class="ion-align-self-start">
              <h1>QuadSquad Control Center</h1>
            </ion-col>
            <ion-col>
              <ion-row class="ion-justify-content-end">
                <ion-button
                  size="small"
                  @click="() => router.push('/settings')"
                >
                  <ion-icon size="medium" name="cog"></ion-icon>
                </ion-button>
              </ion-row>
              <ion-row class="ion-justify-content-end">
                <ion-button size="small" @click="() => router.push('/test')">
                  <ion-icon size="medium" name="hammer"></ion-icon>
                </ion-button>
              </ion-row>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content v-bind:scrollY="scroll" ref="content" :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-no-padding" height="auto" size="9">
          <ion-col class="ion-no-padding">
            <video-streamer></video-streamer>
          </ion-col>
        </ion-row>
        <ion-row class="ion-no-padding" height="auto" size="3">
          <ion-col class="ion-no-padding">
            <flight-control></flight-control>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import flightControl from "../components/flight-control.vue";
import videoStreamer from "../components/video-streamer.vue";

export default defineComponent({
  name: "ControlCentre",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    flightControl,
    videoStreamer,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
      scroll: true,
    };
  },
  methods: {
    toggleScroll() {
      this.scroll = !this.scroll;
    },
  },
});
</script>

<style scoped>
.content-grid {
  height: 100vh;
}

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>