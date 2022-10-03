const body = document.querySelector('body')
const toggle = document.querySelector('.toggle');
const h1 = document.querySelector('.h1');
const display = document.querySelector('.display');
const calc = document.querySelector('.calculadora');
const btnDel = document.querySelector('.btn-del');
const btnClear = document.querySelector('.btn-clear');
const btnEq = document.querySelector('.btn-eq');




toggle.onclick = function(){
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  h1.classList.toggle('active');
  display.classList.toggle('active');
  calc.classList.toggle('active');
  btnDel.classList.toggle('active');
  btnClear.classList.toggle('active');
  btnEq.classList.toggle('active');
  
}


function Calculadora (){
 this.display = document.querySelector('.display');
 
 this.capturaCliques = () =>{
   document.addEventListener('click', event => {
     const el = event.target;
     if(el.classList.contains('btn-num')) this.addNumDisplay(el);
     if(el.classList.contains('btn-clear')) this.clear();
     if(el.classList.contains('btn-del')) this.del();
     if(el.classList.contains('btn-eq')) this.realizaConta(el);

   })
 }

 this.inicia = () =>{
   this.capturaCliques();
   this.capturaEnter();
 }

 this.addNumDisplay = (el) =>{
   this.display.value += el.innerText;
   this.display.focus();
 }
 this.clear = () =>{
   this.display.value = ' ';
 }
 this.del = () =>{
   this.display.value = this.display.value.slice(0, -1)
 }
 this.realizaConta = () =>{
   this.display.value()
 }
 this.realizaConta = () =>{
  try {
    const conta = eval(this.display.value);

    if(!conta){
      alert('Conta inválida');
      return
    } this.display.value = String(conta);
  } catch (error) {
    alert('Conta inválida');
    return;
  }
 }
 this.capturaEnter = ()=>{
   this.display.addEventListener('keyup', event =>{
     if(event.keyCode === 13){
       this.realizaConta();
     }
   })
 }
       
 }



const calculadora = new Calculadora();
calculadora.inicia();