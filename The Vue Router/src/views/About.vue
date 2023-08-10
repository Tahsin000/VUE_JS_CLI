<template lang="">
  <div class="body">
    <div class="header">
      <h1 class="header_text">About Us</h1>
    </div>

    <div class="container">
      <h2>Our Mission</h2>
      <p>
        At <span class="highlight">Your Company Name</span>, our mission is to
        provide innovative solutions in [your industry or field]. We are
        dedicated to [describe your mission and values] and [mention the impact
        you want to create]. With a focus on excellence and customer
        satisfaction, we aim to be a leader in the [industry] sector.
      </p>

      <h2>Our Team</h2>
      <p>
        Our team comprises of skilled professionals with expertise in [mention
        team roles and expertise]. Together, we work collaboratively to deliver
        [briefly mention your services/products] that exceed our clients'
        expectations. We value creativity, dedication, and continuous
        improvement to provide the best solutions.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>We have a track record of successful projects in [industry].</li>
        <li>
          Our team consists of experts who stay updated with the latest trends.
        </li>
        <li>We prioritize customer satisfaction and timely delivery.</li>
        <li>We offer personalized solutions tailored to your needs.</li>
      </ul>

      <p class="signature">
        Thank you for considering
        <span class="highlight">Your Company Name</span>. We're excited to
        partner with you and contribute to your success. For inquiries or to get
        started, reach out to us at [contact email or phone number].
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

p {
  line-height: 1.6;
  color: #555;
}

ul {
  list-style: disc;
  margin-left: 20px;
}

li {
  margin-bottom: 10px;
}

.signature {
  margin-top: 30px;
  font-style: italic;
  color: #888;
}
.header_text{
    color: #eee;
}
</style>
