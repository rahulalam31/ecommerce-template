<template>
  <section class="new-letter d-flex align-items-center justify-content-center">
    <div class="container d-flex flex-column justify-content-between">
      <div class="header d-flex justify-content-between">
        <img
          class="icon"
          src="@/assets/icon/Layer508.svg"
          alt="نامه"
          title="نامه"
          lazy="loading"
        />
        <span class="title"
          >از تخفیف ها و جدیدترین های فروشگاه باخبر شوید
        </span>
      </div>
      <div ref="searchContainer" class="search">
        <form
          class="row column align-items-center search-container"
          action=""
          method="post"
          ref="newsLetterFrom"
        >
          <input
            class="search-input col-8"
            type="text"
            v-model.trim="input"
            name=""
            v-on:focus="changeBorderOfSearchBox"
            v-on:blur="changeBorderOfSearchBox"
            placeholder="جستجو کنید …"
          />
          <a
            @click="submitFrom"
            alt="ایکون"
            title="ایکون"
            class="search-btn btn-bg"
            href="#"
          >
            <img
              src="@/assets/icon/2526450.svg"
              class="icon"
              title="search"
              alt="search"
              lazy="loading"
            />
          </a>
        </form>
      </div>
      <ul class="error-container">
        <li v-if="inputError == 'empty'" class="input-error">
          فیلد ایمیل خالی است
        </li>
        <li v-if="inputError == 'invalidEmail'" class="input-error">
          ایمیل وارد شده نادرست معتبر نیست!
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      inputError: "",
    };
  },
  methods: {
    //change border of search box
    changeBorderOfSearchBox() {
      this.$refs.newsLetterFrom.classList.toggle("change-search-border");
    },

    //validate email input
    submitFrom() {
      //regex pattern for checking input filed
      var regexPattern = /\S+@\S+\.\S+/;

      if (this.input === "") {
        this.inputError = "empty";
      } else if (regexPattern.test(this.input) === false) {
        this.inputError = "invalidEmail";
      } else {
        this.$refs.newsLetterFrom.requestSubmit().prevent;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/scss/newsLetter.scss";
</style>
