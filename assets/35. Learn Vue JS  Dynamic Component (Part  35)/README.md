# 35. Learn Vue JS Dynamic Component (Part 35)

- ## App.vue

```vue
<template>
  <div class="container">
    <button
      @click="componentToRender = 'compHome'"
      class="btn btn-outline-primary"
    >
      Home
    </button>
    <button
      @click="componentToRender = 'compContact'"
      class="btn btn-outline-primary"
    >
      Contact
    </button>
    <button
      @click="componentToRender = 'compAbout'"
      class="btn btn-outline-primary"
    >
      About
    </button>
    <button
      @click="componentToRender = 'myForm'"
      class="btn btn-outline-primary"
    >
      Myform
    </button>
    <Keep-alive>
      <component :is="componentToRender"></component>
    </Keep-alive>
  </div>
</template>
<script>
import compHome from "./Components/DynamicComponents/MyHome";
import compAbout from "./Components/DynamicComponents/myAbout";
import compContact from "./Components/DynamicComponents/myContact";
import myForm from "./Components/myForm/MyForm";
export default {
  data() {
    return {
      componentToRender: "compContact",
    };
  },
  components: {
    compHome,
    compAbout,
    compContact,
    myForm,
  },
};
</script>
```

- ## MyForm.vue

```vue
<template>
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-12">
      <div class="card">
        <div class="card-header">
          <h3 class="text-center">Login</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="username">Email</label>
              <input v-model="userData.email" type="email" class="form-control" id="username" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input v-model="userData.password" type="password" class="form-control" id="password" placeholder="Enter password">
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input v-model="userData.age" type="text" class="form-control" id="age" placeholder="Enter age">
            </div>
            <div class="form-group">
              <label for="username">Message</label>
              <textarea v-model="message"  class="form-control" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <div class="form-check d-flex">
              <div>
                <input v-model="sendMail" class="form-check-input" type="checkbox" id="checkbox1" value="Send Mail">
                <label  class="form-check-label" for="checkbox1">
                  Send Mail
                </label>
              </div >
              <div class="ms-5">
                <input v-model="sendMail" class="form-check-input" type="checkbox" id="checkbox2" value="Send Infomail">
                <label class="form-check-label" for="checkbox2">
                  Send Infomail
                </label>
              </div>
            </div>
            <div class="form-check form-check-inline d-flex">
              <div>
                <input v-model="gender" class="form-check-input" type="radio" name="radioOptions" id="radio3" value="Male">
                <div>
                  <label class="form-check-label" for="radio3">
                    Male
                  </label>
                </div>
              </div>
              <div class="ms-5">
                <input v-model="gender" class="form-check-input" type="radio" name="radioOptions" id="radio3" value="Female">
                <div>
                  <label class="form-check-label" for="radio3">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="username">Priority</label>
              <select class="form-control selectpicker"  v-model="selectedPriority">
                <option v-for="priority in priorities" :key="priority">{{ priority }}</option>
              </select>
            </div>
            <button @click.prevent="submitted" type="submit" class="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div v-if="isSubmitted" class="col-lg-6 col-md-12">
      <div class="card">
        <div class="card-header">
          <h3 class="text-center">User info</h3>
        </div>
        <div class="card-body">
          <div class="card-title">
            <p class="lead"><span class="fw-bold">Email: </span> {{ userData.email }}</p>
            <hr/>
          </div>
          <div class="card-title">
            <p class="lead"><span class="fw-bold">Password: </span> {{ userData.password }}</p>
            <hr/>
          </div>
          <div class="card-title">
            <p class="lead"><span class="fw-bold">Age: </span> {{ userData.age }}</p>
            <hr/>
          </div>
          <div class="card-title">
            <!-- white-space:pre-line -->
            <p class="lead "><span class="fw-bold">Message: </span> {{ message }}</p>
            <hr/>
          </div>
          <div class="card-title">
            <p class="lead"><span class="fw-bold">Email: </span>
              <ul class="list-unstyled">
                <li v-for="mail in sendMail" :key="mail">{{ mail }}</li>
              </ul>
            </p>
            <hr/>
          </div>
          <div class="card-title">
            <p class="lead"><span class="fw-bold">Gender: </span> {{ gender }}</p>
            <hr/>
          </div>
          <div class="card-title">
            <p class="lead"><span class="fw-bold">Priority: </span> {{ selectedPriority }}</p>
            <hr/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      userData:{
        email:'',
        password:'',
        age:''
      },
      message:'',
      sendMail:[],
      gender:'Male',
      selectedPriority:'Medium',
      priorities:['High', 'Medium', 'Low'],
      isSubmitted:false,
    }
  },
  methods: {
      submitted(){
        this.isSubmitted = true;
      }
    },
    destroyed(){
      console.log('Delete ');
    },
    activated(){
      console.log("activated");
    },
    deactivated(){
      console.log("activated");
    }
}
</script>

<style></style>

```

- ## myHome.vue

```vue
<template>
  <div>This is Home Page</div>
</template>
```

- ## myContact.vue

```vue
<template>
  <div>This is Contact Page</div>
</template>
```

- ## myAbout.vue

```vue
<template>
  <div>This is About Page</div>
</template>
```
