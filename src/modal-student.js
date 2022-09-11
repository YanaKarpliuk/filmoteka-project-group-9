const {
    footerLightbox,
    footerLightboxOpenBtn,
    footerLightboxCloseBtn,
    body,
  } = refs;
  
  footerLightboxOpenBtn.addEventListener('click', onOpenModal);
  
  
  function onOpenModal(e) {
    e.preventDefault();
    window.addEventListener('keydown', onEscBtnPress);
    footerLightboxCloseBtn.addEventListener('click', onCloseModal);
    footerLightbox.addEventListener('click', onLightBoxOverlayClick);
    footerLightbox.classList.add('is-open');
    body.classList.add('is-open');
    appendTeamCardsMarkup(students);
  }
  
  function onCloseModal() {
    footerLightboxCloseBtn.removeEventListener('click', onCloseModal);
    footerLightbox.removeEventListener('click', onLightBoxOverlayClick);
    window.removeEventListener('keydown', onEscBtnPress);
    footerLightbox.classList.remove('is-open');
    body.classList.remove('is-open');
  }
  
  
 
  
  function onLightBoxOverlayClick(e) {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  }
  
  function onEscBtnPress(e) {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  }
  // (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();