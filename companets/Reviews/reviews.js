class Reviews  {

   Render(){

      let  Reviews  = `
          
  <div class="reviews__conteiner conteiner" data-aos="fade-up" data-aos-duration="2000">
    <h2 class="section__title">Отзывы наших клиентов</h2>
    <div class="revirews__conteiner--wrapper">
      <div class="revirews__wrapper">
        <div class="swiper-wrapper revirews__block"></div>
      </div>
      <div class="swiper-pagination   rewiews__pagination"></div>
      <div class="swiper-button-prev  swiper-button-prev-revirews  rewiews__btn"></div>
      <div class="swiper-button-next  swiper-button-next-revirews  rewiews__btn"></div>
    </div>  
  </div>

      `;

     ROOT_REVIEWS.insertAdjacentHTML('beforeend',Reviews);

     const reviewsConteiner = document.querySelector('.revirews__block');


      axios.get(URL_REVIEWS)

           .then(function(res){


                for(let i in res.data){

                  const reviewsContent = `

                      <div class="swiper-slide revirews__cart">
                          <div class="revirews__block revirews__block_header">
                            <img class="revirews__img" src="companets/Reviews/img/${res.data[i].img}">
                            <P class="revirews__date"><span> ${res.data[i].date}</span></P>
                          </div>
                          <div class="revirews__block">
                            <p class="revirews__name">${res.data[i].name}</p>
                          </div>
                          <div class="revirews__block">
                            <p>${res.data[i].text}</p>
                          </div>
                          <div class="revirews__block">
                            <P class="revirews__serves">Вид услуги:<span class="revirews__serves_name">${res.data[i].serves}</span></P>
                          </div>
                        </div>

         `
                
                    reviewsConteiner.insertAdjacentHTML('beforeend',reviewsContent);

               }
      })

   }
}

const reviews = new Reviews();
reviews.Render();

const swiperSL3 = new Swiper('.revirews__wrapper', {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next-revirews',
    prevEl: '.swiper-button-prev-revirews',
  },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
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
