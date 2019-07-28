 window.onload = () => {
     var first = document.querySelector('.fisrtForm');
     var scnd = document.querySelector('.secondForm');
     var deal = document.querySelector('.deal');
     var working = document.querySelector('.working');
     const one = document.querySelector('#one');
     const two = document.querySelector('#two');
     const three = document.querySelector('#three');
     one.onclick = (e) => {
         e.preventDefault();
         first.style.display = 'none';
         scnd.style.display = 'block';
         deal.style.display = 'none';
         working.style.display = 'none';
     }
     two.onclick = (e) => {
         e.preventDefault();
         scnd.style.display = 'none';
         first.style.display = 'none';
         deal.style.display = 'block';
         working.style.display = 'none';
     }
     three.onclick = (e) => {
         e.preventDefault();
         scnd.style.display = 'none';
         first.style.display = 'none';
         deal.style.display = 'none';
         working.style.display = 'block';
     }


 }