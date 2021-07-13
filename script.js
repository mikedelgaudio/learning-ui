const main = () => {
  const btn = document.querySelector(".modal-btn");
  const openModal = () => {
    window.alert("Hello modals");
  };
  btn.addEventListener("click", openModal);
};

main();
