const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

const savedFormData = localStorage.getItem(localStorageKey);
const parsedFormData = JSON.parse(savedFormData);

if (parsedFormData) {
  email.value = parsedFormData.email || '';
  textarea.value = parsedFormData.message || '';
  formData.email = email.value;
  formData.message = textarea.value;
}

form.addEventListener('input', createLocalStorage);

function createLocalStorage(evt) {
  evt.target.placeholder = '';

  if (evt.target.name === 'email') {
    formData.email = evt.target.value.trim();
  } else if (evt.target.name === 'message') {
    formData.message = evt.target.value.trim();
  }

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', removeLocalStorage);

function removeLocalStorage(evt) {
  evt.preventDefault();

  if (formData.email && formData.message) {
    console.log(formData);

    localStorage.removeItem(localStorageKey);
    form.reset();

    formData.email = '';
    formData.message = '';
  } else {
    if (!formData.email) email.placeholder = 'Fill please all fields';
    if (!formData.message) textarea.placeholder = 'Fill please all fields';
  }
}

//  /////////////////////////////////////////////////////////////////////////////////
// const STORAGE_KEY = 'feedback-form-state';
// let formData = { email: '', message: '' };

// const form = document.querySelector('.feedback-form');
// const emailInput = form.elements.email;
// const messageInput = form.elements.message;

// popText();

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const formValues = {
//     email: emailInput.value.trim(),
//     message: messageInput.value.trim(),
//   };

//   if (formData.email === '' || formData.message === '') {
//     return alert('Please fill in all the fields!');
//   }

//   console.log(formValues);

//   form.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   formData = { email: '', message: '' };
// });

// form.addEventListener('input', event => {
//   formData[event.target.name] = event.target.value.trim();
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// });

// function popText() {
//   const savedData = localStorage.getItem(STORAGE_KEY);

//   if (savedData) {
//     formData = JSON.parse(savedData);

//     emailInput.value = formData.email || '';
//     messageInput.value = formData.message || '';
//   }
// }
