class Hero  {

   Render(){

      let Hero =  

      
        <div class="hero__conteiner conteiner" data-aos="fade-left" data-aos-duration="2000">
		 	 <div class="hero__block hero__block--content">
		 	 	<h1 class="hero__title">Профессиональная уборка загородных территорий от травы, листвы и снега</h1>
		 	 	<ul class="hero__list">
		 	 		<li class="list__item">Выезд в день обращения</li class="ride__item">
		 	 		<li class="list__item">Расчет смоимости работ по фото</li>
		 	 		<li class="list__item">Наличный и безналичный способ оплаты</li>
		 	 		<li class="list__item">Скидки постоянным клиентам</li>
		 	 	</ul>
		 	 	<input class="hero__btn" type="submit" name="call" value="Заказать звонок" >
		 	 </div>
		 	 <div class="hero__block hero__block--img" >
		 	   <img src="companets/Hero/img/dom.png">
		 	 </div>
		 </div>

        

      `;

     ROOT_HERO.insertAdjacentHTML('beforeend',Hero);

   }


}

const hero = new Hero();
hero.Render();
