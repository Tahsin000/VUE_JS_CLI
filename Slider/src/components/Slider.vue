<template>
  <div class="__size_10 slider-main">
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      class="mySwiper2"
    >
      <swiper-slide 
        v-for="slider in sliderInfo" :key="slider.id">
            <img :src="slider.image" />
        </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="30"
      :slidesPerView="5"
      :freeMode="true"
      :watchSlidesProgress="true"
      class="mySwiper"
    >
    <swiper-slide 
        class="slider-size"
        v-for="slider in sliderInfo" :key="slider.id">
            <img class="_img_size" :src="slider.image" />
    </swiper-slide>
    
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//   import "./style.css";

// import Swiper core and required modules

import SwiperCore from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

export default {
    props:['sliderInfo'],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const sliderInfo = ref(props.sliderInfo);
    const thumbsSwiper = ref(null);
    // cons t
    const setThumbsSwiper = (data) => {
      thumbsSwiper.value = data;
    };
    const datachecker = () =>{
        console.log(sliderInfo.value)
    }
    return {
        datachecker,
      thumbsSwiper,
      sliderInfo,
      setThumbsSwiper,
    };
  },
};
</script>

<style>
.__size_10 {
  width: 700px;
  height: 700px;
}

/* Custom CSS to slightly reduce navigation buttons size */
.mySwiper2 .swiper-button-prev,
.mySwiper2 .swiper-button-next {
  width: 30px; /* Slightly reduce width */
  height: 30px; /* Slightly reduce height */
  opacity: 0.7; /* Adjust opacity for the buttons */
}

/* Optional: Change color when hovered */
.mySwiper2 .swiper-button-prev:hover,
.mySwiper2 .swiper-button-next:hover {
  opacity: 1;
}
._img_size {
  /* padding: 5px; */
}
.mySwiper {
  height: 100px !important;
  padding: 10px !important;
  position: absolute !important;
  bottom: 12% !important;
  transform: translate(0, -75%) !important;
}
.slider-size {
  border-radius: 10px !important;
  background-color: transparent !important;
}
.slider-main {
  position: relative;
}
</style>
