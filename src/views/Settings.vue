<template>
  <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-grid fixed>
                <ion-row>
                    <ion-col size='11'>  
                        <ion-title>Settings</ion-title>
                    </ion-col>
                    <ion-col size='1'>
                        <ion-button @click="() => router.push('/control-centre')">
                            <ion-icon size='large' name='home'></ion-icon>
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen='true'>
          <serverSelect></serverSelect>
      </ion-content>
  </ion-page>
</template>

<script>
import { IonGrid, IonCol, IonRow, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import serverSelect from '../components/server-select';
import { useRouter } from 'vue-router';

export default defineComponent ({
    name: 'Settings',
    components: {
        IonGrid,
        IonCol,
        IonRow,
        IonContent,
        IonHeader,
        IonPage, 
        IonTitle,
        IonToolbar,
        serverSelect
    },
    setup() {
        const router = useRouter();
        return { router };
    },
    methods: {
    }
})
</script>

<style>

</style>