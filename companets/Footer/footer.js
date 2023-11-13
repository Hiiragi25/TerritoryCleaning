class Footer  {

   Render(){

      let  Footer  = ` 

     <div class="footer__conteiner conteiner"> 
 		<div class="footer__logo">
 				<a class="logo__text" href="#" >Territory Cleaning</a>
 		</div>
 		<div class="footer__social">
 			<a class="footer__link" href="#"><img class="footer__img" src="companets/Footer/img/telega.svg" alt="Телеграмм"></a>
			<a class="footer__link" href="#"><img class="footer__img"  src="companets/Footer/img/vk.svg" alt="Вконтакте" ></a>
			<a class="footer__link" href="#"><img class="footer__img" src="companets/Footer/img/email.svg" alt="Почта"></a>
 		</div>
 	</div>
        

      `;

     ROOT_FOOTER.insertAdjacentHTML('beforeend',Footer);




   }


}

const footer = new Footer();
footer.Render();
