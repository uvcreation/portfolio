const box = document.querySelectorAll(".box img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

box.forEach((im, index) => {
  im.addEventListener("click", () => {
    modalImg.src = im.src;
    modalTxt.innerHTML = im.alt;
    modal.classList.add("appear");

    let imageIndex = index;
    let next = imageIndex++;
    let prev = imageIndex--;

    window.addEventListener("keyup", (e) => {
      /*if (next >= box.length) {
              next = 0;
            } else if (prev < 0) {
              prev = box.length - 1;
            }*/

      if (e.keyCode === 37) {
        modalImg.src = box[prev].src;
        modalTxt.innerHTML = box[prev].alt;
        prev--;
        next = prev + 2;
      } else if (e.keyCode === 39) {
        modalImg.src = box[next].src;
        modalTxt.innerHTML = box[next].alt;
        next++;
        prev = next - 2;
      } else if (e.keyCode === 27) {
        modal.classList.remove("appear");
      }
    });

    prevBtn.addEventListener("click", () => {
      modalImg.src = box[prev].src;
      modalTxt.innerHTML = box[prev].alt;
      prev--;
      next = prev + 2;
    });

    nextBtn.addEventListener("click", () => {
      modalImg.src = box[next].src;
      modalTxt.innerHTML = box[next].alt;
      next++;
      prev = next - 2;
    });

    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
  });
});
