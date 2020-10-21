<template>
  <ion-card class=" ion-no-margin">
    <ion-grid>
      <ion-row>
        <ion-col>
            <h4>Gesture data</h4>
          <p ref="data"></p>
        </ion-col>
        <ion-col size="7">
          <div ref="controlGesture" class="flight-control-gestures"></div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="7">
          <ion-col class="flight-control-buttons">
            <ion-row>
              <ion-col size="4"></ion-col>
              <ion-col size="4">
                <ion-button color="dark" v-on:click="elevation(true)">
                  <ion-icon size="medium" name="chevron-up"></ion-icon>
                </ion-button>
              </ion-col>
              <ion-col size="4"></ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">
                <ion-button color="dark" v-on:click="rotate(true)">
                  <ion-icon size="medium" name="return-up-back"></ion-icon>
                </ion-button>
              </ion-col>
              <ion-col size="4"></ion-col>
              <ion-col size="4">
                <ion-button color="dark" v-on:click="rotate(false)">
                  <ion-icon size="medium" name="return-up-forward"></ion-icon>
                </ion-button>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4"></ion-col>
              <ion-col size="4">
                <ion-button color="dark" v-on:click="elevation(false)">
                  <ion-icon size="medium" name="chevron-down"></ion-icon>
                </ion-button>
              </ion-col>
              <ion-col size="4"></ion-col>
            </ion-row>
          </ion-col>
        </ion-col>
        <ion-col></ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script>
import { defineComponent } from "vue";
import { IonCard, createGesture } from "@ionic/vue";
import piCommunication from "../components/pi-communication.vue";

export default defineComponent({
  name: "flightControl",
  components: {
    IonCard,
  },
  data() {
    return {
      position: "",
    };
  },
  mounted() {
    const options = {
      el: this.$refs.controlGesture,
      gestureName: "controlGesture",
      threshold: 0,
      onStart: () => {
        this.toggleScroll();
      },
      onMove: (detail) => {
        this.onMove(detail);
      },
      onEnd: () => {
        this.toggleScroll();
      },
    };

    createGesture(options).enable(true);
  },
  methods: {
    onMove(detail) {
      if (!this.position) {
        const tmp = this.$refs.controlGesture.getBoundingClientRect();
        const diameter = tmp.right - tmp.x;
        const radius = diameter / 2;
        this.position = {
          x: tmp.x,
          y: tmp.y,
          top: tmp.top,
          bottom: tmp.bottom,
          left: tmp.left,
          right: tmp.right,
          height: tmp.heigh,
          width: tmp.width,
          diameter: diameter,
          radius: radius,
          centreX: tmp.x + radius,
          centreY: tmp.y + radius,
        };
      }

      const currentX = detail.currentX;
      const currentY = detail.currentY;
      const relativeX = currentX - this.position.centreX;
      const relativeY = -(currentY - this.position.centreY);
      const accelerationX = relativeX / this.position.radius;
      const accelerationY = relativeY / this.position.radius;
      
      const roundedCurrentX = (Math.round(currentX * 10) / 10).toFixed(1);
      const roundedCurrentY = (Math.round(currentY * 10) / 10).toFixed(1);
      const roundedrelativeX = (Math.round(relativeX * 10) / 10).toFixed(1);
      const roundedrelativeY = (Math.round(relativeY * 10) / 10).toFixed(1);
      const roundedAccelX = (Math.round(accelerationX * 100 * 10) / 10).toFixed(1);
      const roundedAccelY = (Math.round(accelerationY * 100 * 10) / 10).toFixed(1);

      this.$refs.data.innerHTML = `
            <div>Current X: ${roundedCurrentX}</div>
            <div>Current Y: ${roundedCurrentY}</div>
            <div>Relative X: ${roundedrelativeX}</div>
            <div>Relative Y: ${roundedrelativeY}</div>
            <div>Accel x: ${roundedAccelX} %</div>
            <div>Accel Y: ${roundedAccelY} %</div>
        `;
    },
    async elevation(ascend){
        if(ascend){
            console.log("ascend:");
            const request = await piCommunication.getPiEndpoint("");
            console.log('Pi response: ' + request.data)
        }else {
            console.log("descend");
            const request = await piCommunication.getPiEndpoint("");
            console.log('Pi response: ' + request.data)
        }
    },
    async rotate(clockwise){
        if(clockwise){
            console.log("clockwise");
            const request = await piCommunication.getPiEndpoint("");
            console.log('Pi response: ' + request.data)
        }else {
            console.log("counter-clockwise");
            const request = await piCommunication.getPiEndpoint("");
            console.log('Pi response: ' + request.data)
        }
    },
    getParent(name) {
      let p = this.$parent;
      while (typeof p !== "undefined") {
        if (p.$options.name == name) {
          return p;
        } else {
          p = p.$parent;
        }
      }
      return false;
    },
    toggleScroll() {
      this.getParent("ControlCentre").toggleScroll();
    },
  },
});
</script>

<style>
.flight-control-gestures {
  padding-top: 100%;
  width: 100%;
  background-color: #bbb;
  border-radius: 50%;
}
.flight-control-buttons {
  width: 100%;
}
</style>