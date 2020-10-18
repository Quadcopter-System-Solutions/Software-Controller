<template>
  <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-grid fixed>
                <ion-row>
                    <ion-col size='6'>  
                            <ion-title>QuadSquad</ion-title>
                    </ion-col>
                    <ion-col size='6'>
                      <ion-button @click="() => router.push('/settings')">
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
    
      <div id='container'>
        <ion-button v-on:click='onClick()'>
          Click me
        </ion-button>
        <ion-text color='primary'>
          <h1 id='text'></h1>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang='ts'>
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const SERVERIP = 'http://192.168.0.198:5000/';

export default defineComponent({
  name: 'ControlCentre',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async onClick() {
      let serv: string;
      const val = this.$el.querySelector('#server').value
      if(val != ''){
        serv = 'http://' + val + ':5000/';
      }else {
        serv = SERVERIP
      }
      const data = await axios.get(serv);
      console.log(data);
      this.$el.querySelector('#text').innerText = data.data;
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