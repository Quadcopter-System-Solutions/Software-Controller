<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col class="ion-align-self-start">
              <h1>Settings</h1>
            </ion-col>
            <ion-col>
              <ion-row class="ion-justify-content-end">
                <ion-button size="small" @click="() => router.go(-1)">
                  <ion-icon size="medium" name="home"></ion-icon>
                </ion-button>
              </ion-row>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <serverSelect></serverSelect>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonHeader,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";
import serverSelect from "../components/server-select";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Settings",
  components: {
    IonGrid,
    IonCol,
    IonRow,
    IonContent,
    IonHeader,
    IonPage,
    serverSelect,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {},
});
</script>

<style>
#container strong {
  font-size: 20px;
  line-height: 26px;
}
</style>