const saveButton = document.querySelector('#save-button');
const dialogElement = document.querySelector('#dialog-save');

saveButton?.addEventListener('click', () => {
  if (dialogElement && !dialogElement.open) {
    dialogElement.showModal();
  }
});
