const  form = document.querySelector('.login-form')
  

function onFormSubmit(event) {
  event.preventDefault();

const {
    elements: { email, password },
} = event.currentTarget;

if (email.value === "" || password.value === "") {
 return alert("Будь ласка, заповніть усі поля");
    }
   

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}

form.addEventListener("submit", onFormSubmit);
