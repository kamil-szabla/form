<template>
  <div class="m-8 sm:mx-auto sm:w-full sm:max-w-md drop-shadow-2xl">
    <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form class="mb-0 space-y-6" @submit.prevent="onSubmit">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <div class="mt-1">
            <input v-model="form.name" id="name" name="name" type="text" autocomplete="name" required class="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>
        <div>
          <label for="company" class="block text-sm font-medium text-gray-700">Comapny</label>
          <div class="mt-1">
            <input v-model="form.company" id="company" name="company" type="text" required class="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <div class="mt-1">
            <input v-model="form.email" type="email" required autocomplete="email" class="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>

        <div>
          <label for="enquiry" class="block text-sm font-medium text-gray-700">Enquiry details</label>
          <div class="mt-1">
            <textarea v-model="form.enquiry" id="enquiry" name="enquiry" type="text" required rows="6" class="form-textarea w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>

        <div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </div>
      </form>
    </div>

    <div class="hidden mt-2 bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert" id="alert">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
      </svg>
      Your enquiry has been successfully submitted!
    </div>
  </div>

</template>

<script>
import { projectFirestore } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { reactive } from "vue";


export default {
  setup() {
    const form = reactive({ 
      name: '', 
      company: '', 
      email: '', 
      enquiry: ''
    })



    const onSubmit = (e) => {
      // add form details to firebase cloud
      addDoc(collection(projectFirestore, 'data'), form)

      document.getElementById('alert').classList.remove('hidden')
      e.target.reset()
      
      setTimeout(function(){document.getElementById('alert').classList.add('hidden')}, 3000)
    }
    
    
    return { 
      form,
      onSubmit
    }
  }
}
</script>


<style scoped>

</style>
 