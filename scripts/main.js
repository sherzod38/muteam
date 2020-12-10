var mobil = document.querySelector('#mobil');
var opened = document.querySelector('.mobil-menu');
var close = document.querySelector('#close');


mobil.addEventListener('click', function() {
  opened.classList.toggle('open')
});

close.addEventListener('click', function() {
  opened.classList.remove('open')
});
