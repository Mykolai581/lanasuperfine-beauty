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

function createModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal", "show");

  modal.innerHTML = `
    <div class="modal__overlay"></div>
    <div class="modal__content">
      <span class="modal-close">&times;</span>
      <h2 class="modal__title">Book today, glow tomorrow</h2>
      <div class="modal__text">
        Fill in the short form below and we will call
        you back and book you in at a time that is convenient for you
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.classList.add("modal-open");

  const closeModalBtn = modal.querySelector(".modal-close");
  const overlay = modal.querySelector(".modal__overlay");

  function closeModal() {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
    modal.remove();
  }

  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}

modalBtns.forEach((modalBtn) => {
  modalBtn.addEventListener("click", createModal);
});
