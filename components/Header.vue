<template>
  <header id="header" class="header">
    <div class="container">
      <div class="first-row">
        <ul>
          <li class="logo" id="navbarLogo">
            <span><nuxt-link to="/">لگو</nuxt-link> </span>
          </li>
          <li class="search">
            <div
              class="row column align-items-center search-container"
              ref="searchContainer"
            >
              <span class="col-2 category-title">دسته بندی</span>
              <img
                class="category-logo col-1"
                src="@/assets/images/Group168.webp"
                title="دسته بندی"
                alt="دسته بندی"
              />
              <input
                class="search-input col-8"
                type="text"
                name=""
                placeholder="جستجو کنید …"
                v-on:focus="changeBorderOfSearchBox"
                v-on:blur="changeBorderOfSearchBox"
              />
              <span class="search-btn btn-bg" href="#"
                ><img
                  src="@/assets/icon/loupe.svg"
                  class="icon"
                  title="search"
                  alt="search"
              /></span>
            </div>
          </li>
          <li class="header-features">
            <div class="cart">
              <span class="cart-icon">
                <img
                  class="cart-icon"
                  src="@/assets/icon/online-shopping-cart.svg"
                  alt=""
                />
              </span>
              <span class="cart-counter">0</span>
            </div>
            <div class="user-auth">
              <span @click="activeLoggedInBox" class="auth-logo">
                <img
                  src="@/assets/icon/Group45.svg"
                  title="کاربر"
                  alt="کاربر"
                />
              </span>
              <div ref="loggedInBox" id="loggedInBox" class="logged-in-box">
                <div class="user-info">
                  <img
                    src="@/assets/icon/Group45.svg"
                    alt="icon"
                    title="کاربر"
                    class="icon"
                  />
                  <a href="#" title="کاربر" class="user-name">نیما امیدپور</a>
                  <span class="arrow-sign">&#62;</span>
                </div>
                <div class="favorites-list">
                  <img
                    src="@/assets/icon/heart-outline.svg"
                    alt="icon"
                    title="لیست علاقمندی ها"
                    class="icon"
                  />
                  <a title="لیست ها" alt="لیست ها" href="#">لیست ها</a>
                </div>
                <div class="favorites-list">
                  <img
                    src="@/assets/icon/chatbox-outline.svg"
                    alt="icon"
                    title="نظر ها"
                    class="icon"
                  />
                  <a title="لیست ها" alt="لیست ها" href="#">نظر ها</a>
                </div>
                <div class="exit">
                  <img
                    src="@/assets/icon/exit-outline.svg"
                    alt="icon"
                    title="خروج"
                    class="icon"
                  />
                  <a title="خروج" alt="خروج" href="#">خروج</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="second-row" id="sticky">
        <div class="img-container" @click="toggleHamburgerMenu">
          <img
            class="hamburger-icon"
            src="@/assets/icon/bars-solid.svg"
            alt="ساب منو"
            title="ساب منو"
            ref="hamburgerIcon"
          />
        </div>
        <div class="logo" ref="StickyNavbarLogo" id="StickyNavbarLogo">
          <span>لگو</span>
        </div>
        <ul class="menu">
          <li class="mega-menu-nav">
            <div
              @mouseenter="activeMegaNav"
              @mouseleave="activeMegaNav"
              class="mega-menu-nav-title"
            >
              دسته بندی محصولات
              <span ref="megaMenuNav" class="nav-red-bottom"></span>
            </div>
            <div
              @mouseenter="activeMegaNav"
              @mouseleave="activeMegaNav"
              class="mega-menu"
            >
              <ul class="menu-list">
                <li class="mega-main-menu">
                  <a
                    :class="{
                      active_head_menu: isActive === 'flowers',
                    }"
                    @mouseover="setActive('flowers')"
                    title="ساب منو"
                    href="#"
                    >قاب</a
                  >

                  <ul
                    class="sub-menu"
                    :class="{ active_sub_menu: isActive === 'flowers' }"
                  >
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>

                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>

                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-item">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>

                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="mega-main-menu">
                  <a
                    :class="{
                      active_head_menu: isActive === 'seeds',
                    }"
                    @mouseover="setActive('seeds')"
                    title="لوازم جانبی"
                    href="#"
                    >لوازم جانبی</a
                  >
                  <ul
                    :class="{ active_sub_menu: isActive === 'seeds' }"
                    class="sub-menu"
                  >
                    <li class="sub-menu-item" v-for="n in 10" :key="n">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="mega-main-menu">
                  <a
                    :class="{
                      active_head_menu: isActive === 'FertilizersAndPoisons',
                    }"
                    @mouseover="setActive('FertilizersAndPoisons')"
                    title="موبایل"
                    href="#"
                    >موبایل</a
                  >
                  <ul
                    :class="{
                      active_sub_menu: isActive === 'FertilizersAndPoisons',
                    }"
                    class="sub-menu"
                  >
                    <li class="sub-menu-item">
                      <a
                        class="sub-menu-item-link"
                        alt="ساب منو"
                        title="ساب منو"
                        href="#"
                      >
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items"></ul>
                    </li>
                    <li class="sub-menu-item">
                      <a
                        class="sub-menu-item-link"
                        alt="ساب منو"
                        title="ساب منو"
                        href="#"
                      >
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items"></ul>
                    </li>
                    <li class="sub-menu-item">
                      <a
                        class="sub-menu-item-link"
                        alt="ساب منو"
                        title="ساب منو"
                        href="#"
                      >
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items"></ul>
                    </li>
                  </ul>
                </li>
                <li class="mega-main-menu">
                  <a
                    :class="{
                      active_head_menu: isActive === 'CuttingsAndSeedlings',
                    }"
                    @mouseover="setActive('CuttingsAndSeedlings')"
                    title="ساعت هوشمند"
                    href="#"
                  >
                    ساعت هوشمند
                  </a>
                  <ul
                    :class="{
                      active_sub_menu: isActive === 'CuttingsAndSeedlings',
                    }"
                    class="sub-menu"
                  >
                    <li class="sub-menu-item" v-for="n in 10" :key="n">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>

                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">
                            ساب منو
                          </a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">
                            ساب منو
                          </a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">
                            ساب منو
                          </a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">
                            ساب منو
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="mega-main-menu">
                  <a
                    :class="{
                      active_head_menu: isActive === 'GardeningTools',
                    }"
                    @mouseover="setActive('GardeningTools')"
                    title="ساعت هوشمند"
                    href="#"
                  >
                    ساعت هوشمند
                  </a>
                  <ul
                    :class="{
                      active_sub_menu: isActive === 'GardeningTools',
                    }"
                    class="sub-menu"
                  >
                    <li class="sub-menu-item" v-for="n in 5" :key="n">
                      <a class="sub-menu-item-link" title="ساب منو" href="#">
                        ساب منو
                        <img
                          class="left-arrow"
                          src="@/assets/icon/211686_back_arrow_icon.svg"
                          alt="سرچ"
                          title="سرچ"
                          loading="lazy"
                        />
                      </a>
                      <ul class="items">
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                        <li class="menu-item">
                          <a title="ساب منو" alt="ساب منو" href="#">ساب منو</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-menu">
            <a title="صفجه اصلی " href="#">صفجه اصلی </a>
            <span class="nav-red-bottom"></span>
          </li>
          <li class="nav-menu">
            <a title="درباره ی ما" href="#">درباره ی ما </a>
            <span class="nav-red-bottom"></span>
          </li>
          <li class="nav-menu">
            <a title="تماس با ما" href="#">تماس با ما </a>
            <span class="nav-red-bottom"></span>
          </li>
        </ul>
        <div class="header-features" id="headerFeatures">
          <span @click="toggleSearchBox" class="search-icon">
            <img
              src="@/assets/icon/loupe.svg"
              class="icon"
              title="search"
              alt="search"
            />
          </span>
          <div class="cart">
            <span class="cart-icon">
              <img
                class="cart-icon"
                src="@/assets/icon/online-shopping-cart.svg"
                alt=""
              />
            </span>
            <span class="cart-counter">0</span>
          </div>
          <div class="user-auth-container">
            <div class="user-auth" id="userAuth">
              <span @click="activeSTickyLoggedInBox" class="auth-logo">
                <img
                  src="@/assets/icon/Group45.svg"
                  title="کاربر"
                  alt="کاربر"
                />
              </span>

              <div
                ref="StickyLoggedInBox"
                id="secondLoggedInBox"
                class="logged-in-box"
              >
                <div class="user-info">
                  <img
                    src="@/assets/icon/Group45.svg"
                    alt="icon"
                    title="کاربر"
                    class="icon"
                  />
                  <a href="#" title="کاربر" class="user-name">نیما امیدپور</a>
                  <span class="arrow-sign">&#62;</span>
                </div>
                <div class="favorites-list">
                  <img
                    src="@/assets/icon/heart-outline.svg"
                    alt="icon"
                    title="لیست علاقمندی ها"
                    class="icon"
                  />
                  <a title="لیست ها" alt="لیست ها" href="#">لیست ها</a>
                </div>
                <div class="favorites-list">
                  <img
                    src="@/assets/icon/chatbox-outline.svg"
                    alt="icon"
                    title="نظر ها"
                    class="icon"
                  />
                  <a title="لیست ها" alt="لیست ها" href="#">نظر ها</a>
                </div>
                <div class="exit">
                  <img
                    src="@/assets/icon/exit-outline.svg"
                    alt="icon"
                    title="خروج"
                    class="icon"
                  />
                  <a title="خروج" alt="خروج" href="#">خروج</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- mobile menu -->
      <div class="mobile-menu" ref="hamburgerMenu">
        <div class="hamburger-menu-header">
          <span class="logo">لگو</span>
          <div class="user-auth">
            <div class="log-in-content">
              <a title="ورود" class="log-in" href="#">ورود</a>
              <span class="back-slash" href="#">/</span>
              <a title="خروج" class="log-out" href="#">خروج</a>
            </div>
          </div>
        </div>
        <div class="main-menu">
          <ul class="header-main-menu-list">
            <li>
              <div
                @click="activeMenu($event)"
                title="ساب منو"
                class="main-menu-category"
              >
                <span> ناحیه کاربری</span>
                <img
                  src="../assets/icon/211687_down_arrow_icon.svg"
                  alt="icon"
                  title="کاربر"
                  class="icon"
                />
              </div>

              <ul class="main-menu-category-sublist">
                <li class="user-account-sub-menu">
                  <img
                    src="../assets/icon/Group45.svg"
                    alt="icon"
                    title="کاربر"
                    class="icon"
                  />

                  <a href="#" title="کاربر" class="user-name">نیما امیدپور</a>
                </li>
                <li class="user-account-sub-menu">
                  <img
                    src="../assets/icon/heart-outline.svg"
                    alt="icon"
                    title="لیست علاقمندی ها"
                    class="icon"
                  />
                  <a title="لیست ها" class="main-menu-subcategory" href="#"
                    >لیست ها</a
                  >
                </li>

                <li class="user-account-sub-menu">
                  <img
                    src="../assets/icon/chatbox-outline.svg"
                    alt="icon"
                    title="نظر ها"
                    class="icon"
                  />
                  <a title="نظر ها" class="main-menu-subcategory" href="#"
                    >نظر ها</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <div
                @click="activeMenu($event)"
                title="ساب منو"
                class="main-menu-category"
              >
                <span> منو</span>
                <img
                  src="../assets/icon/211687_down_arrow_icon.svg"
                  alt="icon"
                  title="منو"
                  class="icon"
                />
              </div>
              <ul class="main-menu-category-sublist">
                <li>
                  <div
                    title="قاب"
                    @click="activeMenu($event)"
                    class="main-menu-subcategory"
                    href="#"
                  >
                    <span> قاب</span>
                    <img
                      src="@/assets/icon/211687_down_arrow_icon.svg"
                      alt="فلش"
                      title="فلش"
                      loading="lazy"
                      class="icon"
                    />
                  </div>
                  <ul class="main-menu-third-list">
                    <li>
                      <a title="ساب" href="#" class="third menu-header">
                        ساب منو
                      </a>
                    </li>
                    <li>
                      <a title="ساب" href="#" class="third menu-header">
                        ساب منو
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <div
                @click="activeMenu($event)"
                href="#"
                title="لوازم جانبی"
                class="main-menu-category"
              >
                <span> لوازم جانبی</span>
                <img
                  src="@/assets/icon/211687_down_arrow_icon.svg"
                  alt="فلش"
                  title="فلش"
                  loading="lazy"
                  class="icon"
                />
              </div>
              <ul class="main-menu-category-sublist">
                <li>
                  <div
                    title="قاب"
                    @click="activeMenu($event)"
                    class="main-menu-subcategory"
                    href="#"
                  >
                    <span> قاب</span>
                    <img
                      src="@/assets/icon/211687_down_arrow_icon.svg"
                      alt="فلش"
                      title="فلش"
                      loading="lazy"
                      class="icon"
                    />
                  </div>
                  <ul class="main-menu-third-list">
                    <li>
                      <a title="ساب" href="#" class="third menu-header">
                        ساب منو
                      </a>
                    </li>
                    <li>
                      <a title="ساب" href="#" class="third menu-header">
                        ساب منو
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <div
                @click="activeMenu($event)"
                href="#"
                title="ساعت هوشمند"
                class="main-menu-category"
              >
                <span> ساعت هوشمند</span>
                <img
                  src="@/assets/icon/211687_down_arrow_icon.svg"
                  alt="فلش"
                  title="فلش"
                  loading="lazy"
                  class="icon"
                />
              </div>
              <ul class="main-menu-category-sublist">
                <li>
                  <div
                    title="قاب"
                    @click="activeMenu($event)"
                    class="main-menu-subcategory"
                    href="#"
                  >
                    <span> قاب</span>
                    <img
                      src="@/assets/icon/211687_down_arrow_icon.svg"
                      alt="فلش"
                      title="فلش"
                      loading="lazy"
                      class="icon"
                    />
                  </div>
                  <ul class="main-menu-third-list">
                    <li>
                      <a title="ساب" href="#" class="third menu-header">
                        ساب منو
                      </a>
                    </li>
                    <li>
                      <a title="ساب" href="#" class="third menu-header">
                        ساب منو
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" title="درباره ما" class="main-menu-category about-us"
                >درباره ما</a
              >
            </li>
            <li>
              <span
                href="#"
                title="تماس با ما<"
                class="main-menu-category contact-us"
                >تماس با ما</span
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- mobile menu bg -->
      <div
        class="mobile-menu-background"
        @click="toggleHamburgerMenu"
        ref="mobileMenuBackground"
      ></div>
      <div ref="searchBox" class="search-box">
        <div class="search-box-container">
          <div @click="toggleSearchBox" class="search-close">&#10005;</div>
          <div class="search">
            <div
              class="row column align-items-center search-container"
              ref="StickySearchBoxContainer"
            >
              <span class="col-2 category-title">دسته بندی</span>
              <img
                class="category-logo col-1"
                src="@/assets/images/Group168.webp"
                title="search"
                alt="category"
              />
              <input
                class="search-input col-8"
                type="text"
                name=""
                placeholder="جستجو کنید …"
                v-on:focus="changeStickySearchBorder"
                v-on:blur="changeStickySearchBorder"
              />
              <a title="" class="search-btn btn-bg" href="#"
                ><img
                  src="@/assets/icon/loupe.svg"
                  class="icon"
                  title="search"
                  alt="search"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: "flowers",
      defaultActiveMenuSwitch: false,
      windowWidth: "",
    };
  },

  computed: {
    setWindow() {
      if (process.browser) {
        this.windowWidth = window.innerWidth;
      }
    },
  },

  mounted: function () {
    const menu = document.getElementById("sticky");
    const logo = document.getElementById("navbarLogo");
    const userAuth = document.getElementById("userAuth");
    const headerFeatures = document.getElementById("headerFeatures");
    const loggedInBox = document.getElementById("loggedInBox");
    const secondLoggedInBox = document.getElementById("secondLoggedInBox");
    const mobileMenuBackground = this.$refs.mobileMenuBackground;

    //make navBar sticky
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        //when logged box is active and user scroll down remove active from class list
        if (loggedInBox.classList.contains("active")) {
          loggedInBox.classList.remove("active");
        }

        menu.classList.add("sticky");
        userAuth.classList.add("active");
        headerFeatures.classList.add("active");
        if (window.innerWidth >= 930) {
          logo.style.display = "none";
        } else {
          logo.style.display = "block";
        }
      } else {
        menu.classList.remove("sticky");
        logo.style.display = "none";

        //when logged box is active on sticky nav and user scroll down remove active from class list
        if (secondLoggedInBox.classList.contains("active")) {
          secondLoggedInBox.classList.remove("active");
        }
        userAuth.classList.remove("active");
        headerFeatures.classList.remove("active");
        logo.style.display = "block";
      }
    });

    //check if mobile menu is active and user goes to desktop of browser remove active from it
    window.addEventListener("resize", () => {
      if (window.innerWidth > 930) {
        if (mobileMenuBackground.classList.contains("active")) {
          mobileMenuBackground.classList.remove("active");
        }
        if (this.$refs.hamburgerMenu.classList.contains("active-mobile-menu")) {
          this.$refs.hamburgerMenu.classList.remove("active-mobile-menu");
        }
      }
    });
  },
  methods: {
    activeMegaNav() {
      this.defaultActiveMenuSwitch = !this.defaultActiveMenuSwitch;
      this.$refs.megaMenuNav.classList.toggle("active_nav");

      //set flowers default active menu
      if (!this.x) {
        this.isActive = "flowers";
      }
    },

    setActive(menu) {
      this.isActive = menu;
    },
    toggleHamburgerMenu() {
      document.body.classList.toggle("overflow-hidden");
      this.$refs.hamburgerMenu.classList.toggle("active-mobile-menu");
      this.$refs.mobileMenuBackground.classList.toggle("active");
    },

    //active sub menu
    activeMenu(event) {
      event.target.classList.toggle("is-active");
    },

    //toggle search box

    toggleSearchBox() {
      this.$refs.searchBox.classList.toggle("show-search-box");
    },

    //active logged in user
    activeLoggedInBox() {
      this.$refs.loggedInBox.classList.toggle("active");
    },
    activeSTickyLoggedInBox() {
      this.$refs.StickyLoggedInBox.classList.toggle("active");
    },
    //change border of search box
    changeBorderOfSearchBox() {
      this.$refs.searchContainer.classList.toggle("change-search-border");
    },
    changeStickySearchBorder() {
      this.$refs.StickySearchBoxContainer.classList.toggle(
        "change-search-border"
      );
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/style/scss/header.scss";
</style>
