class Works  {

   Render(){

      let  Works  = ` 

  <div class="works__conteiner conteiner" >
      <h2 class="section__title">Примеры наших работ</h2>
      <div class="works__conteiner--wrapper">
        <div class="swiper">
          <div class="swiper-wrapper works__wrapper">
          </div>
          <div class="swiper-button-prev swiper-button-prev-work work__btn"></div>
              <div class="swiper-button-next swiper-button-next-work work__btn"></div>
        </div>
      </div>
    </div>
        

      `;

     ROOT_WORKS.insertAdjacentHTML('beforeend',Works);

     const conteinerWorks = document.querySelector('.works__wrapper');
     

      axios.get(URL_WORKS)

           .then(function(res){
                
                for(let i in res.data){

                  let worksContent =  `

                    <div class="works__block  swiper-slide">
                       <img  class="work__img" src="companets/Works/img/${res.data[i].img}">
                    </div>
                  `;

                 conteinerWorks.insertAdjacentHTML('beforeend',worksContent);
             }
     })

  }
}

const works = new Works();
works.Render();

const swiperSL2 = new Swiper('.swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next-work',
    prevEl: '.swiper-button-prev-work',
  },
  
  breakpoints: {
    
   992: {
        slidesPerView: 3,
   },
    697: {
        slidesPerView: 2,
   }

  }

});


