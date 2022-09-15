import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const SAVED_DATA_KEY = 'feedback-form-state';
const formData = {};

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

onPageUpdate();

function onFormSubmit(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;

  console.log({ email, message });

  e.currentTarget.reset();
  localStorage.removeItem(SAVED_DATA_KEY);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(SAVED_DATA_KEY, JSON.stringify(formData));
}

function onPageUpdate() {
  const savedData = JSON.parse(localStorage.getItem(SAVED_DATA_KEY));

  if (savedData) {
    formRef.elements.email.value = savedData.email ? savedData.email : '';
    formData.email = savedData.email ? savedData.email : '';
    formRef.elements.message.value = savedData.message ? savedData.message : '';
    formData.message = savedData.message ? savedData.message : '';
  }
}
