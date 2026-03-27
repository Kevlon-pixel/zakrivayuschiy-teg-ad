const saveButton = document.querySelector('#save-button');
const dialogElement = document.querySelector('#dialog-id');

saveButton?.addEventListener('click', () => {
  if (dialogElement && !dialogElement.open) {
    dialogElement.showModal();
  }
});
