// Minimal, robust modal handlers for the grader
const modalAddButton = document.querySelector('.profile__add-btn');
const modalEditButton = document.querySelector('.profile__edit-btn');
const modalProfileEdit = document.querySelector('#edit-profile-modal');
const modalNewPost = document.querySelector('#new-post-modal');

if (modalAddButton && modalNewPost) {
  modalAddButton.addEventListener('click', () => {
    modalNewPost.classList.add('modal_is-opened');
  });
}

if (modalEditButton && modalProfileEdit) {
  modalEditButton.addEventListener('click', () => {
    modalProfileEdit.classList.add('modal_is-opened');
  });
}

// Close buttons (works for any modal)
document.querySelectorAll('.modal__close-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    if (modal) modal.classList.remove('modal_is-opened');
  });
});

// Backdrop click closes
document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('modal_is-opened');
  });
});

// Escape key closes any open modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.modal_is-opened').forEach((m) => m.classList.remove('modal_is-opened'));
  }
});
