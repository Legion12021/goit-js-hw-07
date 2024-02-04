
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', updateName);

  function updateName() {
    const trimmedValue = nameInput.value.trim();
    const outputName = trimmedValue === '' ? 'Анонім' : trimmedValue;
    nameOutput.textContent = outputName;
  }
});
