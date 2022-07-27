import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onFormData, 500));
formEl.addEventListener('submit', onSubmitForm);
const formData = {};

initForm();

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function initForm() {
  let existedData = localStorage.getItem('feedback-form-state');
  if (existedData) {
    existedData = JSON.parse(existedData);
    Object.entries(existedData).forEach(([name,value]) => {
      formEl.elements[name].value = value;
      formData[name] = value;
    })
  }
}
