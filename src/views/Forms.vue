<template>
  <div>
    <h3 class="text-3xl font-semibold text-gray-700">Daily Record</h3>

  

    <div class="mt-8">


      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            Account settings
          </h2>

          <form @submit.prevent="register">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700" for="username">Collected Eggs</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.username"
                />
              </div>

              <div>
                <label class="text-gray-700" for="emailAddress"
                  >Dead Birds </label
                >
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.email"
                />
              </div>

              <div>
                <label class="text-gray-700" for="password">Sold Eggs</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.password"
                />
              </div>

              <div>
                <label class="text-gray-700" for="passwordConfirmation"
                  >closed Day Eggs</label
                >
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.confirm"
                />
              </div>
            </div>

            <div class="flex justify-end mt-4">
              <button
                class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";

interface User {
  username: string;
  email: string;
  password: string;
  confirm: string;
}

const user = ref<User>({
  username: "",
  email: "",
  password: "",
  confirm: "",
});

const register = () => {
  const data = JSON.parse(JSON.stringify(user.value));
  console.log("Registered: ", data);
};
</script>
