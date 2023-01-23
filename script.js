const inputNumberOfPerfilers = document.getElementById('input-perfilers');
const buttonAddNumberOfPerfilers = document.getElementById('button-add');
const buttonSubNumberOfPerfilers = document.getElementById('button-sub');
const switchInputs = document.querySelectorAll(".switch-wrapper input");
const buttonPurchase = document.getElementById("button-purchase");


const spanNumberOfPerfilers = document.getElementById('span-perfilers');
const price = document.getElementById("price"); 


function addPerfilers() {
  inputNumberOfPerfilers.value = Number(inputNumberOfPerfilers.value) + 1
  updateSpanPerfilers()
  setPrice()
}

function subPerfilers() {

  inputNumberOfPerfilers.value = Number(inputNumberOfPerfilers.value) - 1

  updateSpanPerfilers()
  setPrice()

} 

function updateSpanPerfilers() {
   spanNumberOfPerfilers.textContent = inputNumberOfPerfilers.value
}


function onChangePerfilers() {
  setPrice()
  updateSpanPerfilers()
}

function setPrice() {
  if(switchInputs[0].checked){
    price.textContent = 'R$' + Number(246.41 * inputNumberOfPerfilers.value).toFixed(2)
  }
  if(switchInputs[1].checked){
    console.log('ano selecionado')
    price.textContent = 'R$' + Number(2460 * inputNumberOfPerfilers.value).toFixed(2)

  }

}

function finishPurchase() {
  alert(`Plano escolhido ${switchInputs[0].checked ? 'mensal':'anual'} no valor de ${price.textContent} para ${inputNumberOfPerfilers.value} perfil(s)}` );
}



buttonAddNumberOfPerfilers.onclick = addPerfilers;
buttonSubNumberOfPerfilers.onclick = subPerfilers;

inputNumberOfPerfilers.onchange = onChangePerfilers


buttonPurchase.onclick = finishPurchase;
switchInputs[0].onchange =onChangePerfilers
switchInputs[1].onchange =onChangePerfilers



