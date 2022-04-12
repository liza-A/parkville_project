const generateID = () =>
  Date.now().toString(Math.floor(Math.random() * 20) + 17);
  
const btnGenerate = document.getElementById('generateID');
const generateIDTXT = document.getElementById('generateidtxt');
const copy = document.getElementById('copy');

btnGenerate.addEventListener('click', () => {
  generateIDTXT.value = generateID();
});
const form = () =>{
  const nin = document.getElementById('nin')
  const ninError =document.getElementById('ninError')
  const date = document.getElementById('date')
  const dateError =document.getElementById('dateError')
  const model = document.getElementById('model')
  const modelError =document.getElementById('modelError')
  const number = document.getElementById('number')
  const numberError =document.getElementById('numberError')
  const color = document.getElementById('color')
  const colorError =document.getElementById('colorError')
  const plate = document.getElementById('plate')
  const plateError =document.getElementById('plateError')
  const name = document.getElementById('name')
  const nameError =document.getElementById('nameError')
  
  

  if(nin.value == ""){
    nin.style.border = "1px solid red"
    ninError.textContent="please provide the nin number"
    ninError.style = "color:red"
    return false
  }else{
    nin.style.border="1px solid green"
  }
  if(date.value == ""){
    date.style.border = "1px solid red"
    dateError.textContent="please provide the date"
    dateError.style = "color:red"
    return false
  }else{
    date.style.border="1px solid green"
  }
  if(model.value == ""){
    model.style.border = "1px solid red"
    modelError.textContent="please provide the model"
    modelError.style = "color:red"
    return false
  }else{
    model.style.border="1px solid green"
  }
  if(number.value == ""){
    number.style.border = "1px solid red"
    numberError.textContent="please provide the number"
    numberError.style = "color:red"
    return false
  }else{
    number.style.border="1px solid green"
  }
  if(color.value == ""){
    color.style.border = "1px solid red"
    colorError.textContent="please provide the color"
    colorError.style = "color:red"
    return false
  }else{
    color.style.border="1px solid green"
  }
  if(plate.value == ""){
    plate.style.border = "1px solid red"
    plateError.textContent="please provide the number plate"
    plateError.style = "color:red"
    return false
  }else{
    plate.style.border="1px solid green"
  }
  if(name.value == ""){
    name.style.border = "1px solid red"
    nameError.textContent="please provide the name"
    nameError.style = "color:red"
    return false
  }else{
    name.style.border="1px solid green"
  }
  
//   nin.addEventListener('blur', nin_verify, true);
//   plate.addEventListener('blur', plate_verify, true);
//   number.addEventListener('blur', number_verify, true);

//   //regex
//   const plateRegex = /^[0-9A-Z]+$/; // for alpha numeric
//   const ninRegex = /^[0-9A-Z]{14}$/; // for NIN exactly 14 alphanumric characters
//   const phoneRegex = /^\d{10}$/; // for phone number

//   function nin_verify(){
//     if(nin.value !='' && nin.value.match(ninRegex)){
//         nin.style.border ='1px solid green';
//         ninError.innerHTML = '';
//         return true;
//     }
//     else{
//         nin.style.border = '1px solid red';
//         ninError.textContent = 'correct format required'
//        nin.focus();
//        return false;
//        }
//   }
//   function plate_verify(){
//     if(plate.value !='' && plate.value.match(plateRegex)){
//         plate.style.border ='1px solid green';
//         plateError.innerHTML = '';
//         return true;
//     }
//     else{
//         plate.style.border = '1px solid red';
//         plateError.textContent = 'correct format required'
//        plate.focus();
//        return false;
//        }
//   }
//   function number_verify(){
//     if(number.value !='' && number.value.match(phoneRegex)){
//         number.style.border ='1px solid green';
//         numberError.innerHTML = '';
//         return true;
//     }
//     else{
//         number.style.border = '1px solid red';
//         numberError.textContent = 'correct format required'
//         number.focus();
//        return false;
//        }
//   }
 }
