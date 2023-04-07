// Задание 3
// Создать html-страницу со светофором и кнопкой, которая
// переключает светофор на следующий цвет.



btn.onclick = function() {
   if (div1.style.background == 'red') {
         div1.style.background = 'gray'
         div2.style.background = 'gold'
   } else if (div2.style.background == 'gold') {
         div2.style.background = 'gray'
         div3.style.background = 'green'
   } else {
         div1.style.background = 'red'
         div3.style.background = 'gray'
   }
}
