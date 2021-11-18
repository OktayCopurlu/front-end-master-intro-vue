import { createApp } from "vue";
import App from "./App.vue";
import Training from "./components/Training.vue";
import BlogPost from "./components/BlogPost.vue";
import Beer from "./components/Beer.vue";
import Comment from "./components/Comment.vue";
import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
      path: "/training",
      name: "Training",
      component: Training,
    },
    {
      path: "/blog-post",
      name: "BlogPost",
      component: BlogPost,
    },{
        path: "/beer",
        name:"Beer",
        component: Beer
    },{
      path:"/comment",
      name:"Comment",
      component: Comment
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App).use(router).mount("#app");
