class Questions  {

   Render(){

      let Questions = ` 

         <div class="questions__conteiner conteiner" data-aos="fade-up" data-aos-duration="2000">
          <h2 class="section__title section__title--question">Ответы на вопросы</h2>
           <div class="accordion">
             <div class="accordion__item">
              <div class="accordion__trigger">
                   <p class="accordion__title">Как происходит оценка работ?</p>
                   <i class="bx bx-plus"></i>
               </div>
               <div class="accordion__content">
                   <p class="accordion__text">Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Voluptate consequatur ipsa ut esse earum, temporibus minima voluptates perferendis, accusantium, magnam voluptatem natus. Odit incidunt laboriosam architecto distinctio, aut quod, in.</p>
              </div>
        </div>
         <div class="accordion__item" >
              <div class="accordion__trigger">
                   <p class="accordion__title">Как происходит оценка работ?</p>
                   <i class="bx bx-plus"></i>
               </div>
               <div class="accordion__content">
                   <p class="accordion__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit expedita dicta placeat facere, nobis temporibus vel ipsam odit voluptas rem deserunt hic debitis officia rerum nemo laboriosam eum itaque corporis.</p>
              </div>
        </div>
         <div class="accordion__item">
              <div class="accordion__trigger">
                   <p class="accordion__title">Как происходит оценка работ?</p>
                   <i class="bx bx-plus"></i>
               </div>
               <div class="accordion__content">
                   <p class="accordion__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum ratione, voluptates, explicabo beatae dolores excepturi doloribus dignissimos tempore minima animi, accusamus repellat porro aut perspiciatis in nam, totam deserunt.</p>
              </div>
        </div>

           </div>
       </div> 
        

      `;

     ROOT_QUESTIONS.insertAdjacentHTML('beforeend',Questions);
     const accodionConteiner = document.querySelector('.accordion');

     // axios.get(URL_QUESTIONS)

     //    .then(function(res){
                
     //       for(let i in res.data){

     //              let accodion =  `
     //                  <div class="accordion__item"  >
     //                      <div class="accordion__trigger" >
     //                           <p class="accordion__title">${res.data[i].questions}</p>
     //                           <i class="bx bx-plus"></i>
     //                       </div>
     //                       <div class="accordion__content">
     //                           <p class="accordion__text">${res.data[i].answer}</p>
     //                      </div>
     //                </div>
     //              `;

     //              accodionConteiner.insertAdjacentHTML('beforeend',accodion);
     //         }
     // })

  }

}

  

 





const questions = new Questions();

questions.Render();

Accordion();
function Accordion(){
 
 const accordionItem = document.querySelectorAll(".accordion__item");
  
  accordionItem.forEach((item,index)=>{
   
 
     item.addEventListener('click',()=>{

         item.classList.toggle('accordion__item--opend');
         item.classList.contains('accordion__item--opend') ?  AccordionOpen(item) :  AccordionClose(item);
         AccordionCloseAll(accordionItem,index);

     })
    

  })
}



  
 
      



function AccordionOpen(item){
      let answer = item.querySelector(".accordion__content");
      answer.style.height=`${answer.scrollHeight}px`;
      item.querySelector('.accordion__trigger').classList.add('accordion__trigger--opend');
      item.querySelector("i").classList.replace("bx-plus","bx-minus");
     
}
function AccordionClose(item){
      let answer = item.querySelector(".accordion__content");
      answer.style.height=`0px`;
      item.querySelector('.accordion__trigger').classList.remove('accordion__trigger--opend');
      item.querySelector("i").classList.replace("bx-minus","bx-plus");
}
 function AccordionCloseAll(accordionItem,index){
    accordionItem.forEach(function(itemCurrent, indexCurrent) {
       if(index != indexCurrent){
          itemCurrent.classList.remove("accordion__item--opend");
          let answerCurrent = itemCurrent.querySelector(".accordion__content");
          answerCurrent.style.height  = '0px';
          itemCurrent.querySelector('.accordion__trigger').classList.remove('accordion__trigger--opend');
          itemCurrent.querySelector("i").classList.replace("bx-minus","bx-plus");

       }
    });
}
