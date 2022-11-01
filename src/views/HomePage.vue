<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Kolam</ion-card-subtitle>
                <ion-card-title>10</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Kolam Aktif</ion-card-subtitle>
                <ion-card-title>8</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Ikan Hidup</ion-card-subtitle>
                <ion-card-title>182 Ekor</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Ikan Mati</ion-card-subtitle>
                <ion-card-title>89 Ekor</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Panen 2022</ion-card-subtitle>
                <ion-card-title>109 Kg</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-subtitle>Total Pakan</ion-card-subtitle>
                <ion-card-title>223 Kg</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-title>TOTAL BERAT IKAN</ion-title>
      <div id="container-fluid">
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-card color="dark">
                <img
                  alt="Silhouette of mountains"
                  src="https://media.discordapp.net/attachments/886810689417670707/1032234032769028116/sakemi2.png"
                />
                <ion-card-header>
                  <ion-card-title>LELE</ion-card-title>
                  <ion-card-subtitle color="secondary">
                    <span style="color: #6cb5ec; display: inline-block"
                      >200 Kg</span
                    >
                  </ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card color="dark">
                <img
                  alt="Silhouette of mountains"
                  src="https://media.discordapp.net/attachments/886810689417670707/1032233691918913536/sakemi2.jpg?width=671&height=671"
                />
                <ion-card-header>
                  <ion-card-title>NILA MERAH</ion-card-title>
                  <ion-card-subtitle>
                    <span style="color: #6cb5ec; display: inline-block"
                      >200 Kg</span
                    ></ion-card-subtitle
                  >
                </ion-card-header>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>

      <ion-title>KUALITAS AIR</ion-title>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-title>pH</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-card-subtitle
                  >Normal
                  <span style="color: #6cb5ec; display: inline-block"
                    >6 Kolam</span
                  >
                </ion-card-subtitle>
                <ion-card-subtitle
                  >Abnormal
                  <span style="color: #6cb5ec; display: inline-block"
                    >6 Kolam</span
                  >
                </ion-card-subtitle>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card color="dark">
              <ion-card-header>
                <ion-card-title>DO</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-card-subtitle
                  >Normal
                  <span style="color: #6cb5ec; display: inline-block"
                    >6 Kolam</span
                  >
                </ion-card-subtitle>
                <ion-card-subtitle
                  >Abnormal
                  <span style="color: #6cb5ec; display: inline-block"
                    >6 Kolam</span
                  >
                </ion-card-subtitle>
              </ion-card-content>
            </ion-card>
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
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonCardTitle,
  },
});
</script>

<style scoped>
#beratIkan {
  width: 60%;
}

#container {
  text-align: start;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container-fluid {
  left: 0;
  right: 0;
  overflow: visible;
  text-align: left;
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

#Slide2 {
  transform: translateX(-40%);
}

#container a {
  text-decoration: none;
}

ion-slides {
  height: 100%;
  text-align: left;
}

.swiper-slide {
  display: block;
}

.swiper-slide h2 {
  margin-top: 2.8rem;
}

.swiper-slide img {
  max-height: 50%;
  max-width: 80%;
  margin: 60px 0 40px;
  pointer-events: none;
}
ion-title {
  font-weight: bold;
}
ion-slide ion-card {
  width: 120%;
}

ion-card-title {
  color: black;
  font-weight: bold;
  text-align: left;
  font-size: large;
}

ion-card-subtitle {
  color: black;
  font-weight: bold;
  text-align: left;
}
</style>
