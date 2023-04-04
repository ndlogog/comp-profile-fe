<script setup>
  import { reactive } from 'vue';
  import usePosts from '../../composables/posts';
  import useCategories from '../../composables/categories';

  const { storePost, errors } = usePosts();

  const form = ({
    category_id: "",
    slug: "",
    title: "",
    body: "",
    featured_image: "",
    meta_title: "",
    meta_description: "",
  })
</script>
<template>
  <div class="mt-12">
    <form class="max-w-screen-md mx-auto p-8 pb-6 bg-white shadow-md rounded-md" 
      @submit.prevent="storePost(form)">
      <div class="relative z-0 w-full mb-6 group">
        <select 
          v-model="form.category_id"
          name="category_id" id="f_category_id" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
          <option value="">Choose Category</option>
          <option value="3">Test</option>
        </select>
        <label for="f_category_id" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Slug</label>
        <div v-if="errors.category_id">
          <span class="text-sm text-red-400">{{ errors.category_id[0] }}</span>
        </div>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input type="text" 
          v-model="form.slug"
          name="slug" id="f_slug" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="f_slug" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Slug</label>
        <div v-if="errors.slug">
          <span class="text-sm text-red-400">{{ errors.slug[0] }}</span>
        </div>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input type="text" 
          v-model="form.title"
          name="title" id="f_title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="f_title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
        <div v-if="errors.title">
          <span class="text-sm text-red-400">{{ errors.title[0] }}</span>
        </div>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <textarea type="text" 
          v-model="form.body"
          name="body" id="f_body" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "> </textarea>
        <label for="f_body" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input type="text" 
          v-model="form.meta_title"
          name="meta_title" id="f_meta_title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="f_meta_title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Meta Title</label>
        <div v-if="errors.meta_title">
          <span class="text-sm text-red-400">{{ errors.meta_title[0] }}</span>
        </div>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <textarea type="text" 
          v-model="form.meta_description"
          name="meta_description" id="f_meta_description" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "> </textarea>
        <label for="f_meta_description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Meta Description</label>
        <div v-if="errors.meta_description">
          <span class="text-sm text-red-400">{{ errors.meta_description[0] }}</span>
        </div>
      </div>
      <div class="mt-4 text-right">
        <RouterLink :to="{name: 'PostIndex'}" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel</RouterLink>
        <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Save</button>
      </div>
    </form>
  </div>
</template>