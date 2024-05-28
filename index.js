const form = document.querySelector("form");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");
const thankYou=document.querySelector(".thankyou")

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone) => {
    return String(phone)
      .toLowerCase()
      .match(
        /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
      );
  };

let inputs=[nameInput,emailInput,phoneInput,messageInput]

let isValidationOn=false;
let isFormValid=false;

const reset=(ele)=>{
    ele.classList.remove("invalid");
    ele.nextElementSibling.classList.add("hidden");
}

const invalidate=(ele)=>{
    ele.classList.add("invalid");
    ele.nextElementSibling.classList.remove("hidden");
}


const validate = () => {
    if(!isValidationOn)return
    isFormValid=true;
reset(nameInput)
reset(emailInput)
reset(phoneInput)
reset(messageInput)

  if (!nameInput.value) {
    isFormValid=false;
    invalidate(nameInput)
  }
  if (!validateEmail(emailInput.value)) {
    isFormValid=false;
    invalidate(emailInput)
  }

  if (!validatePhone(phoneInput.value)) {
    isFormValid=false;
    invalidate(phoneInput)
  }

  if (!messageInput.value) {
    isFormValid=false;
    invalidate(messageInput)
  }

  if(nameInput.value.length<3){
    isFormValid=false;
    invalidate(nameInput)
    nameInput.nextElementSibling.innerText="Min characters should be more than 3"
  }
  var letters = /^[A-Za-z]+$/;
  if (!nameInput.value.match(letters)) {
    isFormValid=false;
    invalidate(nameInput)
    nameInput.nextElementSibling.innerText="Only alphabets"
  }
};  

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn=true;
  validate();
 
  if(isFormValid){
    inputs.forEach(input=>{
      console.log(input.value);
    })
    form.remove()
    thankYou.classList.remove("hidden")
  }
});

inputs.forEach((input)=>{
    input.addEventListener("input",()=>{
        validate()
    })
})
