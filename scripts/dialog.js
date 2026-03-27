const saveButton = document.querySelector('#save-button');
const dialogElement = document.querySelector('#dialog-id');
const dialogCloseButton = document.querySelector('#dialog-close-button');

saveButton?.addEventListener('click', () => {
  dialogElement?.showModal();
});

dialogCloseButton?.addEventListener('click', () => {
  dialogElement?.close();
});
