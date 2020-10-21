<template>
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col></ion-col>
        <ion-col size="6">
          <div ref="controlGesture" class="flight-control-gestures"></div>
          <p ref="pa">hello world</p>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <ion-col class="flight-control-buttons">
            <ion-row>
              <ion-col size="4"></ion-col>
              <ion-col size="4">
                <ion-button color="dark" v-on:click="onClick()">
                  <ion-icon size="medium" name="chevron-up"></ion-icon>
                </ion-button>
              </ion-col>
              <ion-col size="4"></ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">
                <ion-button color="dark" v-on:click="onClick()">
                  <ion-icon size="medium" name="return-up-back"></ion-icon>
                </ion-button>
              </ion-col>
              <ion-col size="4"></ion-col>
              <ion-col size="4">
                <ion-button color="dark" v-on:click="onClick()">
                  <ion-icon size="medium" name="return-up-forward"></ion-icon>
                </ion-button>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4"></ion-col>
              <ion-col size="4">
                <ion-button color="dark" v-on:click="onClick()">
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
      const relativeY = this.position.centreY - currentY;

      this.$refs.pa.innerHTML = `
            <div>Current X: ${currentX}</div>
            <div>Current Y: ${currentY}</div>
            <div>Relative X: ${relativeX}</div>
            <div>Relative Y: ${relativeY}</div>
        `;
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