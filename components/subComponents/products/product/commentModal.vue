<template>
  <div @click="activePopUpSlider" ref="sharingModal" class="sharing-modal">
    <div ref="sharingModalContainer" class="modal-container">
      <div class="header d-flex justify-content-between">
        <span class="info">افزدن کامنت</span>
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
      <div class="wrapper">
        <form action="" method="POST" class="form">
          <div class="input-container d-flex justify-content-between">
            <div class="input-group input-name form-group">
              <label for="name">نام</label>
              <input
                class="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="نام خود را وارد کنید"
                required
              />
            </div>
            <div class="input-group input-email">
              <label for="email">ایمیل</label>
              <input
                class="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="ایمیل خود را وارد کنید"
                required
              />
            </div>
          </div>
          <div class="input-group textarea">
            <textarea
              class="form-control"
              id="comment"
              name="comment"
              placeholder="نظر خود را بنویسید"
              required
            ></textarea>
          </div>
          <div class="input-group">
            <button name="submit" class="btn">ارسال</button>
          </div>
        </form>
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
    width: 1024px;
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
        color: #00b894;
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

    .wrapper {
      padding: 20px;
      background: #fff;
      width: 100%;
      height: auto;
      min-height: 400px;
      margin: 20px 0;
    }

    .wrapper .form .row .input-group {
      padding: 0 10px;
      display: block;
    }

    .wrapper .form .row .input-group:first-child {
      padding-left: 0;
    }

    .wrapper .form .row .input-group:last-child {
      padding-right: 0;
    }

    .wrapper .form .input-group {
      width: 100%;
      height: 50px;
      margin-bottom: 50px;
    }
    .input-name,
    .input-email {
      width: 48% !important;
    }
    .wrapper .form .input-group label {
      font-weight: 600;
      margin-bottom: 5px;
      display: block;
    }

    .wrapper .form .input-group .btn {
      margin: 0;
      display: block;
      padding: 0.7rem 2rem;
      opacity: 0.8;
      color: #fff;
      background: #00b894;
      border: none;
      outline: none;
      border-radius: 3px;
      cursor: pointer;
      font-size: 1rem;
      transition: 0.3s ease-in;
    }

    .wrapper .form .input-group .btn:hover {
      opacity: 1;
    }

    .wrapper .form .input-group input,
    .wrapper .form .input-group textarea {
      width: 100%;
      height: 100%;
      border: 1px solid #ced4da;
      outline: none;
      padding: 5px 10px;
    }

    .wrapper .form .input-group.textarea {
      height: 200px;
    }

    .wrapper .form .input-group.textarea textarea {
      resize: none;
    }

    .wrapper .prev-comments {
      margin-top: 50px;
    }

    .wrapper .prev-comments .single-item {
      background: #fff;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      padding: 10px 20px;
      text-align: left;
      margin-bottom: 25px;
    }

    .wrapper .prev-comments .single-item h4 {
      font-size: 1.3rem;
      font-weight: 800;
      color: #111;
    }

    .wrapper .prev-comments .single-item a {
      margin: 10px 0;
      font-size: 1rem;
      color: #111;
      text-decoration: none;
      display: inline-block;
    }

    .wrapper .prev-comments .single-item p {
      font-size: 0.9rem;
      color: #111;
    }
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

/** media query */

@include breakpoint(567px) {
  .sharing-modal .modal-container {
    max-width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
  .sharing-modal .modal-container .body .sharing-title {
    font-size: 0.75rem;
  }
  .sharing-modal .modal-container .body .sharing-box .sharing-button span {
    font-size: 0.625rem;
  }
  .sharing-modal .modal-container .body .sharing-box .sharing-button .icon {
    max-height: 20px;
    max-width: 20px;
  }
  .sharing-modal .modal-container .wrapper {
    padding: 0;
  }
}
@include md {
  .sharing-modal .modal-container .wrapper .form .input-group input {
    font-size: 0.875rem;
  }
}
@include sm {
  .input-container {
    flex-direction: column;
  }
  .sharing-modal .modal-container .input-name,
  .sharing-modal .modal-container .input-email {
    width: 100% !important;
  }
  .sharing-modal .modal-container .wrapper .form .row .input-group {
    width: 100% !important;
  }
}
</style>
