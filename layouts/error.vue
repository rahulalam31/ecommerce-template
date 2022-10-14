<template>
  <div>
    <Header />

    <section class="error-page">
      <div class="container">
        <div class="content row">
          <div class="col-12 text-center">
            <div class="col-12 text-center">
              <h1 class="header">
                <span class="red-letter">4</span>
                <span class="red-letter">0</span>
                <span class="red-letter"> 4</span>
              </h1>
              <div class="four-zero-bg"></div>
            </div>
            <div class="content-box-404 text-center">
              <h3 class="text-center">به نظر میاد مشکلی پیش امده!</h3>
              <p class="text-center">این پیج در دسترس نیست</p>
              <a
                class="button btn btn-success text-center"
                title="بازگشت به صفحه اصلی"
                href="/"
                >بازگشت به صفحه اصلی</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import header from "@/components/Header.vue";
export default {
  components: {
    header,
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;

  width: 100%;
  margin-top: 0;
}
.error-page {
  text-align: center;
  height: auto;
  margin: 89px 0;
}
.container {
  height: 100%;
}
.content {
  width: 100%;
  .header {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: 13px;
    .red-letter {
      color: $font-red;
      font-size: 3.5rem !important;
    }
  }
}
.error-page a {
  text-decoration: none;
  color: red;
}
.content-box-404 .button {
  color: #fff !important;
  padding: 13px;
  border-radius: 21px;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
.four-zero-bg {
  height: 500px;
  width: 100%;
  background: url("@/assets/images/dribbble_1.gif");
  background-position: center;
  background-repeat: no-repeat;
}

.content-box-404 {
  h3 {
    margin: 21px 0 13px 0;
  }
  p {
    margin-bottom: 34px;
    color: $third-color;
    font-size: 1.125rem;
  }
  .button {
    color: #fff !important;
    padding: 13px;
    border-radius: 21px;
  }
}

@include xl {
  .four-zero-bg {
    height: 450px;
  }
}
@include lg {
  .four-zero-bg {
    height: 400px;
  }
}
@include md {
  .content .header .red-letter {
    font-size: 2.5rem !important;
  }
  .four-zero-bg {
    height: 400px;
  }
  h3 {
    font-size: 1.5rem;
  }
  .content-box-404 .button {
    font-size: 0.725rem;
  }
}
@include sm {
  .error-page {
    margin: 50px 0;
  }
  .four-zero-bg {
    height: 350px;
  }
  h3 {
    font-size: 1.125rem;
  }
  .content-box-404 p {
    font-size: 1rem;
  }
}
</style>
