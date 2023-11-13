


class Serves  {

   Render(){

       let serves = `  

        <div class="serves__conteiner conteiner" data-aos="fade-up" data-aos-duration="2000">
         <h2 class="section__title">Услуги</h2>
          <div class="serves__punkts">
            <input class="punkts__button  punkts__button--show" type="submit" value="Зимнии услуги">
            <input class="punkts__button punkts__button--leto" type="submit" value="Лето услуги">
          </div>
          <div class="serves__block serves__show"></div>  
          <div class="serves__block serves__leto"></div>
       </div>    

       `;
   
       ROOT_SERVES.insertAdjacentHTML('beforeend',serves);

       const conteinerShow = document.querySelector('.serves__show');
       const conteinerSummer = document.querySelector('.serves__leto');

        axios.get(URL_SERVES)

           .then(function(res){

                for(let i in res.data.show){

                let showContent = `

                    <div class="serves__item ${res.data.show[i].top}">
                        <div class="serves__img">
                          <img src="companets/Serves/img/${res.data.show[i].img}">
                        </div>
                        <div class="serves__content">
                          <h3>${res.data.show[i].name}</h3>
                           <p class="serves__cena">${res.data.show[i].cena}<span>руб</span></p>
                        </div>
                    </div>`;

                    conteinerShow.insertAdjacentHTML('beforeend',showContent);

               }

               for (let i in res.data.summer){
              
                  let summerContent = `

                     <div class="serves__item ${res.data.summer[i].top}">
                          <div class="serves__img">
                            <img src="companets/Serves/img/${res.data.summer[i].img}">
                          </div>
                          <div class="serves__content">
                            <h3>${res.data.summer[i].name}</h3>
                             <p class="serves__cena">${res.data.summer[i].cena}<span>руб</span></p>
                          </div>
                      </div>`;

                      conteinerSummer.insertAdjacentHTML('beforeend',summerContent);
               }

        })

   }
   


   ServesHidden(){

     const punktsButtons = document.querySelectorAll('.punkts__button');
     const contentServes = document.querySelectorAll('.serves__block');

     punktsButtons.forEach(item=>item.classList.remove('punkts__button--active'));
     contentServes.forEach(item=>item.classList.add('serves--hidden'));

  
 }
 ServesShow(index){
    const punktsButtons = document.querySelectorAll('.punkts__button');
    const contentServes = document.querySelectorAll('.serves__block');
    
    contentServes[index].classList.remove('serves--hidden');
    punktsButtons[index].classList.add('punkts__button--active');
 }
} 

const serves = new Serves();
serves.Render();
serves.ServesHidden();
serves.ServesShow(0);



 const punktsButtons = document.querySelectorAll('.punkts__button');

 punktsButtons.forEach((element, index)=> element.addEventListener('click', ()=>{
    serves.ServesHidden();
    serves.ServesShow(index);
 }))
   

  

