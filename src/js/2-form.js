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
