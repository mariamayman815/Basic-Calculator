const display = document.querySelector('form input[name="display"]');

document.querySelectorAll('form input[type="button"]').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.value;

    if (val === 'AC') {
      display.value = '';
    } else if (val === 'CL') {
      display.value = display.value.slice(0, -1);
    } else if (val === '=') {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = 'wrong';
      }
    } else {
      display.value += val;
    }
  });
});
