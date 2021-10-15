const openBtn = document.getElementById('open-modal'),
      closeBtn = document.getElementById('close-modal'),
      modalBtn = document.getElementById('modal-btn'),
      modal = document.getElementById('modal'),
      form =document.getElementById('form'),
      body = document.body;

var inputTime = document.getElementById('time'),
    inputDate = document.getElementById('date-input'),
    date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    currentTime,
    bodyOpen = document.querySelectorAll('.open'),
    currentDate,
    validTime = false, 
    validDate = false; 

function correctDate(){  //date correct form
    if((month + 1) < 10){
        currentDate = '0'+ (month + 1) + '/' + day +'/' + year;
    }else if((month + 1) < 10 && day < 10){
        currentDate = '0'+ (month + 1) + '/'+ '0' + day +'/' + year;
    }else if( day < 10){
        currentDate = (month + 1) + '/'+ '0' + day +'/' + year;
    }else{
        currentDate = (month + 1) + '/' + day +'/' + year;
    }
}

if(hours < 10 && minutes < 10){  //time correct form
    currentTime = '0' + hours + ':' + '0' + minutes;
}else if(hours < 10 ){    
    currentTime ='0' + hours + ':' + minutes;
}else if(minutes < 10){
    currentTime = hours + ':' + '0' + minutes;
}else{
    currentTime = hours + ':' + minutes; 
}

function hideModal(e){  
    const {target} = e; 
    if(target.closest('#modal') && !target.closest('#close-modal') || target.closest('.datedropper')){
        return;
    }
    body.classList.remove('open')
    document.body.removeEventListener('click', hideModal);
}

openBtn.addEventListener('click', (e)=>{
    body.classList.add('open');
    e.stopPropagation(); 

    document.body.addEventListener('click', hideModal); //find click after open modal 
});
function checkTime(){
    if(inputTime.value === '' || inputTime.value > '17:30' ||
        inputDate.value === currentDate && inputTime.value < currentTime){
        inputTime.classList.add('notvalid');
        validTime = false;
    }else if(inputDate.value === '' &&  inputTime !== ''){
        inputDate.classList.add('notvalid');
    }else{
        inputTime.classList.remove('notvalid');
        validTime = true;
    }
  }
$('#date-input').dateDropper({
    loopYears: false,
    hideYear:true,
    lock:'from',
    lang:'ru',
    onChange:function(){
        checkTime();

         correctDate();
         if(inputDate.value === ''){ //check inputDate (onChange)
            inputDate.classList.add('notvalid');
            validDate = false;
        }else{
            inputDate.classList.remove('notvalid');
            validDate = true;

        }
    }
  });


inputTime.addEventListener('input', function(){  //check inputTime (onInput)
     checkTime();
});

modalBtn.addEventListener('click', function(e){   //check inputs before submit
   if(validTime && validDate){
       alert('Вы записаны ' + inputDate.value + ' на ' + inputTime.value)
   }else{
       e.preventDefault();
       alert(false);
   }
})
