const modalEditButton = document.querySelector(".profile__edit-btn");
const modalAddButton = document.querySelector(".profile__add-btn");
const modalProfileEdit = modalEditButton.querySelector("#edit-profile-btn");
const modalNewPost = modalAddButton.querySelector("#new-post-btn");
const modalCloseBtn = modalNewPost.querySelector(".modal__close-btn");
const modalCloseBtn = modalProfileEdit.querySelector(".modal__close-btn");

modalEditButton.addEventListener("click", function () {
  modalProfileEdit.classList.add("modal modal_is-opened");
});

modalAddButton.addEventListener("click", function () {
  modalNewPost.classList.add("modal modal_is-opened");
});

modalCloseBtn.addEventListener("click", function () {
  modalProfileEdit.classList.remove("modal modal_is-opened");
});

modalCloseBtn.addEventListener("click", function () {
  modalNewPost.classList.remove("modal modal_is-opened");
});
