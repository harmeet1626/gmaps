<template>
  <div>
    <h2>Vue Js Google Maps with Multiple Markers Example</h2>

    <gmap-map :center="center" :zoom="5" style="width: 100%; height: 555px">
      <gmap-marker
        :key="index"
        v-for="(gmp, index) in locations"
        :position="gmp"
        @click="center = gmp"
      ></gmap-marker>
      <gmapPolygon :paths="paths" />
      <!-- <gmapRectangle :options="rectangle" /> -->
      <!-- <gmapCircle :center="center"></gmapCircle>  -->
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "userlocation-",
  data() {
    return {
      // center: { lat: 40.714, lng: -74.005 },
      editable: true,
      draggable: true,
      population: 8405837,
      circleCenter: { lat: 40.714, lng: -74.005 },
      options: {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      },

      rectangle: {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        bounds: {
          north: 33.685,
          south: 33.671,
          east: -116.234,
          west: -116.251,
        },
      },
      center: {
        lat: 40.714,
        lng: -74.005,
      },
      locations: [],
      currentLocation: null,
      paths: [
        {
          lat: 30.681445812915797,
          lng: 76.72593267775184,
          label: "SoftProdigy",
        },
        {
          lat: 17.56504980574306,
          lng: -1.9763230466193384,
          label: "PG",
        },
        
      ],
    };
  },

  mounted() {
    this.setLocationLatLng();
  },

  methods: {
    setLocationLatLng() {
      navigator.geolocation.getCurrentPosition((geolocation) => {
        this.center = {
          lat: geolocation.coords.latitude,
          lng: geolocation.coords.longitude,
        };
      });

      this.locations = [
        {
          lat: 30.681445812915797,
          lng: 76.72593267775184,
          label: "SoftProdigy",
        },
        {
          lat: 17.56504980574306,
          lng: -1.9763230466193384,
          label: "PG",
        },
      ];
    },
  },
};
</script>
