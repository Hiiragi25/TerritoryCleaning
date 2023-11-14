const messages = new Messeges();


class Modal  {

	Render(){

	      let Modal  = ` 
			      <div class="modal__conteiner">
					<i class="bx bx-x modal__closed"></i>
					<form class="modal__form_call">
						<h2 class="modal__title">Заказать звонок</h2>
						<div class="form__conteiner">
							<div class="form__item">
								<input class="form__item_input" type="text" name="name" required placeholder="Имя">
								<span  class="form__item_erorr form__item_erorr--name"></span>
							</div>
							<div class="form__item">
								<input class="form__item_input" type="text" name="telefon"  placeholder="Телефон" data-phone-pattern>
								<span  class="form__item_erorr form__item_erorr--telefon"></span>
							</div>
							<input class="form__item_btn"  type="submit" name="registration" value="Отправить">
						</div>
						
					</form>
					<div class="messeges__second">
                              <h2>Вы уже отправили заявку!!</h2>
						</div>
				</div>

	      `;

	         ROOT_MODAL.insertAdjacentHTML('beforeend',Modal);

	}
	MaskPhone(){
	   	var eventCalllback = function (e) {
	   		var el = e.target,
	   		clearVal = el.dataset.phoneClear,
	   		pattern = el.dataset.phonePattern,
	   		matrix_def = "+7(___) ___-__-__",
	   		matrix = pattern ? pattern : matrix_def,
	   		i = 0,
	   		def = matrix.replace(/\D/g, ""),
	   		val = e.target.value.replace(/\D/g, "");
	   		if (clearVal !== 'false' && e.type === 'blur') {
	   			if (val.length < matrix.match(/([\_\d])/g).length) {
	   				e.target.value = '';
	   				return;
	   			}
	   		}
	   		if (def.length >= val.length) val = def;
	   		e.target.value = matrix.replace(/./g, function (a) {
	   			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
	   		});
	   	}
	   	var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
	   	for (let elem of phone_inputs) {
	   		for (let ev of ['input', 'blur', 'focus']) {
	   			elem.addEventListener(ev, eventCalllback);
	   		}
	   	}
	  }

   Open() {

   	 const openButton = document.querySelector('.hero__btn');
   	 const modal = document.querySelector('.modal');
      
      openButton.addEventListener('click',()=>{
      	 modal.classList.add('modal--open');
      	 	
      }) 
   }
   Close(){

     const closeButton = document.querySelector('.modal__closed');
   	 const modal = document.querySelector('.modal');

      closeButton.addEventListener('click',()=>{
      	 modal.classList.remove('modal--open');
      })
   }


   CheackName(name,error){
       if(name ===''){
          
           error.textContent="Заполните поле";
       }
       else {
       	  error.textContent="";
       	  return true;
       }
   }
  CheackTelefone(telefon,error){
  	
  	 if(telefon.length < 11){
       
        error.textContent = "Номер телефона должен быть 12 цифр";  
  	 }
  	 else {
  	 	 error.textContent = "";
  	 	  return true;  
  	 }

  }


}

const modal = new Modal();
modal.Render();
modal.Open();
modal.MaskPhone();
modal.Close();

const formButton = document.querySelector('.form__item_btn');



const errorName = document.querySelector('.form__item_erorr--name');
const errorTelefon = document.querySelector('.form__item_erorr--telefon')



formButton.addEventListener('click',(e)=>{
	e.preventDefault();

    const userName = document.querySelector("input[name='name']").value.trim();
    const userTelefon = document.querySelector("input[name='telefon']").value.trim();
    const telefonCheack =  modal.CheackTelefone(userTelefon,errorTelefon);
    const userCheack = modal.CheackName(userName,errorName)
  
	if (telefonCheack && userCheack ) {
       

        const modal = document.querySelector('.modal');
        const formConteiner = document.querySelector('.modal__form_call');
        const formMesseges = document.querySelector('.messeges__second'); 

        modal.classList.remove('modal--open');
        
        formConteiner.classList.add('modal__form_call--hidden');
        formMesseges.classList.add('messeges__second--active');

        messages.Show();
        messages.Hidden();

	}
});





