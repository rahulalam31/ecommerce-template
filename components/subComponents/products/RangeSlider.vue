<template>
  <div class="range-slider">
    <div class="slider">
      <div class="slider-track"></div>
      <div class="range-input">
        <input
          type="range"
          :min="minVal"
          :max="maxVal"
          value="0"
          step="1"
          ref="sliderOne"
          @input="slideOne()"
        />
        <input
          type="range"
          :min="minVal"
          :max="maxVal"
          value="25000000"
          step="1"
          ref="sliderTwo"
          @input="slideTwo()"
        />
      </div>
    </div>
    <div class="range-values row justify-content-center">
      <div class="min-rage-value align-items-center d-flex flex-column col-6">
        <span class="title">از</span>
        <span class="value">
          {{ this.numberWithCommas(this.selectedRange.selectedMin) }}
        </span>
        <span class="title">تومان</span>
      </div>
      <div class="max-rage-value d-flex align-items-center flex-column col-6">
        <span class="title">تا</span>
        <span class="value">
          {{ this.numberWithCommas(this.selectedRange.selectedMax) }}
        </span>
        <span class="title">تومان</span>
      </div>
      <button @click="setPriceRange" class="filter-button btn">
        <img
          src="@/assets/icon/4200782_filter_funnel_processing_icon.svg"
          alt="فیلتر"
          loading="lazy"
          title="فیلتر"
        />
        <span>اعمال محدوه قیمت</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    minVal: Number,
    maxVal: Number,
    priceGap: Number,
  },
  data() {
    return {
      minValue: this.minVal,
      maxValue: this.maxVal,
      selectedRange: {
        selectedMin: this.minVal,
        selectedMax: this.maxVal,
      },
    };
  },

  mounted() {
    this.fillColor();
  },
  methods: {
    //separating every three number with comma
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    slideOne() {
      if (
        parseInt(this.$refs.sliderTwo.value) -
          parseInt(this.$refs.sliderOne.value) <=
        this.priceGap
      ) {
        this.$refs.sliderOne.value =
          parseInt(this.$refs.sliderTwo.value) - this.priceGap;
      }
      this.fillColor();
    },

    slideTwo() {
      if (
        parseInt(this.$refs.sliderTwo.value) -
          parseInt(this.$refs.sliderOne.value) <=
        this.priceGap
      ) {
        this.$refs.sliderTwo.value =
          parseInt(this.$refs.sliderOne.value) + this.priceGap;
      }
      this.fillColor();
    },

    //change slider range
    fillColor() {
      this.selectedRange.selectedMin = this.$refs.sliderOne.value;
      this.selectedRange.selectedMax = this.$refs.sliderTwo.value;
      let sliderTrack = document.querySelector(".slider-track");

      const percent1 = (this.selectedRange.selectedMin / this.maxValue) * 100;
      const percent2 = (this.selectedRange.selectedMax / this.maxValue) * 100;
      sliderTrack.style.background = `linear-gradient(to left, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    },

    setPriceRange() {
      this.$emit("setPriceRange", this.selectedRange);
    },
  },
};
</script>

<style scoped lang="scss">
.slider {
  margin-top: 40px;
  height: 5px;
  background: #ddd;
  border-radius: 5px;
  position: relative;
  width: 100%;
  @include xl {
    margin-top: 34px;
  }
}

.range-input {
  position: relative;
}
input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;
}
.slider-track {
  width: 100%;
  height: 5px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 5px;
}
input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  height: 5px;
}
input[type="range"]::-moz-range-track {
  -moz-appearance: none;
  height: 5px;
}
input[type="range"]::-ms-track {
  appearance: none;
  height: 5px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 1.4em;
  width: 1.4em;
  background-color: #3264fe;
  cursor: pointer;
  margin-top: -5px;
  pointer-events: auto;
  border-radius: 50%;
}
input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 1.4em;
  width: 1.4em;
  cursor: pointer;
  border-radius: 50%;
  background-color: #3264fe;
  pointer-events: auto;
}
input[type="range"]::-ms-thumb {
  appearance: none;
  height: 1.4em;
  width: 1.4em;
  cursor: pointer;
  border-radius: 50%;
  background-color: #3264fe;
  pointer-events: auto;
}
input[type="range"]:active::-webkit-slider-thumb {
  background-color: #ffffff;
  border: 2px solid #3264fe;
}
.range-values {
  margin-top: 34px;
  row-gap: 34px;
  width: 100%;
  margin: 34px auto 0 auto;

  .min-rage-value,
  .max-rage-value {
    padding-right: 0;
  }
}
.min-rage-value,
.max-rage-value {
  .value {
    font-weight: bold;
    margin: 8px;
    font-size: 1.125rem;
  }
  .title {
    color: $third-color;
  }
}
.filter-button {
  background: #37479e;
  color: #fff;
  padding: 14px 21px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  margin-bottom: 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #333;
  }
  img {
    width: 25px;
    height: 90%;
    filter: brightness(0) saturate(100%) invert(100%) sepia(5%) saturate(7434%)
      hue-rotate(164deg) brightness(109%) contrast(99%);
  }
}
@include xl {
  .range-values,
  .filter-button {
    font-size: 0.75rem;
  }
  .filter-button {
    padding: 10px 18px;
  }
  .min-rage-value .value,
  .max-rage-value .value {
    font-size: 0.875rem;
  }
}
@include breakpoint(1000px) {
  .min-rage-value .title,
  .min-rage-value .value {
    font-size: 1rem;
  }
  .max-rage-value .title,
  .max-rage-value .value {
    font-size: 1rem;
  }
}
</style>
