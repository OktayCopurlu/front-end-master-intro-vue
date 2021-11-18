<template >
  <h1>Exercise Time</h1>
  <section>
    <h2>Blog Posts</h2>
    <div>
      <h5>ADD A NEW POST</h5>
      <form @submit.prevent="addPost">
        <input type="text" v-model="title" placeholder="title" /><input
          type="text"
          v-model="author"
          placeholder="author"
        />
        <select v-model="label">
          <option value="histroy">History</option>
          <option value="science">Science</option>
        </select>
        <button>Add a new blog post</button>
      </form>
    </div>
    <div>
      <select v-model="filterLabel">
        <option value="all">All</option>

        <option value="histroy">History</option>
        <option value="science">Science</option>
      </select>
      <div v-for="post in filterPost" :key="post">
        <strong>{{ post.title }}</strong>
        <p>{{ post.author }}</p>
        <label>{{ post.label }}</label>
      </div>
    </div>
    <hr />
    <ul>
      <li v-for="option in options" :key="option">
        {{ option }}
      </li>
    </ul>
    <p>Delivery Time : {{ deliveryTime }}</p>
    <button @click="changeDelivery">Delivery ?</button>
    <p v-if="freeDelivery">Free Delivery!</p>
    <p v-else>Delivery is not free!</p>
    <button @click="increaseItem">Add an item {{ items }}</button>
  </section>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name:"BlogPost",
  setup() {
    const state = reactive({
      options: ["Bread", "Cheese", "Olive Oil", "Tomaten"],
      items: 0,
      freeDelivery: true,
      deliveryTime: 25,
    });
    const increaseItem = () => {
      state.items++;
    };
    const changeDelivery = () => {
      return state.freeDelivery = !state.freeDelivery;
    };
    return {
      ...toRefs(state),
      increaseItem,
      changeDelivery,
    };
  },
  data() {
    return {
      posts: [],
      title: "",
      author: "",
      label: "",
      filterLabel: "",
    };
  },
  methods: {
    addPost() {
      const postObj = {
        title: this.title,
        author: this.author,
        label: this.label,
      };
      this.posts.push(postObj);
    },
  },
  computed: {
    filterPost() {
      const filteredPosts = this.posts.filter((post) => {
        if (this.filterLabel == "" || this.filterLabel == "all") {
          return post;
        } else if (post.label == this.filterLabel) {
          return post;
        }
      });
      return filteredPosts;
    },
  },
};
</script>

<style lang="sass" scoped>
.blur
  filter: blur(2px)
  opacity: 0.3
.bk
  transition: (all 0.5s ease-out)
.modal
  width: 10rem
  height: 10rem
  background-color: #e3e3e3
  margin: 0 auto
</style>