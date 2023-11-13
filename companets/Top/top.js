getTop =()=> window.pageYOffset || document.documentElement.scrollTop;





class Tops  {


  

   Render(){

      let Top = ` 

      <div class="top__conteiner">
	 	<i class="bx bx-up-arrow-alt"></i>
	 </div>
        

      `;

     ROOT_TOP.insertAdjacentHTML('beforeend',Top);
   }

  ScrollCheack(){

   if (getTop() > 500 && getTop() < 3200) {
     const topConteiner = document.querySelector('.top__conteiner').classList.add('top__conteiner--visibite');
     const scrollButton = document.querySelector('.top__conteiner');

      scrollButton.addEventListener('click', ()=>{
      	 window.scrollTo({
    	   top: 0,
           behavior: 'smooth'
             })
      } )
    
  }
  else {
  	  const topConteiner = document.querySelector('.top__conteiner').classList.remove('top__conteiner--visibite');
  } 

  }

    



  



}

const tops = new Tops();
tops.Render();



window.addEventListener('scroll',tops.ScrollCheack);




