<template>
  <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-grid fixed>
                <ion-row>
                    <ion-col size='11'>  
                            <ion-title>QuadSquad</ion-title>
                    </ion-col>
                    <ion-col size='1'>
                      <ion-button @click='() => router.push("/settings")'>
                          <ion-icon size='large' name='cog'></ion-icon>
                      </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>
      </ion-header>
    
    <ion-content :fullscreen='true'>
      <ion-header collapse='condense'>
        <ion-toolbar>
          <ion-title size='large'>QuadSquad</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label>Get</ion-label>
                <ion-toggle checked @ionChange='this.get = !this.get'></ion-toggle>
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-item>
                <ion-label position='stacked'>Endpoint</ion-label>
                <ion-input placeholder='/' @input='this.endpoint = $event.target.value'></ion-input>
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-item>
                <ion-label position='stacked'>Request Data</ion-label>
                <br>
                <ion-text>
                  {{ data }}
                  <br><br>
                  {{ status }}
                  <br><br>
                  {{ url }}
                </ion-text>
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-button v-on:click="request()">
                Request
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang='ts'>
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonItem, IonToggle } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import piCommunication from '../components/pi-communication.vue';
import axios from 'axios';
import { AxiosResponse } from 'axios';

export default defineComponent({
  name: 'ControlCentre',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonToggle
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
      data: '',
      status: '',
      url: '',
      endpoint: '',
      get: true
    }
  },
  methods: {
    async request(){
      let request: AxiosResponse;
      try{
        if(this.get){
          request = await piCommunication.getPiEndpoint(this.endpoint);
        }else {
          request = await piCommunication.postPiEndpoint('controls/up/100.0');
        }
        this.data = 'data: ' + request.data
        this.status = 'status: ' + request['status']
        this.url = 'url: ' + request.config.url
      } catch(Error) {
        this.data = Error;
      }
    }
  }
});
</script>

<style scoped>
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