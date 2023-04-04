<script setup>
  import useStaticPages from '../../composables/static-pages';
  import useStaticPage from '../../composables/static-pages';
  import { onMounted } from 'vue';

  const { staticPages, getStaticPages, destroyStaticPage } = useStaticPages();

  onMounted(() => getStaticPages());
</script>
<template>
  <div class="mt-12">
    <div class="flex justify-end mb-2">
      <RouterLink :to="{name: 'StaticPageCreate'}" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Static Page</RouterLink>
    </div>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Slug</th>
            <th scope="col" class="px-6 py-3">Title</th>
            <th scope="col" class="px-6 py-3">Meta Title / Meta Description</th>
            <th scope="col" class="px-6 py-3 w-1/6"></th>
          </tr>
        </thead>
        <tbody>
          <tr 
              v-for="staticPage in staticPages"
              :key="staticPage.id" 
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6">{{ staticPage.id }}</td>
            <td class="py-4 px-6">{{ staticPage.slug }}</td>
            <td class="py-4 px-6">{{ staticPage.title }}</td>
            <td class="py-4 px-6">{{ staticPage.meta_title }} <br> {{ staticPage.meta_description }}</td>
            <td class="py-4 px-6">
              <RouterLink :to="{name: 'StaticPageEdit', params: {id: staticPage.id}}" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-xs">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Edit</span>
              </RouterLink>
              <button @click="destroyStaticPage(staticPage.id)" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 text-xs">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Delete</span>
              </button>
            </td>
          </tr> 
        </tbody>
      </table>
    </div>
  </div>
</template>