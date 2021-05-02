window.addEventListener('load', function(){

  let myForm = document.querySelector('#tlgmForm');

  myForm.addEventListener('submit', function(e){
    e.preventDefault();
    const form = this;
    const formData = new FormData(form);

    const resp = fetch('telegram.php', {
      method: 'POST',
      body: formData
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка по адресу ${response.url}, статус ошибки ${response.status}`);
      }
      else {
        /* Действия при успешной отправке*/
        // console.log(`Успешная отправка формы. Статус: ${response.status}`);
        
        form.querySelector('.form__success').classList.add('form__success--active');
        setTimeout(function(){
          form.reset();
          form.querySelector('.form__success').classList.remove('form__success--active');
        },2000)
        
        
      } 
    })
    .catch((err) => console.error(err));
  })

})