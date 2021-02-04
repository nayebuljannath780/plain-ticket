function handleTicketChange(ticketCount){
    const firstClassInput = document.getElementById('firstClassCount');
   const firstClassCount = parseInt(firstClassInput.value);
   let firstClassNewCount = firstClassCount;
   if(ticketCount == true){
       firstClassNewCount = firstClassCount + 1;
   }
    if(ticketCount == false && firstClassCount >0){
        firstClassNewCount = firstClassCount - 1;
    }

   firstClassInput.value = firstClassNewCount;
   const firstClassTotal = firstClassNewCount * 150;
  calculateTotal();
  getInputValue();
  


}
function EconomyClassHandle(ticketCount2){
    const economyClassInput = document.getElementById('economyClassCount');
    const economyClassCount = parseInt(economyClassInput.value);
   let economyClassNewCount = economyClassCount;
   if(ticketCount2 == true){
       economyClassNewCount = economyClassCount + 1;
   }
    if(ticketCount2 == false && economyClassCount >0){
       economyClassNewCount = economyClassCount - 1;
    }
    economyClassInput.value = economyClassNewCount;
   const economyClassTotal = economyClassNewCount * 100;
   calculateTotal();
   getInputValue();
   
   
}
function calculateTotal(){
   const  firstInput= document.getElementById('firstClassCount');
   const firstCount = parseInt(firstInput.value);
   const economyInput = document.getElementById('economyClassCount');
   const economyCount = parseInt(economyInput.value);
   const totalPrice = firstCount*150 + economyCount*100;
   document.getElementById('subTotal').innerText ='$' + totalPrice;
   const tax = totalPrice * 0.1;
   document.getElementById('tax').innerText ='$' + tax;
 const total = totalPrice + tax;
 document.getElementById('total').innerText = '$' + total;
}