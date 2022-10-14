<template>
  <div class="slider">
    <div class="static-slider">
      <div class="slides">
        <div class="special-offer-timer row align-items-center">
          <img
            src="@/assets/icon/171505_time_clock_icon.svg"
            alt="ساعت"
            title="ساعت"
            class="time-icon"
          />
          <span class="title">پیشنهاد شگفت انگیز</span>
          <span class="text-center time-value">{{ seconds }} </span>
          <span class="text-center time-value">: {{ minutes }} </span>
          <span class="text-center time-value">: {{ hours }} </span>
        </div>
        <div class="big-slide">
          <div
            class="big-image-container d-flex align-items-center justify-content-center"
          >
            <inner-image-zoom
              class="big-image"
              :src="productImages[0].image"
              :zoomScale="3"
              :height="400"
              alt="عکس"
              loading="lazy"
              id="staticBigImage"
            />
          </div>

          <div class="like-container">
            <img
              class="like-icon"
              src="@/assets/icon/1814076_approve_like_thumb_icon.svg"
              alt="لایک"
              loading="lazy"
              title="لایک"
            />
          </div>
        </div>
        <div class="small-slides">
          <div
            id="staticSmallImage"
            v-for="product in productImages.slice(0, 5)"
            :key="product.id"
            class="small-image-box"
            @click="activePopUpSlider"
          >
            <img
              class="small-image"
              :src="product.image"
              alt="عکس"
              title="عکس"
              loading="lazy"
              @click="activePopUpSlider"
            />
          </div>
          <div
            @click="activePopUpSlider"
            class="small-image-box last-small-image-box"
          >
            <img
              class="more-icon"
              src="@/assets/icon/211866_more_icon.svg"
              alt="بیشتر"
              title="بیشتر"
              loading="lazy"
            />
            <img
              class="small-image last-image"
              :src="productImages[6].image"
              alt="عکس"
              title="عکس"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <div @click="activePopUpSlider" ref="popUpSlider" class="pop-up-slider">
      <div ref="modalSlider" class="slider active-pop">
        <div class="header d-flex justify-content-between">
          <span class="info">تصاویر رسمی</span>
          <span class="close-btn" @click="activePopUpSlider">
            <img
              class="close-icon"
              loading="lazy"
              src="@/assets/icon/211651_close_round_icon.svg"
              alt="بستن"
              title="بستن"
            />
          </span>
        </div>
        <div class="slides">
          <div class="big-slides">
            <div ref="prevBtn" class="button-prev"></div>
            <div ref="nextBtn" class="button-next"></div>
            <div class="carousel">
              <div ref="carouselSlideContainer" class="slides-container">
                <div
                  class="big-image-container"
                  v-for="product in productImages"
                  :class="{ 'video-image-container': 'video' in product }"
                  :key="product.id"
                >
                  <video
                    v-if="'video' in product"
                    controls
                    autoplay
                    class="big-image product-video"
                  >
                    <source
                      src="@/assets/images/latestMobileFrame/mov_bbb.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <img
                    v-else
                    loading="lazy"
                    :src="product.image"
                    class="big-image"
                    ref="popBigImage"
                    alt="عکس"
                    title="عکس"
                    :id="product.id"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="small-slides">
            <h3 class="product-title">صندلی خودرو کودک پگ پرگو مدل</h3>
            <div class="slides">
              <div
                v-for="product in productImages"
                :key="product.id"
                class="small-image-box"
                :class="{ video_small_box: 'video' in product }"
                :index="product.id"
                id="smallImageBox"
              >
                <div v-if="'video' in product">
                  <img
                    loading="lazy"
                    class="play-icon"
                    src="@/assets/icon/2959742_broadcast_google_streaming_video_youtube_icon.svg"
                    alt="پخش"
                    title="پخش"
                  />
                  <video controls class="small-image">
                    <source
                      src="@/assets/images/latestMobileFrame/mov_bbb.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                <img
                  v-else
                  class="small-image"
                  :src="product.image"
                  alt="عکس"
                  title="عکس"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";

export default {
  components: {
    "inner-image-zoom": InnerImageZoom,
  },
  data: () => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }),
  computed: {
    productImages() {
      return this.$store.state.LatestMobileFrame.products;
    },

    //counter for especial offer
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
  },
  mounted() {
    const slidesContainer = this.$refs.carouselSlideContainer;
    const popBigImages = this.$refs.popBigImage;
    const nextBtn = this.$refs.nextBtn;
    const prevBtn = this.$refs.prevBtn;
    const staticSmallImages = document.querySelectorAll("#staticSmallImage");
    const smallImageBoxes = document.querySelectorAll("#smallImageBox");

    let index = 0;
    smallImageBoxes[0].classList.add("active-image");

    //add class to image zoomer
    document
      .querySelector("#staticBigImage")
      .childNodes[0].classList.add("image-zoomer-container");

    //stop slider modal  Propagation
    this.$refs.modalSlider.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    });

    nextBtn.addEventListener("click", () => {
      index++;
      slidesContainer.style.transform = `translateX(${
        popBigImages[0].clientWidth * index
      }px)`;

      if (index > popBigImages.length - 1) {
        index = 0;
        slidesContainer.style.transform = `translateX(0px)`;
      }

      //active small image
      smallImageBoxes.forEach((item) => {
        item.classList.remove("active-image");
        smallImageBoxes[index].classList.add("active-image");
      });
    });

    //change image to previous

    prevBtn.addEventListener("click", () => {
      index--;
      slidesContainer.style.transform = `translateX(${
        popBigImages[0].clientWidth * index
      }px)`;

      if (index < 0) {
        index = popBigImages.length - 1;
        slidesContainer.style.transform = `translateX(${
          popBigImages[0].clientWidth * index
        }px)`;
      }

      //active small image
      smallImageBoxes.forEach((item) => {
        item.classList.remove("active-image");
        smallImageBoxes[index].classList.add("active-image");
      });
    });

    //active pop slider and set active assets when will click on small slide on static slider

    staticSmallImages.forEach((item, i) => {
      item.addEventListener("click", () => {
        index = i;
        smallImageBoxes.forEach((item) => {
          item.classList.remove("active-image");
        });
        smallImageBoxes[index].classList.add("active-image");
        slidesContainer.style.transform = `translateX(${
          popBigImages[0].clientWidth * index
        }px)`;
      });
    });

    //change big slide image by click on small image

    smallImageBoxes.forEach((item, i) => {
      item.addEventListener("click", () => {
        index = i;
        smallImageBoxes.forEach((item) => {
          item.classList.remove("active-image");
        });
        item.classList.add("active-image");
        slidesContainer.style.transform = `translateX(${
          popBigImages[0].clientWidth * index
        }px)`;
      });
    });
    //run timer
    this.showRemaining();
  },
  methods: {
    activePopUpSlider() {
      this.$refs.popUpSlider.classList.toggle("active-pop-up");
      this.activeBodyOverflow();
    },
    formatNum: (num) => (num < 10 ? "0" + num : num),

    //count remaining time
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2022, 8, 20, 10, 10, 10);
        const distance = end.getTime() - now.getTime();

        //stop timer
        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        const remainingDays = Math.floor(distance / this._days);
        const remainingHour = Math.floor((distance % this._days) / this._hours);

        const remainingMinutes = Math.floor(
          (distance % this._hours) / this._minutes
        );
        const remainingSecond = Math.floor(
          (distance % this._minutes) / this._seconds
        );
        this.days = this.formatNum(remainingDays);
        this.hours = this.formatNum(remainingHour);
        this.minutes = this.formatNum(remainingMinutes);
        this.seconds = this.formatNum(remainingSecond);
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  height: 100%;
  .video_small_box {
    overflow: hidden;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      inset: 0px;
      background: #333;
      opacity: 0.6;
    }
    .play-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
      filter: brightness(0) saturate(100%) invert(97%) sepia(1%) saturate(0%)
        hue-rotate(174deg) brightness(87%) contrast(86%);
    }
  }
}
.static-slider {
  width: 100%;
  margin-bottom: 40px;
  cursor: pointer;
  .slides {
    width: 100%;
  }
  .big-image-container {
    width: 100%;
    height: 100%;
  }
  .special-offer-timer {
    padding-bottom: 21px;
    color: #e6123d;
    width: 98%;
    margin: 0 auto;
    border-bottom: 1px solid #e6123d;
    .time-icon {
      width: 20px;
      height: 20px;
      filter: brightness(0) saturate(100%) invert(17%) sepia(80%)
        saturate(5439%) hue-rotate(340deg) brightness(91%) contrast(98%);
    }
    .time-value {
      margin: 0 3px;
      font-weight: 600;
    }
    .title {
      margin-right: 10px;
      margin-left: 21px;
      font-weight: 700;
      font-size: 1rem;
    }
  }
  .big-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    margin-top: 21px;
    .like-container {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #8d8d8d;
      position: absolute;
      top: 15%;
      left: 0;
      @include flex-center;
      transition: all 0.2s ease-in-out;
      &:hover {
        background: #8d8d8d;
      }
      &:hover > .like-icon {
        filter: brightness(0) saturate(100%) invert(93%) sepia(100%)
          saturate(2%) hue-rotate(309deg) brightness(107%) contrast(100%);
      }
    }
    .like-icon {
      width: 30px;
      height: 30px;
      filter: brightness(0) saturate(100%) invert(61%) sepia(1%) saturate(210%)
        hue-rotate(314deg) brightness(92%) contrast(79%);
    }
    .big-image {
      width: 70%;
      height: 80%;
    }
  }
  .small-slides {
    margin-top: 21px;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;

    .small-image-box {
      border-radius: 8px;
      padding: 10px;
      width: 15%;
      height: 92px;
      border: 1px solid #e0e0e2;
    }
    .small-image {
      width: 100%;
      height: 95%;
    }
    .last-image {
      opacity: 0.05;
    }
    .last-small-image-box {
      position: relative;
      .more-icon {
        width: 30%;
        height: 30%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
//pop up slider

.pop-up-slider {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 4;
  display: none;
  .big-image-container {
    width: auto;
    height: auto;
  }
  .slider {
    height: 80vh;
    width: 1024px;
    background: #fff;
    z-index: 6;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    opacity: 0;
    overflow: auto;
    padding-bottom: 34px;
    .header {
      width: 96%;
      margin: 0 auto;
      height: 44px;
      margin-top: 21px;
      border-bottom: 1px solid #e0e0e2;
      .info {
        color: $font-red;
        height: 100%;
        width: 40%;
        text-align: center;
        position: relative;
        font-weight: bold;
        font-size: 1rem;
        &::after {
          position: absolute;
          bottom: 0;
          content: "";
          height: 5px;
          right: 0;
          width: 100%;
          border-radius: 21px;
          background: $red-hover;
        }
      }
      .close-btn {
        cursor: pointer;
        .close-icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  .slides {
    margin: 0 0;
    display: grid;
    grid-template-columns: 55% 45%;
  }
  .big-slides {
    width: 426px;
    height: 450px;
    position: relative;
    margin-right: 21px;
    margin-top: 34px;
    .button-next,
    .button-prev {
      z-index: 3;
      position: absolute;
      top: 50%;
      border-radius: 50%;
      background-color: #ffff;
      height: 45px;
      width: 45px;
      left: 0;
      cursor: pointer;
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.1s;
      &:active {
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
        transform: scale(0.9);
      }
    }
    .button-prev {
      right: 0;
    }
    .button-next::after {
      @include flex-center;
      content: "\003E";
      font-size: 1.125rem;
      font-weight: 500;
      color: #333;
      height: 100%;
    }

    .button-prev::after {
      @include flex-center;
      content: "\003C";
      font-size: 1.125rem;
      font-weight: 500;
      color: black;
      height: 100%;
      width: 100%;
    }
  }

  .slides-container {
    display: flex;
    height: 100%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  .big-image {
    width: 383px;
    height: 450px;
  }
  .carousel {
    position: relative;
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
  }

  .small-slides {
    margin-top: 40px;
    padding-left: 21px;

    .slides {
      height: auto;
      width: 100%;
      display: flex;
      column-gap: 10px;
      flex-wrap: wrap;
      row-gap: 10px;
    }

    .product-title {
      font-weight: bold;
      font-size: 1rem;
      margin-bottom: 30px;
    }

    .small-image-box {
      border-radius: 8px;
      padding: 10px;
      width: 17%;
      height: 80px;
      border: 1px solid #e0e0e2;
      cursor: pointer;
    }
    .small-image {
      width: 100%;
      height: 100%;
    }
  }
  .product-video {
    height: auto !important;
  }
  .video-image-container {
    display: flex;
    align-items: center;
  }
}
.pop-up-slider-bg {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 5;
  display: none;
}

.active-pop-up {
  display: block;
}

.active-pop {
  animation: activePop 0.3s ease-out forwards;
  animation-delay: 0.1s;
}
@keyframes activePop {
  from {
  }
  to {
    opacity: 1;
  }
}
.active-image {
  border: 1px solid #19bfd3 !important;
}

/** media query */

@include breakpoint(1250px) {
  .static-slider .big-slide {
    height: 500px;
  }
  .static-slider .small-slides .small-image-box {
    height: 80px;
  }
  .static-slider .big-slide .big-image {
    width: 70%;
    height: 80%;
  }
  .static-slider .big-slide .like-container {
    width: 45px;
    height: 45px;
  }
  .static-slider .big-slide .like-icon {
    width: 25px;
    height: 25px;
  }
}
@include breakpoint(1148px) {
  .static-slider .big-slide {
    height: 450px;
  }
  .static-slider .small-slides .small-image-box {
    height: 70px;
  }
  @include breakpoint(1090px) {
    .pop-up-slider .slider {
      width: 90vw;
    }
  }
  @include breakpoint(1080px) {
    .static-slider .big-slide {
      height: 400px;
    }
    .pop-up-slider .big-slides {
      height: 400px;
    }
    .pop-up-slider .carousel {
      height: 400px;
      width: 340px;
    }
    .pop-up-slider .big-image {
      width: 340px;
      height: 100%;
    }
    .pop-up-slider .small-slides .small-image-box {
      height: 70px;
    }
  }
  @include lg {
    .pop-up-slider .small-slides .small-image-box {
      width: 20%;
    }
    .pop-up-slider .big-slides {
      width: 350px;
      height: 350px;
    }
    .pop-up-slider .carousel {
      height: 350px;
      width: 300px;
    }
    .pop-up-slider .big-image {
      width: 300px;
      height: 100%;
    }
  }
  @include lg {
    .pop-up-slider .slider {
      width: 95vw;
    }
    .pop-up-slider .small-slides .small-image-box {
      width: 20%;
    }
    .pop-up-slider .big-slides {
      width: 350px;
      height: 350px;
    }
    .pop-up-slider .carousel {
      height: 350px;
      width: 300px;
    }
  }
  @include md {
    .pop-up-slider .slider {
      width: 100%;
      height: 100%;
    }
    .static-slider .big-slide .big-image {
      width: 80%;
      height: 90%;
    }
    .pop-up-slider {
      background-color: #fff;
    }
    .pop-up-slider .small-slides .small-image-box {
      width: 14%;
    }
    .pop-up-slider .small-slides {
      width: 95%;
      margin: 0 auto;
      padding: 0;
    }
    .pop-up-slider .slides {
      display: flex;
      flex-direction: column;
      row-gap: 40px;
    }
    .pop-up-slider .carousel {
      width: 298px;
    }
    .pop-up-slider .big-slides {
      align-self: center;
      margin-right: 0;
    }
    .pop-up-slider .small-slides .slides {
      flex-direction: row;
    }
    .pop-up-slider .small-slides .product-title {
      margin-right: 20px;
    }
    .pop-up-slider .small-slides .slides {
      justify-content: center;
    }
  }
  @include sm {
    .pop-up-slider .small-slides .small-image-box {
      width: 20%;
    }
    .pop-up-slider .big-slides {
      width: 95%;
      margin: 0 auto;
      margin-top: 55px;
    }
    .pop-up-slider .carousel,
    .pop-up-slider .slides-container {
      width: 250px;
    }
    .static-slider .small-slides .small-image-box {
      height: 62px;
      padding: 5px;
    }
    .pop-up-slider .big-image {
      width: 250px;
    }
    .static-slider .special-offer-timer .time-value,
    .static-slider .special-offer-timer .title {
      font-size: 0.875rem;
    }
  }
  @include breakpoint(575px) {
    .static-slider .big-slide {
      height: 350px;
    }
    .slider {
      padding-right: 0;
      padding-left: 0;
    }

    .static-slider .big-slide .like-container {
      left: 1%;
      top: 10%;
    }
  }
  .pop-up-slider .slider .header .info {
    font-size: 0.875rem;
  }
  .pop-up-slider .slider .header .info::after {
    height: 3px;
  }
  .pop-up-slider .slider .header .close-btn {
    padding-left: 8px;
  }
  .pop-up-slider .slider .header .close-btn .close-icon {
    height: 20px;
    height: 20px;
  }
}
</style>
