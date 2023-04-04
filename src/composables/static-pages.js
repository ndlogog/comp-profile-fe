import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://coderiver.local/api/v1/";

export default function useStaticPages() {
  const staticPages = ref([]);
  const staticPage = ref([]);
  const errors = ref([]);
  const router = useRouter();

  const getStaticPages = async () => {
    const response = await axios.get("static-page");
    staticPages.value = response.data.data;
  };

  const getStaticPage = async (id) => {
    const response = await axios.get("static-page/" + id);
    staticPage.value = response.data.data;
  };

  const storeStaticPage = async (data) => {
    try {
      await axios.post("static-page", data);
      await router.push({name: "StaticPageIndex"});
    } catch (error) {
      if(error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateStaticPage = async (id) => {
    try {
      await axios.put("static-page/" + id, staticPage.value);
      await router.push({name: "StaticPageIndex"});
    } catch (error) {
      console.log(error);
      if(error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroyStaticPage = async (id) => {
    if(!window.confirm("Are you sure?")) {
      return;
    }
    await axios.delete("static-page/" + id);
    await getStaticPages();
  }  

  return {
    staticPage,
    staticPages,
    getStaticPage,
    getStaticPages,
    storeStaticPage,
    updateStaticPage,
    destroyStaticPage,
    errors,
  };
}