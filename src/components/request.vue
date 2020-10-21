<template>
  <ion-card>
    <ion-grid>
      <ion-col>
        <ion-row class="ion-align-items-center">
          <ion-col>
            <ion-item>
              <ion-label>Get</ion-label>
              <ion-toggle
                checked
                @ionChange="this.get = !this.get"
              ></ion-toggle>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-center">
          <ion-col>
            <ion-item>
              <ion-label position="stacked">Endpoint</ion-label>
              <ion-input
                placeholder="/"
                @input="this.endpoint = $event.target.value"
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-center">
          <ion-col>
            <ion-item>
              <ion-label position="stacked">Request Data</ion-label>
              <br />
              <ion-text>
                {{ data }}
                <br /><br />
                {{ status }}
                <br /><br />
                {{ url }}
              </ion-text>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-button slot="end" v-on:click="request()">
                Request
              </ion-button>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-grid>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonToggle,
} from "@ionic/vue";
import piCommunication from "../components/pi-communication.vue";

export default {
  name: "request",
  components: {
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonToggle,
  },
  data() {
    return {
      data: "",
      status: "",
      url: "",
      endpoint: "",
      get: true,
    };
  },
  methods: {
    async request() {
      let request;
      try {
        if (this.get) {
          request = await piCommunication.getPiEndpoint(this.endpoint);
        } else {
          request = await piCommunication.postPiEndpoint("controls/up/100.0");
        }
        this.data = "data: " + request.data;
        this.status = "status: " + request["status"];
        this.url = "url: " + request.config.url;
      } catch (Error) {
        this.data = Error;
      }
    },
  },
};
</script>
    
<style>
#requests ion-row {
  align-content: center;
}
</style>