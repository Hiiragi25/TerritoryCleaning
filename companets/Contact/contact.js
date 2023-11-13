class Contacts  {

   Render(){

      let  Contacts  = ` 
  
        <h2 class="section__title">Контакты</h2>
     	 <div class="contacts__conteiner conteiner" data-aos="fade-up" data-aos-duration="2000">
     	 	 <div class="contacts__information">
     	 	 	<div class="contacts__item">
     	 	 		<h3 class="contacts__title">Адрес</h3>
     	 	 	    <p class="contacts__text">ул.Победы 23</p>
     	 	 	</div>
                 <div class="contacts__item">
                 	  <h3 class="contacts__title">Номер телефонв</h3>
     	 	 	      <p class="contacts__text">8904345345</p>
                 </div>
     	 	 	
                  <div class="contact__item">
                  	  <h3 class="contacts__title">Почта</h3>
     	 	 	      <p class="contacts__text">util@gmail.com</p>
                  </div> 
     	 	 </div>
     	 	 <div class="contacts__map">
     	 	 	 <img src="companets/Contact/img/location_map.jpg">
     	 	 </div>
     	 </div>

        

      `;

     ROOT_CONTACTS.insertAdjacentHTML('beforeend',Contacts);

    


   }


}

const contacts = new Contacts();
contacts.Render();
