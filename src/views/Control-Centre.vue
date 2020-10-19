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
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
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
    </ion-content>
  </ion-page>
</template>

<script lang='ts'>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonToggle,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import piCommunication from "../components/pi-communication.vue";
import { AxiosResponse } from "axios";

export default defineComponent({
  name: "ControlCentre",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonToggle,
  },
  setup() {
    const router = useRouter();
    return { router };
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
      let request: AxiosResponse;
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
});
</script>

<style scoped>
#requests ion-row {
  align-content: center;
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