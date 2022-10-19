'use strict';

  //------------task1  в случае,если не будет надписи "2900/1200 р на причале",то цена будет выровнена посередине относительно кнопки "подробнее"
  const centerPrice = () => {
   const cardBottom = Array.from(document.querySelectorAll(".card__bottom"));

    cardBottom.forEach((item) => {
      if (!item.querySelector(".card__bottom-price--expensive")) {
        item.style.flexDirection = "column";
      }
    });
  };

  centerPrice();
  /* ------------------------------------------------------------ */







  ///-------task2 В случае если время не помещается на одной строке,то я скрываю элементы, которые не вошли в строкую.
  window.addEventListener('resize', showMore);
  window.addEventListener('load', showMore);

  const showBtn = document.querySelectorAll('.card__time-btn')
  const time = Array.from(document.querySelectorAll('.card__time'));
  const timeLineHeight = 32;


  function showMore() {
    let height = 0;
    for (let i = 0; i < time.length; i++) {
     
     height = parseFloat(getComputedStyle(time[i]).height);

      //проверям высоту строки 
      if (height > timeLineHeight) {
       
        hideTime((time[i].children), time[i], height)
        
        //находим кнопку "показать еще" и делаем ее видимой
        time[i].closest('.card__info').querySelector('.card__time-btn').classList.add('card__time-btn--active');


        //находим кнопку "скрыть" и делаем ее невидимой
        if (time[i].closest('.card__info').querySelector('.card__time-close-btn--active')) {
          time[i].closest('.card__info').querySelector('.card__time-close-btn--active').classList.remove('card__time-close-btn--active');
        }
      }
    }
  }


  function hideTime(array, parent, height) {

    for (let i = array.length - 1; i >= 0; i--) {
      height = parseFloat( getComputedStyle(parent).height)
      if (height > timeLineHeight) {
        array[i].classList.add('card__time-info--hide');
      }
    }
  }


  showBtn.forEach((btn) => {
    btn.addEventListener('click', showHidden)
  })

  //функция показывает скрытое время
  function showHidden(e) {
    //находим скрытые элементы
    const hiddenTime = (e.target.closest('.card__info').querySelectorAll('.card__time-info--hide'))

    for (let i = 0; i < hiddenTime.length; i++) {
      hiddenTime[i].classList.remove('card__time-info--hide')
      //скрываем кнопку 'показать еще'
      e.target.closest('.card__time-btn').classList.remove('card__time-btn--active')

      // показываем кнопку скрыть
      e.target.closest('.card__info').querySelector('.card__time-close-btn').classList.add('card__time-close-btn--active')
    }
  }


  const hideBtn = Array.from(document.querySelectorAll('.card__time-close-btn'));
//вызываем функцию "showMore" по клику на "скрыть"
  hideBtn.forEach((btn) => {
    btn.addEventListener('click', showMore)
  })


/*---------------------------------------------------------------------       */