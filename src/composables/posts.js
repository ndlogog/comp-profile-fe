import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://coderiver.local/api/v1/";

export default function usePosts() {
  const posts = ref([]);
  const post = ref([]);
  const errors = ref([]);
  const router = useRouter();

  const getPosts = async () => {
    const response = await axios.get("post");
    posts.value = response.data.data;
  };

  const getPost = async (id) => {
    const response = await axios.get("post/" + id);
    post.value = response.data.data;
  };

  const storePost = async (data) => {
    try {
      await axios.post("post", data);
      await router.push({name: "PostIndex"});
    } catch (error) {
      if(error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updatePost = async (id) => {
    try {
      await axios.put("post/" + id, post.value);
      await router.push({name: "PostIndex"});
    } catch (error) {
      if(error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroyPost = async (id) => {
    if(!window.confirm("Are you sure?")) {
      return;
    }
    await axios.delete("post/" + id);
    await getPosts();
  }  

  return {
    post,
    posts,
    getPost,
    getPosts,
    storePost,
    updatePost,
    destroyPost,
    errors,
  };
}