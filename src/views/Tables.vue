<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">Records</h3>


    <div class="mt-8">
      <h4 class="text-gray-600">Table with pagination</h4>

      <div class="mt-6">
       

        <div class="flex flex-col mt-3 sm:flex-row">
          
            </div>
          </div>

          <div class="relative block mt-2 sm:mt-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-500 fill-current"
              >
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                />
              </svg>
            </span>

            <input
              placeholder="Search"
              class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Activity Name
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                   
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Quantity
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      

                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{ activities.brought_in}}
 
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{activities.quantity}}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <span
                      :class="`relative inline-block px-3 py-1 font-semibold  leading-tight`"
                    >
                      <span
                        aria-hidden
                        :class="`absolute inset-0  opacity-50 rounded-full`"
                      ></span>
                      <span class="relative">{{activities.date}}</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between"
            >
              <span class="text-xs text-gray-900 xs:text-sm"
                >Showing 1 to 4 of 50 Entries</span
              >

              <div class="inline-flex mt-2 xs:mt-0">
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
                >
                  Prev
                </button>
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Trays Sold
                  </th>
                  <th
                    class="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Collected Trays
                  </th>
                  <th
                    class="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Damaged Eggs
                  </th>
                  <th
                    class="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                     extra eggs
                  </th>
                  <th
                    class="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="px-2 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      

                      <div class="ml-2">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{ records.sold_eggs}}
 
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-3 py-5 text-sm bg-white border-b border-gray-200"
                  > {{records.collected_eggs}}
                    
                  </td>
                  <td
                    class="px-3 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{records.demage_eggs}}
                    </p>
                  </td>
                  <td
                    class="px-3 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{records.extra_eggs}}
                    </p>
                  </td>
                  <td
                    class="px-3 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <span
                      :class="`relative inline-block px-3 py-1 font-semibold  leading-tight`"
                    >
                      <span
                        aria-hidden
                        :class="`absolute inset-0  opacity-50 rounded-full`"
                      ></span>
                      <span class="relative">{{records.date}}</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between"
            >
              <span class="text-xs text-gray-900 xs:text-sm"
                >Showing 1 to 4 of 50 Entries</span
              >

              <div class="inline-flex mt-2 xs:mt-0">
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
                >
                  Prev
                </button>
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    

</template>

<script >

 export default{
   setup(){

    const activity = localStorage.getItem('actvity')
    const activities = JSON.parse(activity) 

    const record = localStorage.getItem('entered')
    const records  = JSON.parse(record )
    return{
      activities, records

    }
   }
 }
</script>
