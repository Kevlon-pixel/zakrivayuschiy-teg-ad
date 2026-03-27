const saveButton = document.querySelector('#save-button');
const dialogElement = document.querySelector('#dialog-id');
const dialogForm = dialogElement?.querySelector('.form');

saveButton?.addEventListener('click', () => {
  dialogElement?.showModal();
});

dialogForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  dialogElement?.close();
});
