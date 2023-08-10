<template lang="">
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="email" required v-model="email" />
    <label>Password</label>
    <input type="password" required v-model="password" />
    <div class="error" v-if="passwordError">{{passwordError}}</div>

    <label>Role:</label>
    <select name="" id="" v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill">
    <div v-for="(item, index) in skills" :key="index" class="pill">
        <span @click="deleteSkill(item)">{{item}}</span>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label> Accept terms and condition</label>
    </div>

    <div class="submit">
        <button>Create an Account</button>
    </div>


  </form>

  <!-- ///////////  This is from testing purposes only //////////// -->
  <!-- <p>{{ email }} || {{ password }} || {{ role }} || {{ skills }} </p> -->
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const role = ref("designer");
    const terms = ref(false);
    const tempSkill = ref("");
    const skills = ref([]);
    const passwordError = ref('');
    const addSkill = (e) =>{
        if (e.key === ',' && tempSkill.value){
            const commaSeparator = tempSkill.value.split(',');
            if (!skills.value.includes(commaSeparator[0])){
                // console.dir(commaSeparator[0]);
                skills.value.push(commaSeparator[0]);
            }
            tempSkill.value = '';
        }
    }
    const deleteSkill = (skill) =>{
        console.log(skills.value);
        skills.value = skills.value.filter((item) => item !== skill)
    }
    const handleSubmit = () =>{
        passwordError.value = password.value.length > 7 ? '' : 'password must be at least 8 chars long';
        if (!passwordError.value){
            console.log({email:email, password:password, role:role, terms:terms,skills:skills});
        }
    }
    return {
      email,
      password,
      role,
      terms,
      tempSkill,
      skills,
      addSkill,
      deleteSkill,
      handleSubmit,
      passwordError,
    };
  },
};
</script>
<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  padding: 40px;
  text-align: left;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background-color: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button{
    background-color: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
}
.submit{
    text-align: center;
}
.error{
    color: red;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>
