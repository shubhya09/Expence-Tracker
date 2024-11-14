document.getElementById('expense-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('expense-title').value;
  const quantity = document.getElementById('expense-qn').value;
  const amount = document.getElementById('expense-amount').value;
  
  if (title && amount) {
    const expenseItem = document.createElement('div');
    expenseItem.innerHTML = `${title}: qn:${quantity} Rs.${amount}`;
    document.getElementById('expenses-list').appendChild(expenseItem);
    
    // Clear the input fields
    document.getElementById('expense-title').value = '';
    document.getElementById('expense-qn').value = '';
    document.getElementById('expense-amount').value = '';

  } else {
    alert('Please fill in both fields.');
  }
});
