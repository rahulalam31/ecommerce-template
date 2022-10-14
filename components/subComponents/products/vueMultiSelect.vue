<template>
  <div class="brands-multi-select checkbox-select">
    <div id="dropdown" class="checkbox-select__dropdown">
      <div class="checkbox-select__search-wrapp">
        <img
          class="icon"
          src="@/assets/icon/969259_magnifier_search_seo_magnifying_zoom_icon.svg"
          alt="سرچ"
          title="سرچ"
        />
        <input type="text" :placeholder="searchTitle" v-model="search" />
      </div>
      <ul class="checkbox-select__filters-wrapp">
        <li v-for="filter in filteredList" :key="filter">
          <div class="checkbox-select__check-wrapp">
            <input
              :id="filter"
              class="conditions-check"
              v-model="checkedFilters"
              :value="filter"
              type="checkbox"
              name="mycheckboxes"
            />
            <label :for="filter">{{ filter }}</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["filters", "searchTitle"],

  data() {
    return {
      search: "",
      checkedFilters: [],
    };
  },
  methods: {
    clear() {
      this.checkedFilters = [];
    },
  },
  watch: {
    checkedFilters() {
      this.$emit("checkedFilters", this.checkedFilters);
    },
  },

  computed: {
    filteredList() {
      return this.filters.filter((item) => {
        return item.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped lang="scss">
.brands-multi-select {
  textarea,
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
  }
  .checkbox-select {
    position: relative;
    max-width: 440px;
    width: 100%;
    @media only screen and (max-width: 600px) {
      margin: 100px auto 0;
    }
    &__trigger {
      border-radius: 10px;
      background: #fff
        url("http://res.cloudinary.com/dnhvfgp9c/image/upload/v1521734636/bcg-pattern.png")
        repeat;
      position: relative;
      z-index: 1;
      box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.13);
      height: 86px;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0 25px;
      transition: all 0.4s ease;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      @media only screen and (max-width: 600px) {
        padding: 0 15px;
        height: 70px;
      }
      &.isActive {
        border-radius: 10px 10px 0 0;
        background: #f2f2f2
          url("http://res.cloudinary.com/dnhvfgp9c/image/upload/v1521734636/bcg-pattern.png")
          repeat;
        svg {
          transform: rotate(-180deg);
        }
      }
      &:hover {
        background: #f4f4f4
          url("http://res.cloudinary.com/dnhvfgp9c/image/upload/v1521734636/bcg-pattern.png")
          repeat;
      }
      svg {
        width: 28px;
        stroke: 4px;
        transition: all 0.4s ease;
        @media only screen and (max-width: 600px) {
          width: 22px;
        }
      }
    }
    &__title {
      font-size: 25px;
      flex: 1;
      padding-right: 25px;
      letter-spacing: 1px;
      @media only screen and (max-width: 600px) {
        font-size: 19px;
      }
    }
    &__dropdown {
      opacity: 1;
      visibility: visible;
      background: transparent;
      position: relative;
      overflow: hidden;
      padding-bottom: 8px;

      .simplebar-scrollbar {
        width: 3px;
        right: 1px;
      }
    }
    &__search-wrapp {
      padding: 10px 25px 5px;
      @media only screen and (max-width: 600px) {
        padding: 10px 15px 5px;
      }
      input {
        width: 100%;
        height: 40px;
        border: none;
        font-size: 0.875rem;
        background: transparent;
        margin-right: 8px;

        &:focus {
          outline: none;
        }
      }
      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: $third-color;
        opacity: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        line-height: 1.9rem;
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: #b8b8b8;
        opacity: 1;
      }
      :-ms-input-placeholder {
        /* IE 10+ */
        color: #b8b8b8;
        opacity: 1;
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: #b8b8b8;
        opacity: 1;
      }
    }
    &__col {
      display: flex;
      font-size: 12px;
      padding: 0 25px;
      justify-content: space-between;
      text-transform: uppercase;
      @media only screen and (max-width: 600px) {
        padding: 0 15px;
      }
    }
    &__select-all {
      label {
        cursor: pointer;
      }
      input {
        display: none;
      }
    }
    &__filters-wrapp {
      height: 157px;
      overflow-y: auto;
      width: 93%;
      margin: 0 auto;
      margin-top: 15px;
    }
    &__check-wrapp {
      position: relative;
      padding: 0 15px;
      margin-bottom: 10px;
      @media only screen and (max-width: 600px) {
        padding: 0 15px;
      }
      input[type="checkbox"] {
        display: none;
        & + label {
          position: relative;
          cursor: pointer;
          font-size: 16px;
          line-height: 22px;
          padding-right: 30px;
          display: inline-block;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          transition: padding 0.25s ease;
          &:after {
            border: solid 1px $forth-color;
            content: "";
            width: 22px;
            height: 22px;
            top: 0;
            right: 0;
            position: absolute;
          }
          &:before {
            width: 14px;
            height: 14px;
            content: "";
            position: absolute;
            top: 4px;
            right: 4px;
            background-color: rgb(26, 85, 196);
            opacity: 0;
            will-change: transform;
            transform: scale(0.5);
            transition: all 0.2s ease;
          }
          &:hover {
            padding-left: 32px;
          }
        }
        &:checked {
          & + label {
            &:before {
              opacity: 1;
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }
  @keyframes load {
    0% {
      left: -200px;
      width: 20%;
    }
    50% {
      width: 40%;
    }
    70% {
      width: 60%;
    }
    80% {
      left: 50%;
    }
    95% {
      left: 120%;
    }
    100% {
      left: 100%;
    }
  }
  .link {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px;
    z-index: 9999;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #fff;
    }
    .fa {
      font-size: 28px;
      margin-right: 8px;
      color: #fff;
    }
  }
  .checkbox-select__search-wrapp {
    position: relative;
    padding: 10px;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 8px;
    height: 50px;
    .icon {
      width: 25px;
      height: 25px;
    }
  }

  .checkbox-select__filters-wrapp::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  .checkbox-select__filters-wrapp::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  .checkbox-select__filters-wrapp::-webkit-scrollbar-thumb {
    border-radius: 20px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
    height: 50px;
  }
}

/** make dotted color for vue select colors */

.colors-multi-select {
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li::after {
    content: "";
    margin-left: 15px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: yellow;
  }
  li:nth-child(2)::after {
    background-color: green;
  }
  li:nth-child(3)::after {
    background-color: red;
  }
  li:nth-child(4)::after {
    background-color: blue;
  }
  li:nth-child(5)::after {
    background-color: purple;
  }
  li:nth-child(6)::after {
    background-color: pink;
  }
  li:nth-child(7)::after {
    background-color: black;
  }

  .checkbox-select__check-wrapp:nth-child(2) {
    display: none;
  }
}
.active-sub-menu ~ .checkbox-select {
  height: 0;
  overflow: hidden;
}

/** media query */
@include xl {
  .brands-multi-select .checkbox-select__search-wrapp input,
  .brands-multi-select
    .checkbox-select__check-wrapp
    input[type="checkbox"]
    + label {
    font-size: 0.875rem;
  }
  .brands-multi-select
    .checkbox-select__check-wrapp
    input[type="checkbox"]
    + label:after {
    width: 20px;
    height: 20px;
  }
  .brands-multi-select
    .checkbox-select__check-wrapp
    input[type="checkbox"]
    + label:before {
    width: 12px;
    height: 12px;
  }
  .colors-multi-select li::after {
    content: "";
    margin-left: 10px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: yellow;
  }
}
</style>
