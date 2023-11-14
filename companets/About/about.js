class About  {

   Render(){

      let About = ` 

            <h2 class="section__title"> О нас</h2>
		 	<div class="about__conteiner" data-aos="zoom-out-down"></div>
      `;

     ROOT_ABOUT.insertAdjacentHTML('beforeend',About);
     const aboutConteiner = document.querySelector('.about__conteiner');


    axios.get(URL_ABOUT)

           .then(function(res){
                
           for(let i in res.data){

                  let aboutContent =  `

		                  <div class="about__item">
				 		  	<i class="bx ${res.data[i].icon}"> </i>
				 		 	  <h3 class="about__title">${res.data[i].title}</h3>
				 		 	 <p class="about__text">${res.data[i].text}</p>	 
				 		 </div>
                  `;

                  aboutConteiner.insertAdjacentHTML('beforeend',aboutContent);
             }
     })

  }







}


const about = new About();
about.Render();
