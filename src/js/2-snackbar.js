
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");


form.addEventListener("submit", (event) => {
  event.preventDefault(); 

 
  const delay = parseInt(form.elements.delay.value); 
  const state = form.elements.state.value; // 'fulfilled' або 'rejected'


  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay); // true
      } else {
        reject(delay); // false
      }
    }, delay);
  });

 
  promise
    .then((delay) => {
      
      iziToast.success({
        title: "✅ Success",
        message: `Fulfilled promise in ${delay}ms`,
        position: "topRight",
      });
    })
    .catch((delay) => {
      
      iziToast.error({
        title: "❌ Error",
        message: `Rejected promise in ${delay}ms`,
        position: "topRight",
      });
    });


	
  form.reset();
});