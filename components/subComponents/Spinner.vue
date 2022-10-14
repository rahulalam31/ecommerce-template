<template>
  <div class="loader wrapper">
    <div class="content">
      <p class="brand-name">دیجی کالا</p>
      <div class="spinner">
        <div class="spinner-1">
          <div class="spinner-2">
            <div class="spinner-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$spinner-color: #292828;
$spinner-size: 1;
$faded-opacity: 0.35;
$spinner-delay: 0.18;
$spinner-scale: 0.87;
$animation-duration: 1.1s;
$animation-rest: 25;

.wrapper {
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1111;
  display: none;
  .content {
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #fefefe;
    border-radius: 21px;
    .brand-name {
      font-size: 1.25rem;
      font-weight: 600;
      color: #ff6666;
    }
  }
}

.spinner {
  transform: translateX(33%);
  & * {
    display: inline-block;
    width: #{$spinner-size}rem;
    height: #{$spinner-size}rem;
    background-color: $spinner-color;
    border-radius: #{$spinner-size}rem;
    margin: 0 3rem;
  }

  @for $i from 1 through 3 {
    & .spinner-#{$i} {
      animation: fade
        $animation-duration
        ease-in-out
        #{$i *
        $spinner-delay}s
        infinite
        both;
    }
  }
  .spinner-1 {
    margin-right: 0;
  }
}

@keyframes fade {
  0% {
    opacity: $faded-opacity;
    transform: scale($spinner-scale);
  }
  33% {
    opacity: 1;
    transform: scale(1);
  }
  66% {
    opacity: $faded-opacity;
    transform: scale($spinner-scale);
  }
  100% {
    opacity: $faded-opacity;
    transform: scale($spinner-scale);
  }
}
@include sm {
  .wrapper .content {
    width: 90%;
  }
  .wrapper .content .brand-name {
    font-size: 1.125rem;
  }
}
</style>
