<template>
  <main>
    <div>
      <img
        class="img-post"
        src="https://media-cdn.tripadvisor.com/media/photo-s/17/4b/ec/16/caption.jpg"
        alt="kız kulesi istanbul"
      />
      <div class="person-info">
        <img
          class="img-person"
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
          alt="person photo"
        />
        <div>
          <h5>Jullianne Delfina</h5>
          <h4>It's lovely after it rains</h4>
        </div>
      </div>
      <ul>
        <li v-for="comment in comments" :key="comment">{{ comment }}</li>
      </ul>
      <input
        type="text"
        placeholder="Add a comment"
        @keyup.enter="addComment"
        v-model="newComment"
        id="comment-input"
      />
    </div>
  </main>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      comments: [],
      newComment: "",
    });
    const addComment = () => {
      state.comments.push(state.newComment);
      state.newComment = "";
    };
    return {
      ...toRefs(state),
      addComment,
    };
  },
};
</script>

<style lang="sass" scoped>
*
    box-sizing: border-box
    color: #ffffff
main
    background-color: #000000
    padding: 1rem 2rem
    width: 30rem
    margin: auto
.img-post
    position: relative
    width: 90%
.person-info
    display: flex
    height: 5rem
    position: relative
    top: -1.4rem
    margin-bottom: 1rem
    div
        display: flex
        flex-direction: column
        text-align: start
        justify-content: flex-end
        margin-left: 2rem
        *
            margin: .7rem 0 0 0
            padding: 0
.img-person
    width: 5rem
    border: 3px solid #ffffff

ul
    margin: auto
    padding: 0
    width: 90%
    margin: 0 auto
li
    list-style: none
    border-bottom: 1px solid gray
    text-align: start
    padding: 0.7rem 0
input
    margin-top: 1rem
    padding: 0.4rem
    width: 90%
    color: black
    border: none
    outline: none
</style>