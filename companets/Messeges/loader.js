class Loader  {

   Render(){
      
      let Loader = ` 

         <div class="loader__conteiner"> </div>

      `
      
    ROOT_LOADER.insertAdjacentHTML('beforeend',Loader);  
  
      

   }
   Start(loader){

     document.addEventListener("DOMContentLoaded",()=>loader.classList.add('loader--hidden'));
   }

}

const loader = new Loader();
loader.Render();


const loaderConteiner = document.querySelector('.loader');
loader.Start(loaderConteiner);

