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
                <label class="text-gray-700" for="username">Number Of  Trays Collected</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.collected_eggs"
                />
              </div>

              <div>
                <label class="text-gray-700" for="emailAddress"
                  >Dead Birds </label
                >
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.dead_birds"
                />
              </div>

              <div>
                <label class="text-gray-700" for="password">Sold Trays</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.sold_eggs"
                />
              </div>

              <div>
                <label class="text-gray-700" for="passwordConfirmation"
                  >Cost Of Each</label
                >
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                  v-model="user.cost_each"
                />
              </div>
              <div>
                <label class="text-gray-700" for="passwordConfirmation"
                  >Damage Eggs</label
                >
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.demage_eggs"
                />
              </div>
              <div>
                <label class="text-gray-700" for="passwordConfirmation"
                  >Extra  Eggs</label
                >
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.extra_eggs"
                />
              </div>
              <div>
                <label class="text-gray-700" for="passwordConfirmation"
                  >Closed Trays </label
                >
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.closed_eggs"
                />
              </div>

              <div>
                <label class="text-gray-700" for="passwordConfirmation"
                  >Date </label
                >
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="date"
                  v-model="user.date"
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

<script  lang="ts">
import { defineComponent, ref,reactive } from "vue";


export default{
  setup(){
    const user = reactive({
  collected_eggs: "",
  dead_birds: "",
  sold_eggs: "",
  cost_each: "",
  demage_eggs:"",
  extra_eggs:"",
  date:"",
  closed_eggs:""
});

const register = () => {
  
  localStorage.setItem('entered',JSON.stringify(user))
 user. collected_eggs= "",
 user. dead_birds= "",
 user.sold_eggs ="",
  user.cost_each = "",
  user. demage_eggs ="",
  user.extra_eggs ="",
  user.date="",
  user.closed_eggs=""

};

return{
  user,register
}

  }



}
</script>
