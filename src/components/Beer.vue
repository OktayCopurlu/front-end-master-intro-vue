<template>
    <h1>Make yourself some Punk Beers</h1>
  <section @mousemove="xCordinate" :style="{ backgroundColor: `hsl(${colorValue},80%,50%)` }">
    <div v-if="!beers.length">Loading...</div>
    <div class="beer-container" v-for="beer in beers" :key="beer">
      <img :src="beer.img" height="150" />
      <div>
        <h2>{{ beer.name }}</h2>
        <p>{{ beer.tagline }}</p>
        <p>{{ beer.desc }}</p>
        <p>{{ beer.tips }}</p>
        <h3>Food Pairings</h3>
        <ul>
          <li v-for="item in beer.food" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bottom: false,
      beers: [],
      colorValue:""
    };
  },
  watch: {
    bottom(newValue) {
      if (newValue) {
        this.addBeer();
      }
    },
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.addBeer();
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    addBeer() {
      axios.get("https://api.punkapi.com/v2/beers/random").then((response) => {
        let api = response.data[0];
        let apiInfo = {
          name: api.name,
          desc: api.description,
          img: api.image_url,
          tips: api.brewers_tips,
          tagline: api.tagline,
          foor: api.food_pairing,
        };
        this.beers.push(apiInfo);

        if (this.bottomVisible() == true) {
          this.addBeer();
        }
      });
    },
    xCordinate(e){
        this.colorValue = e.clientX
    }
  },
};
</script>
<style lang="sass" scoped>
$flex:flex
$wrap:wrap

section
    display:$flex
    flex-wrap:$wrap
    margin:auto

    .beer-container
        background-color:#ffffff
        width: 20rem
        margin:1rem
        padding: 2rem
        flex-wrap: $wrap
        box-shadow: 1px 1px 5px #2c3e50
        border-radius:10px
</style>