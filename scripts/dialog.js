const saveButton = document.querySelector('#save-button');
const dialogElement = document.querySelector('#dialog-id');
const dialogCloseButton = document.querySelector('#dialog-close-button');

saveButton?.addEventListener('click', () => {
  if (dialogElement && !dialogElement.open) {
    dialogElement.showModal();
  }
});

dialogCloseButton?.addEventListener('click', () => {
  if (dialogElement?.open) {
    dialogElement.close();
  }
});
