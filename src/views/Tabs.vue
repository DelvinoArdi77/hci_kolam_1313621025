<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="HomePage" href="/Tabs/HomePage">
          <ion-icon src="img/Home.svg"></ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="PageSecond" href="/Tabs/Page2">
          <ion-icon src="img/pond.svg"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonRouterOutlet,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonPage,
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonRouterOutlet,
  },
});
</script>
<style>
ion-tab-bar {
  border-radius: 30px 30px 0 0;
}
</style>
