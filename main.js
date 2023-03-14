 const btn = document.querySelector('.btn');

 btn.addEventListener('click',(e) =>{
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#cccc';
}); 

btn.addEventListener('mouseover',(e) =>{
    e.preventDefault();
    document.querySelector('body').classList.add('bg-dark');
});

btn.addEventListener('mouseout',(e) =>{
    e.preventDefault();
    document.querySelector('body').classList.add('bg-dark2');
}); 

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit' , onSubmit);

function onSubmit(e){
    e.preventDefault();

    console.log(nameInput.value);
    console.log(emailInput.value);

}
