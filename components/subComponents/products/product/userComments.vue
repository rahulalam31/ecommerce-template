<template>
  <div class="user-comments-section">
    <div class="user-comments-section-container row justify-content-center">
      <div class="user-rating-container col-xl-3 col-lg-3 col-md-4">
        <div class="user-rating">
          <div class="title align-items-center d-flex">
            <p class="rate-number">4.4</p>
            <p>از ۵</p>
          </div>
          <div class="stars-rating align-items-center d-flex">
            <div
              class="Stars"
              style="--rating: 4.4"
              aria-label="Rating of this product is 2.3 out of 5."
            ></div>

            <p>131 امتیاز داده اند</p>
          </div>
          <div class="comment-summery">
            <div class="product-comment-rating">
              <div class="comment-rating-detail">
                <span class="product-comment-rating-title">کیفیت ساخت</span>

                <div
                  class="comment-rating-bars d-flex justify-content-between align-items-center"
                >
                  <div class="comment-rating-bar-bg">
                    <div class="comment-rating-bar-value"></div>
                  </div>
                  <span>4</span>
                </div>
              </div>
              <div class="comment-rating-detail">
                <span class="product-comment-rating-title"
                  >ارزش خرید به نسبت قیمت
                </span>

                <div
                  class="comment-rating-bars d-flex justify-content-between align-items-center"
                >
                  <div class="comment-rating-bar-bg">
                    <div class="comment-rating-bar-value"></div>
                  </div>
                  <span>4</span>
                </div>
              </div>
              <div class="comment-rating-detail">
                <span class="product-comment-rating-title">نوآوری </span>

                <div
                  class="comment-rating-bars d-flex justify-content-between align-items-center"
                >
                  <div class="comment-rating-bar-bg">
                    <div class="comment-rating-bar-value"></div>
                  </div>
                  <span>4</span>
                </div>
              </div>
              <div class="comment-rating-detail">
                <span class="product-comment-rating-title"
                  >امکانات و قابلیت ها
                </span>

                <div
                  class="comment-rating-bars d-flex justify-content-between align-items-center"
                >
                  <div class="comment-rating-bar-bg">
                    <div class="comment-rating-bar-value"></div>
                  </div>
                  <span>4</span>
                </div>
              </div>
              <div class="comment-rating-detail">
                <span class="product-comment-rating-title">سهولت استفاده </span>

                <div
                  class="comment-rating-bars d-flex justify-content-between align-items-center"
                >
                  <div class="comment-rating-bar-bg">
                    <div class="comment-rating-bar-value"></div>
                  </div>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
          <span
            @click="$refs.commentModal.activePopUpSlider()"
            class="add-comment-button"
            href="#"
            title="ثبت دیدگاه"
            >ثبت دیدگاه
          </span>
        </div>
      </div>
      <div class="user-comments col-xl-8 col-lg-8 col-md-7">
        <div
          v-for="index in 10"
          :key="index"
          class="comment d-flex align-item-start"
        >
          <span class="rate">4</span>
          <div class="comment-body">
            <div class="comment-header d-flex align-items-center">
              <span class="date">۱۴ فروردین ۱۴۰۱ </span>
              <span class="author">مهرنوش خردمند</span>
            </div>
            <p class="comment-text">طراحی و ظاهر زیبا، قالب کفش نسبتا کوچک</p>
          </div>
        </div>
      </div>
    </div>
    <CommentModal ref="commentModal" />
  </div>
</template>

<script>
import CommentModal from "./commentModal.vue";
export default {
  components: {
    CommentModal,
  },
  methods: {},
};
</script>

<style lang="scss">
.user-comments-section {
  max-width: 2100px;
  margin-top: 89px;
}
.user-comments-section-container {
  max-width: 2100px;
  margin: 0 auto;
  column-gap: 21px;
}
.user-rating-container {
  width: 100%;
  padding: 0;
}
.user-rating {
  position: sticky;
  top: 190px;

  .title {
    column-gap: 3px;
    .rate-number {
      font-size: 2.5rem;
      line-height: 2.1rem;
      font-weight: 500;
    }
  }
  .stars-rating {
    margin-top: 21px;

    .Stars {
      --percent: calc(var(--rating) / 5 * 100%);
      display: inline-block;
      font-size: 30px;
      font-family: Times; // make sure ★ appears correctly
      line-height: 1;

      &::before {
        content: "★★★★★";

        letter-spacing: 3px;
        background: linear-gradient(
          to left,

          #fc0 var(--percent),
          #fff var(--percent)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      margin-right: 8px;
      margin-bottom: 0;
      font-size: 0.725rem;
      color: $forth-color;
    }
  }
  .comment-summery {
    margin-top: 34px;
    .comment-rating-detail {
      margin-bottom: 13px;
    }
    .product-comment-rating-title {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 2.17;
      color: $secondary-color;
    }
    .comment-rating-bars {
      max-width: 250px;
      height: auto;
    }
    .comment-rating-bar-bg {
      width: 90%;
      background: #f0f0f1;
      height: 10px;
      border-radius: 20px;
    }
    .comment-rating-bar-value {
      background: #19bfd3;
      width: 80%;
      height: 100%;
      border-radius: 20px;
    }
  }
  .add-comment-button {
    border: 1px solid $red-hover;
    font-size: 0.725rem;
    display: block;
    width: 100%;
    padding: 13px 0;
    text-align: center;
    cursor: pointer;
    border-radius: 13px;
    color: $red-hover !important;
    transition: all 0.2s ease-in-out;
    margin-top: 34px;
    &:hover {
      border: none;
      background: #222;
      color: #fff !important;
    }
  }
}
.user-comments {
  .comment {
    padding: 0 0 21px 0;
    border-bottom: 1px solid #e0e0e2;
    margin-bottom: 21px;
    .rate {
      background: #16d39a;
      font-size: 14px;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: normal;
      line-height: normal;
      color: #fff;
      width: 40px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 24px;
      border-radius: 2px;
    }
    .comment-header {
      font-size: 0.725rem;
      color: $forth-color;
      .date {
        margin-left: 8px;
        &::after {
          content: "\2022";
          margin-right: 5px;
          border-radius: 50%;
        }
      }
      .author {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        @include md {
          width: 40%;
        }
      }
    }
    .comment-text {
      font-size: 0.875rem;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 24px;
      color: #262626;
      margin-top: 21px;
    }
  }
}

/** media query **/
@include lg {
  .user-rating .title .rate-number {
    font-size: 1.5rem;
  }
  .user-rating .title p {
    font-size: 0.825rem;
    margin-bottom: 0;
  }
}
@include breakpoint(767px) {
  .user-comments-section {
    margin-top: 55px;
  }
  .user-rating {
    margin-bottom: 55px;
  }
}
</style>
