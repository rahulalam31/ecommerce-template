<template>
  <div class="count-down-container">
    <div
      class="content d-flex flex-column align-content-center justify-content-center"
    >
      <h3 class="header">پیشنهاد ویژه</h3>
      <div class="product d-flex align-items-center">
        <img
          src="@/assets/images/specialOffer/Group270.webp"
          alt=""
          class="product-image"
          loading="lazy"
        />
        <div class="body d-flex flex-column align-content-between">
          <nuxt-link
            to="/product/2"
            class="header-link"
            title="لورم اسپم"
            alt="لورم اسپم"
          >
            <h3 class="title">عنوان محصول</h3>
          </nuxt-link>

          <div class="prices m-0 d-flex align-items-center">
            <span class="price">۲۰۰۰۰ </span>
            <div class="last-price">۲۰۰۰۰</div>
            <span class="label">تومان</span>
          </div>
          <a
            href="#"
            alt="افزودن به سبد خرید"
            title="افزودن به سبد خرید"
            class="button"
          >
            <img
              class="icon"
              src="@/assets/icon/cart.svg"
              alt="ایکون"
              title="آیکون"
              loading="lazy"
            />
            <span class="title">اضافه به سبد خرید</span>
          </a>
        </div>
      </div>
      <div class="counter d-flex align-items-center">
        <div
          class="day time d-flex flex-column align-content-center justify-content-center"
        >
          <span class="text-center time-value">{{ days }}</span>
          <span class="time-title text-center">روز</span>
        </div>
        <div
          class="hours time d-flex flex-column align-content-center justify-content-center"
        >
          <span class="text-center time-value">{{ hours }}</span>
          <span class="time-title text-center">ساعت</span>
        </div>
        <div
          class="minutes time d-flex flex-column align-content-center justify-content-center"
        >
          <span class="text-center time-value">{{ minutes }}</span>
          <span class="time-title text-center">دقیقه</span>
        </div>
        <div
          class="second time d-flex flex-column align-content-center justify-content-center"
        >
          <span class="text-center time-value">{{ seconds }}</span>
          <span class="time-title text-center">ثانیه</span>
        </div>
      </div>
    </div>
    <img
      src="@/assets/images/specialOffer/Path246.png"
      alt="بک-گراند"
      title="بک-گراند"
      class="slide-bg"
      loading="lazy"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }),
  computed: {
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
    //run timer
    this.showRemaining();
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),

    //count remaining time
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2024, 8, 20, 10, 10, 10);
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

<style scoped lang="scss">
.count-down-container {
  width: 100%;
  padding-right: 0;
  position: relative;
  padding-left: 0;

  .content {
    height: 100%;
    position: absolute;
    right: 13%;
    row-gap: 21px;
    .header-link {
      transition: all 0.2s;
      &:hover {
        color: $white-color !important;
      }
    }
    .header {
      color: $white-color;
      font-size: 2rem;
      margin-right: 67px;
      font-weight: bold;
    }
  }
  .product {
    column-gap: 21px;
    .product-image {
      height: 300px;
      width: 290px;
    }
    .button {
      margin-top: 13px;
      padding: 13px 30px;
      border-radius: 34px;
      transition: all 0.3s;
      border: 1px solid #fff;
      &:hover {
        box-shadow: inset 12.5em 0 0 0 #fff;
      }
      &:hover > .title {
        color: #333;
      }
      &:hover > .icon {
        filter: brightness(0) saturate(100%) invert(13%) sepia(19%)
          saturate(13%) hue-rotate(349deg) brightness(98%) contrast(81%);
      }
      .title {
        color: $white-color;
        font-size: 0.75rem;
      }
      .icon {
        max-width: 18px;
        max-height: 18px;
        z-index: 1;
        filter: brightness(0) saturate(100%) invert(99%) sepia(0%)
          saturate(7486%) hue-rotate(135deg) brightness(96%) contrast(111%);
      }
    }
  }

  .slide-bg {
    height: 550px;
    width: 100%;
  }
  .counter {
    column-gap: 13px;
    margin-right: 21px;
    .time {
      width: 55px;
      height: 55px;
      border-radius: 13px;
      background: #fff;
      text-align: center;
    }
    .time-value {
      font-size: 1rem;
      color: #ff3939;
    }
    .time-title {
      font-size: 0.625rem;
    }
  }
  .body {
    row-gap: 13px;

    .title {
      font-size: 1.8rem;
    }

    .prices {
      font-size: 1.57rem;
      column-gap: 5px;
    }
    .last-price {
      color: $white-color;
      font-size: 1.125rem;
      text-decoration: line-through;
    }
    .label {
      color: $white-color;
      font-size: 1rem;
      text-decoration: line-through;
    }
  }
}

/** media query */
@include breakpoint(1200px) {
  .count-down-container .body .title {
    font-size: 1.57rem;
  }
  .count-down-container .product .product-image {
    height: 270px;
    width: 251px;
  }
  .count-down-container .content {
    row-gap: 29px;
  }
  .count-down-container .content .header {
    margin-right: 45px;
  }
  .count-down-container .body .prices {
    font-size: 1.275rem;
  }
  .count-down-container .body .last-price {
    font-size: 1rem;
  }
  .count-down-container .body .label {
    font-size: 0.875rem;
  }
  .count-down-container .product .button {
    padding: 13px 21px;
  }
  .count-down-container .product .button .title {
    font-size: 0.625rem;
  }
  .count-down-container .product .button .icon {
    max-width: 13px;
    max-height: 13px;
  }
}
@include breakpoint(1040px) {
  .count-down-container .slide-bg {
    height: 500px;
    width: 100%;
  }
  .count-down-container .body .title {
    font-size: 1.4rem;
  }
  .count-down-container .product .product-image {
    height: 230px;
    width: 200px;
  }
  .count-down-container .content {
    row-gap: 29px;
  }
  .count-down-container .content .header {
    margin-right: 45px;
  }
  .count-down-container .body .prices {
    font-size: 1.125rem;
  }
  .count-down-container .body .last-price {
    font-size: 0.875rem;
  }
  .count-down-container .body .label {
    font-size: 0.75rem;
  }
  .count-down-container .product .button {
    padding: 10px 15px;
  }
  .count-down-container .product .button .title {
    font-size: 0.625rem;
  }
  .count-down-container .product .button .icon {
    max-width: 13px;
    max-height: 13px;
  }
}
@include breakpoint(860px) {
  .count-down-container .slide-bg {
    height: 480px;
    width: 100%;
  }

  .count-down-container .product .product-image {
    height: 200px;
    width: 170px;
  }

  .count-down-container .content .header {
    margin-right: 18px;
  }
}
@include breakpoint(767px) {
  .count-down-container .content .header {
    margin-right: 40px;
    font-size: 1.75rem;
  }
  .count-down-container .product .product-image {
    height: 224px;
    width: 240px;
  }
}
@include sm {
  .count-down-container .slide-bg {
    height: 420px;
  }
  .count-down-container .content {
    right: 8%;
  }
  .count-down-container .content .header {
    margin-right: 8px;
    font-size: 1.75rem;
  }
  .count-down-container .product .product-image {
    height: 170px;
    width: 160px;
  }
  .count-down-container .counter .time {
    width: 49px;
    height: 49px;
  }
  .count-down-container .product .button {
    padding: 8px 15px;
  }
  .count-down-container .counter {
    margin-top: 8px;
    margin-right: 0px;
  }
  .count-down-container .body .title {
    font-size: 1.2rem;
  }
  .count-down-container .body .prices {
    font-size: 1rem;
  }
}
</style>
