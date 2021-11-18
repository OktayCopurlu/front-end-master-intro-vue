<template>
  <div class="hello">
    <h3>Type here:</h3>
    <textarea
      class="message"
      rows="5"
      maxlength="72"
      v-model="message"
    ></textarea>
    <p v-if="message === 'hello'">Hello Oktay</p>
    <p v-else-if="message === 'bye'">Good bye Oktay</p>
    <button :class="[message ? active : '']" type="submit">Submit</button>
    <br />
    <p class="booktext">{{ message }}</p>
    <hr />
    <input
      type="checkbox"
      v-model="checkedNames"
      value="Paul"
      id="paul"
    /><label for="paul">Paul</label>
    <input
      type="checkbox"
      v-model="checkedNames"
      value="Oktay"
      id="Oktay"
    /><label for="Oktay">Oktay</label>
    <input
      type="checkbox"
      v-model="checkedNames"
      value="Leyla"
      id="Leyla"
    /><label for="Leyla">Leyla</label>
    <input
      type="checkbox"
      v-model="checkedNames"
      value="Zeynep"
      id="Zeynep"
    /><label for="Zeynep">Zeynep</label>
    <p>Checked names are : {{ checkedNames }}</p>
    <hr />
    <button @click="counter++">Counter {{ counter }}</button>
    <hr />
    <input type="number" v-model="number1" />
    <input type="number" v-model="number2" />
    = <label>{{ number1 + number2 }}</label>
    <select v-model="car" name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab" selected>Saab</option>
    </select>
    <p v-if="car">you selected {{ car }}</p>
    <hr />
    <div
      @mousemove="xCordinate"
      :style="{ backgroundColor: `hsl(${x},80%,50%)` }"
    >
      <p>
        <button @click="increment">+</button>
        {{ counter }}
        <button @click="decrement">-</button>
      </p>
      <p>Pixels across : {{ x }}</p>
    </div>
    <hr />
    <div>
      <p v-for="comment in comments" :key="comment">{{ comment }}</p>
      <input @keyup.enter="addComment" type="text" v-model="newComment" />
    </div>
    <hr />
    <form @submit.prevent="submitForm">
      <input v-model="name" type="text" required />
      <input v-model="email" required type="email" />
      <input required v-model="caps" type="text" />
      <input :class="[name ? activeClass : '']" type="submit" />
    </form>
    <p>{{ result }}</p>
    <hr />
    <input type="text" v-model="filter" />
    <h3>
      Sort titles by :
      <button @click="sortLowest">Lowest Rated</button>
      <button @click="sortHighest">Highest Rated</button>
    </h3>
    <table>
      <thead>
        <tr>
          <th v-for="key in columns" :key="key">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in someFilter" :key="entry">
          <td v-for="key in columns" :key="key">
            {{ entry[key] }}
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <input type="text" v-model="userData" />
    <p>{{ greeting }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Training",

  data() {
    return {
      checkedNames: [],
      message: "",
      active: "active",
      counter: 0,
      down: "",
      number1: 0,
      number2: 0,
      car: "",
      x: 0,
      comments: [],
      newComment: "",
      activeClass: "active",
      name: "",
      email: "",
      caps: "",
      result: "",
      columns: ["title", "rating"],
      ratingsInfo: [
        { title: "White Chicks", rating: 82 },
        { title: "Black Chicks", rating: 98 },
      ],
      userData: "",
      filter: "",
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    xCordinate(e) {
      this.x = e.clientX;
    },
    addComment() {
      this.comments.push(this.newComment);
    },
    submitForm() {
      const body = {
        name: this.name,
        email: this.email,
        caps: this.caps,
      };

      axios
        .post("//jsonplaceholder.typicode.com/posts", body)
        .then((response) => {
          this.result = response.data;
        })
        .catch((error) => {
          this.result = "Error : " + error;
        });
    },
    sortLowest() {
      this.ratingsInfo.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    },
    sortHighest() {
      this.ratingsInfo.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    },
  },
  computed: {
    greeting() {
      return `You are a master ${this.userData}!`;
    },

    someFilter() {
      let filterText = new RegExp(this.filter, "i");
      return this.ratingsInfo.filter((data) => data.title.match(filterText));
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  padding: 1rem;
  display: block;
  margin: auto;
}
.active {
  background-color: orange;
}
</style>
