function calculatePrice() {
  const age = parseInt(document.getElementById('ageInput').value);
  const isStudent = document.getElementById('isStudent').checked;
  const output = document.getElementById('priceOutput');
  const base = 800;
  let msg;

  if (isNaN(age)) {
    msg = '❌ Please enter a valid age.';
    output.className = 'alert alert-danger text-center';
  } else if (age < 10) {
    msg = '🎉 Free Ticket!';
    output.className = 'alert alert-success text-center';
  } else if (isStudent) {
    msg = `🎓 Price: ${base * 0.5} BDT (50% student discount)`;
    output.className = 'alert alert-warning text-center';
  } else if (age >= 60) {
    msg = `🧓 Price: ${base * 0.85} BDT (15% senior discount)`;
    output.className = 'alert alert-warning text-center';
  } else {
    msg = `💰 Price: ${base} BDT`;
    output.className = 'alert alert-info text-center';
  }

  output.innerText = msg;
  output.classList.add('show');
  output.classList.remove('d-none');
}
document.getElementById('checkBtn').addEventListener('click', calculatePrice);
