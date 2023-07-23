# 31. Learn Vue JS Form Handling Basic Input Field & Text Area (part 31)

- ## myForm.vue

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
              <select class="form-control selectpicker" data-live-search="true">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="card">
        <div class="card-header">
          <h3 class="text-center">Submit info</h3>
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
            <p class="lead"><span class="fw-bold">Email: </span> lorem</p>
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
    }
  }
}
</script>

<style></style>

```
