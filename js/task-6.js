
document.addEventListener('DOMContentLoaded', () => {
  const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createBtn = controls.querySelector('button[data-create]');
  const destroyBtn = controls.querySelector('button[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createBtn.addEventListener('click', createBoxes);
  destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100 || isNaN(amount)) {
      alert('Please enter a number between 1 and 100.');
      return;
    }

    const boxes = Array.from({ length: amount }, (_, index) => {
      const boxSize = 30 + index * 10;
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      return box;
    });

    boxesContainer.innerHTML = '';
    boxesContainer.append(...boxes);
    input.value = '';
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }
});
