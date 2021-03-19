const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')
const btnClearForm = document.querySelector('.btnclear')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000)
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(
      `${nameInput.value} : ${emailInput.value}`));

      userList.appendChild(li);
  }
}

btnClearForm.addEventListener('click', clearForm);

function clearForm() {
  nameInput.value = '' 
  emailInput.value = ''
}

// I will do an update with remove li individually