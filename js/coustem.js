function calculatePrice() {
  const age = parseInt(document.getElementById('ageInput').value);
  const isStudent = document.getElementById('isStudent').checked;
  const outputDiv = document.getElementById('priceOutput');
  const regular_price = 800;
  let result = '';

  if (isNaN(age)) {
    result = '❌ Please enter a valid age.';
  } else if (age < 10) {
    result = '🎉 Free Ticket!';
  } else if (isStudent) {
    result = `🎓 Price: ${regular_price * 0.5} BDT (50% student discount)`;
  } else if (age >= 60) {
    result = `🧓 Price: ${regular_price * 0.85} BDT (15% senior discount)`;
  } else {
    result = `💰 Price: ${regular_price} BDT`;
  }

  outputDiv.innerText = result;
  outputDiv.classList.remove('d-none');
}
