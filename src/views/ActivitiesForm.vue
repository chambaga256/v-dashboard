<template>
  <div>
    <h3 class="text-3xl font-semibold text-gray-700">Activities</h3>

  

    <div class="mt-8">


      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            Account settings
          </h2>

          <form @submit.prevent="register">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700" for="username">Brought In(e.g feeds)</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                  v-model="user.brought_in"
                />
              </div>

              <div>
                <label class="text-gray-700" for="emailAddress"
                  >Quantity </label
                >
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.quantity"
                />
              </div>

              <div>
                <label class="text-gray-700" for="password">Cost(option)Shs:</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="number"
                  v-model="user.cost"
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
import { defineComponent, reactive, ref } from "vue";

export default{
  setup(){
    const user = reactive({
  brought_in: "",
  quantity: "",
  cost: "",
  
  date:"",
});


const register = () => {
localStorage.setItem('actvity', JSON.stringify(user))
 user.brought_in=""
 user.cost=""
 user.date=""
 user.quantity=""

}
return{
  user,register
}
  }
}


</script>
