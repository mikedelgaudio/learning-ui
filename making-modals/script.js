const btns = document.querySelectorAll(".modal-btn");
const modalBg = document.querySelector(".modal-bg");

const toggleModal = () => {
  modalBg.classList.toggle("modal-bg-active");
};

btns.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});

document.addEventListener("click", (e) => {
  if (e.target === modalBg) {
    modalBg.classList.remove("modal-bg-active");
  }
});
