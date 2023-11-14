class Header  {

   Render(){
      
      let Header = ` 

          
               <div class="header__conteiner conteiner--second">
           <div class="header__info header__info--content">
             <div class="info__item">
               <p class="info__addres">г.Москва, ул.Неполбедимых 6 </p>
             </div>
             <div class="info__item info__item--icons">
                <i class="bx bx-phone-call"></i>
                <p class="info__telefon">+7 926 462 29 99</p>
             </div>
           </div>
             <div class="header__nav">
                <div class="header__logo">
                  <a class="logo__text" href="#" >Territory Cleaning</a>
                </div>
                <nav class="nav">
                         <ul class="nav__conteiner ">
                           <li><a href="#about" class="nav__link">О нас</a></li>
                           <li><a href="#serves" class="nav__link">Услуги</a></li>
                           <li><a href="#works" class="nav__link">Наши работы</a></li>
                           <li><a href="#reviews" class="nav__link">Отзывы</a></li>
                           <li><a href="#questions" class="nav__link">Вопросы</a></li>
                           <li><a href="#contacts" class="nav__link">Контакты</a></li>
                         </ul>
                          <div class="nav__info">
                      <i class="bx bx-phone-call"></i>
                      <p class="info__phone">+7 926 462 29 99</p>
                     </div>
                </nav>
                <div class="header__burger">
                   <i class="bx bx-menu burger__icon" ></i>
                </div>
          </div>
      </div>





      `
      
    ROOT_HEADER.insertAdjacentHTML('beforeend',Header);  
      

   
   }
   OpenMenu(menuButton,navConteiner){

     menuButton.addEventListener('click',()=>{
         navConteiner.classList.toggle('nav--active');
        menuButton.classList.toggle('bx-x');
     })
        

   }
   CloseMenu(navConteiner,navList,menuButton){
    
   
  navList.forEach(function(element) {
       
       element.addEventListener('click',()=>{
            navConteiner.classList.remove('nav--active');
            menuButton.classList.remove('bx-x');
       })
    });
   }


}




const header = new Header();
header.Render();

const menuButton = document.querySelector('.burger__icon');
const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav__link');




header.OpenMenu(menuButton,nav);
header.CloseMenu(nav,navList,menuButton);




