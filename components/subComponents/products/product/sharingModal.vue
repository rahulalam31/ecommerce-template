<template>
  <div @click="activePopUpSlider" ref="sharingModal" class="sharing-modal">
    <div ref="sharingModalContainer" class="modal-container">
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
      <div class="body">
        <div class="sharing-box">
          <p class="sharing-title">
            این کالا را با دوستان خود به اشتراک بگذارید
          </p>
          <button
            class="sharing-button d-flex align-items-center justify-content-center"
          >
            <img
              loading="lazy"
              class="icon"
              src="@/assets/icon/9054333_bx_copy_icon.svg"
              alt="کپی کردن"
              title="کپی کردن"
            />
            <span> کپی کردن لینک</span>
          </button>
        </div>
        <div class="social-medias">
          <a href="#" class="social-media whats-up" title="واتس اپ">
            <img
              loading="lazy"
              class="icon"
              src="@/assets/icon/3225179_app_logo_media_popular_social_icon.svg"
              alt="واتس اپ"
              title="واتس اپ"
            />
            <span class="name">واتس اپ</span>
          </a>
          <a href="#" class="social-media twitter" title="واتس اپ">
            <img
              loading="lazy"
              class="icon"
              src="@/assets/icon/3225183_app_logo_media_popular_social_icon.svg"
              alt="واتس اپ"
              title="واتس اپ"
            />
            <span class="name">تویتر</span>
          </a>
          <a href="#" class="social-media face-book" title="تویتر">
            <img
              loading="lazy"
              class="icon"
              src="@/assets/icon/2613268_friends_peoples_messenger_chat_social media_icon.svg"
              alt="فیس بوک"
              title="فیس بوک"
            />
            <span class="name">فیس بوک</span>
          </a>
        </div>
        <div class="discount-box row">
          <div class="content col-7">
            <p class="header">کد تخفیف شما</p>
            <p class="info">
              کد را برای دوستان خود بفرستید و پس از<br />اولین خرید آنها، کد
              تخفیف و امتیاز بگیرید!
            </p>
            <button class="discount-btn">دریافت کد تخفیف</button>
          </div>
          <img
            class="col-5"
            src="@/assets/icon/share-modal.svg"
            alt="واتس"
            loading="lazy"
            title="فیس بوک"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.sharingModalContainer.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    });
  },
  methods: {
    activePopUpSlider() {
      this.$refs.sharingModal.classList.toggle("active-modal");
      this.activeBodyOverflow();
    },
  },
};
</script>

<style scoped lang="scss">
.sharing-modal {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 4;
  display: none;
  opacity: 0;
  .modal-container {
    max-width: 80vw;
    height: auto;
    width: 560px;
    padding: 0 21px;
    background: #fff;
    z-index: 6;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    overflow: auto;
    padding-bottom: 34px;
    .header {
      width: 100%;
      margin: 0 auto;
      height: 44px;
      margin-top: 21px;
      border-bottom: 1px solid #e0e0e2;
      .info {
        color: $font-red;
        height: 100%;

        text-align: center;
        position: relative;
        font-weight: bold;
        font-size: 0.875rem;
      }
      .close-btn {
        cursor: pointer;

        .close-icon {
          width: 24px;
          height: 24px;
        }
      }
    }
    .body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .sharing-title {
        margin: 21px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .sharing-box {
        .sharing-button {
          column-gap: 5px;
          border-radius: 8px;
          width: 100%;
          padding: 8px 0;
          border: 1px solid #000;
          background: #fff;
          transition: all 0.2s;
          &:hover {
            background: #232933;
            color: #fff !important;
          }
          &:hover > span {
            color: #fff;
          }
          &:hover > .icon {
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
              saturate(7395%) hue-rotate(51deg) brightness(120%) contrast(98%);
          }
          span {
            font-size: 0.875rem;
            font-weight: 700;
            line-height: 2.17;
            color: #424750;
          }
          .icon {
            max-height: 24px;
            max-width: 24px;
            filter: brightness(0) saturate(100%) invert(24%) sepia(13%)
              saturate(476%) hue-rotate(180deg) brightness(99%) contrast(89%);
          }
        }
      }
    }
    .social-medias {
      margin-top: 21px;
      display: grid;
      column-gap: 15px;
      row-gap: 15px;
      grid-template-columns: repeat(2, 1fr);
      .social-media {
        display: block;
        padding: 10px 0;
        border-radius: 8px;
        text-align: center;
        .icon {
          width: 25px;
          height: 25px;
        }
        .name {
          font-size: 0.725rem;
          color: #fff;
        }
      }
      .whats-up {
        background: #25d366 !important;
      }
      .twitter {
        background: #00acee !important;
      }
      .face-book {
        background: #3b5998 !important;
      }
    }
    .discount-btn {
      border: 1px solid $red-hover;
      background: transparent;
      padding: 8px 21px;
      border-radius: 8px;
      font-size: 0.725rem;
      transition: all 0.3s;
      &:hover {
        background: $red-hover;
        color: #fff;
      }
    }
  }
  .discount-box {
    margin-top: 21px;
    .content {
      .header,
      .info {
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 2.17;
        color: #232933;
        border: none;
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .info {
        font-size: 0.75rem;
      }
    }
    img {
      width: 100%;
      max-height: 165px;
    }
  }

  .slides-container {
    display: flex;
    height: 100%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
}
.active-modal {
  display: flex;
  animation: activeModal 0.2s ease-out forwards;
}
@keyframes activeModal {
  from {
  }
  to {
    opacity: 1;
  }
}
@keyframes activeModalMobile {
  from {
  }
  to {
    transform: translateY(0vh);
  }
}

/** media query */

@include breakpoint(567px) {
  .sharing-modal .modal-container {
    max-width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
  .sharing-modal .modal-container .body .sharing-title {
    font-size: 0.875rem;
  }
  .sharing-modal .modal-container .body .sharing-box .sharing-button span {
    font-size: 0.625rem;
  }
  .sharing-modal .modal-container .body .sharing-box .sharing-button .icon {
    max-height: 20px;
    max-width: 20px;
  }
}
</style>
