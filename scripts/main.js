var mobil = document.querySelector('#mobil');
var opened = document.querySelector('.mobil-menu');
var close = document.querySelector('#close');
var overlay = document.querySelector('.overlay');

var titlen = document.querySelector('#spane');
var titlenm = document.querySelector('#spanem');
var openem = document.querySelector('.span__inner');


titlen.addEventListener('click', function(e) {
  // alert('salom');
  e.preventDefault();
  openem.classList.toggle('oven')

});
titlenm.addEventListener('click', function(e) {
  // alert('salom');
  e.preventDefault();
  openem.classList.remove('oven')

});
var over = document.querySelectorAll(".spanem")
console.log(over);
var plus = document.querySelectorAll(".spane")
var rotate = document.querySelectorAll(".span__inner")


function allClassRemover(clickedElement) {
    over.forEach(item => {
      console.log(index)
        if (item.dataset.itemOrder !== clickedElement.dataset.itemOrder) {
            item.classList.remove('oven')

        }

        else {
            item.classList.toggle('oven')
        }
 
    })
    plus.forEach(item2 =>{
        if (item2.dataset.itemOrder !== clickedElement.dataset.itemOrder) {
            item2.classList.remove("oven")
        }
        else {
            item2.classList.toggle("oven")
        }
    }) 
}

rotate.forEach((item, index) => {
  item.classList.add('oven');
  item.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(index)
    // allClassRemover(item,item2);

    })
});



mobil.addEventListener('click', function() {
  opened.classList.toggle('open')
  overlay.classList.toggle('vizible')
});

overlay.addEventListener('click', function() {
  overlay.classList.remove('vizible')
    opened.classList.remove('open')

});

close.addEventListener('click', function() {
  opened.classList.remove('open')
  overlay.classList.remove('vizible')

});

// var personCardIcon = document.querySelectorAll('.item-icon');

// console.log(personCardIcon);

// personCardIcon.forEach(item=> {
//   console.log(item);
// })


var plusIcons = document.querySelectorAll('.spane');
var closeIcons = document.querySelectorAll('.spanem');
var spanInner = Array.from(document.querySelectorAll('.span__inner'));
var firstImg = Array.from(document.querySelectorAll('.first-img'));


plusIcons.forEach((icon, index) => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    firstImg[index].classList.remove('oven1');
  });
});

function removeAllOvens() {
  firstImg.forEach((el, index) => {
    el.classList.remove('oven1');
  });
};

plusIcons.forEach((icon, index) => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    removeAllOvens();
    spanInner[index].classList.add('oven');
  });
});

closeIcons.forEach((icon, index) => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    spanInner[index].classList.remove('oven');
  });
});

function removeAllOvens() {
  spanInner.forEach((el, index) => {
    el.classList.remove('oven');
  });
}

  plusIcons.addEventListener('click', function() {
    firstImg.classList.remove('oven');
  });