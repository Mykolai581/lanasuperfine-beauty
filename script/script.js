//Modal

//Menu-burger

const headerContainer = document.querySelector(".header__container");
const menuBurger = document.querySelector(".menu-burger");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".menu__link");

menuBurger.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBurger.classList.toggle("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBurger.classList.remove("active");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menuBurger.classList.remove("active");
    menu.classList.remove("active");
  }
});

//Modal

const modalBtns = document.querySelectorAll(".button-modal");

modalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
      <div class="modal__overlay"></div>
      <div class="modal__content">
        <span class="modal-close">&times;</span>
        <h2 class="modal__title">Book today, glow tomorrow</h2>
        <div class="modal__text">
          Fill in the short form below and we will call
          you back and book you in at a time that is convenient for you
        </div>
        <form class="modal__form form">
          <div class="form__inputs">
            <input type="text" class="form__input form-name" placeholder="Name"/>
            <input type="text" class="form__input form-number" placeholder="Number" />
          </div>
          <div class="modal__checkbox checkbox-item">
            <input type="checkbox" id="terms" />
            <span>I agree to the privacy policy of the website and data processing</span>
          </div>
          <button type="button" class="button button-open-modal">Book a Treatment</button>
        </form>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.classList.add("modal-open");

    setTimeout(() => modal.classList.add("show"), 10);

    const closeModalBtn = modal.querySelector(".modal-close");
    const overlay = modal.querySelector(".modal__overlay");
    const btnOpenModal = modal.querySelector(".button-open-modal");

    function closeModal(modalItem) {
      modalItem.classList.remove("show");
      document.body.classList.remove("modal-open");

      modalItem.addEventListener(
        "transitionend",
        () => {
          modalItem.remove();
        },
        { once: true }
      );
    }

    closeModalBtn.addEventListener("click", () => closeModal(modal));
    overlay.addEventListener("click", () => closeModal(modal));

    btnOpenModal.addEventListener("click", () => {
      closeModal(modal);

      const modalTwo = document.createElement("div");
      modalTwo.classList.add("modal");

      modalTwo.innerHTML = `
        <div class="modal__overlay"></div>
        <div class="modal__content modal__content-two">
          <span class="modal-close">&times;</span>
          <h2 class="modal__title modal-open__title">Thank you for your application</h2>
          <div class="modal__text modal-open__text">We will contact you shortly</div>
          <button class="button button-modal-close">Return to website</button>
        </div>
      `;

      document.body.appendChild(modalTwo);
      document.body.classList.add("modal-open");

      setTimeout(() => modalTwo.classList.add("show"), 10);

      const overlayTwo = modalTwo.querySelector(".modal__overlay");
      const closeBtnTwo = modalTwo.querySelector(".modal-close");
      const btnCloseModalTwo = modalTwo.querySelector(".button-modal-close");

      function closeModalTwo() {
        modalTwo.classList.remove("show");
        document.body.classList.remove("modal-open");

        modalTwo.addEventListener(
          "transitionend",
          () => {
            modalTwo.remove();
          },
          { once: true }
        );
      }

      overlayTwo.addEventListener("click", closeModalTwo);
      closeBtnTwo.addEventListener("click", closeModalTwo);
      btnCloseModalTwo.addEventListener("click", closeModalTwo);
    });
  });
});
