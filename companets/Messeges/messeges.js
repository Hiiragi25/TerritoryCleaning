class Messeges  {

   Render(){

      let Messeges = ` 

          <div class="messeges__conteiner">
		     <i class="bx bx-check"></i>
		    <h3 class="messeges__text">Ваша заявка отправлена</h3>
	     </div>
        

      `;

     ROOT_MESSEGES.insertAdjacentHTML('beforeend',Messeges);
    
   



   }
   Show() {

   	   document.querySelector('.messeges').classList.add('messeges--show');
   	}
 

	Hidden(){
	  let timeleft = 4;
	  let downloadTimer = setInterval(function(){
	  if(timeleft <= 0){
	    clearInterval(downloadTimer);
	  }

	  timeleft -= 1;
	  console.log(timeleft);
	   if (timeleft< 1) {
	   	 document.querySelector('.messeges').classList.remove('messeges--show');
	   }
	   

	}, 1000);
}
   


}

const messeges = new Messeges();
messeges.Render();




