const img = document.querySelectorAll(".img img");
const modal1 = document.querySelector(".modal1");
const modal1Img = document.querySelector(".modalImg");
const modal1Txt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

img.forEach((image, index) => {
  
  image.addEventListener("click", () => {
    
    modalImg.src = image.src;
    modalTxt.innerHTML = image.alt;
    modal1.classList.add("appear");

    let imageIndex = index;
    let next = imageIndex++;
    let prev = imageIndex--;

    window.addEventListener("keyup", (e) => {
      // if (next >= img.length) {
      //         next = 0;
      //       } else if (prev < 0) {
      //         prev = img.length - 1;
      //       }

      if (e.keyCode === 37) {
        modalImg.src = img[prev].src;
        modalTxt.innerHTML = img[prev].alt;
        prev--;
        next = prev + 2;
      } else if (e.keyCode === 39) {
        modalImg.src = img[next].src;
        modalTxt.innerHTML = img[next].alt;
        next++;
        prev = next - 2;
      } else if (e.keyCode === 27) {
        modal1.classList.remove("appear");
      }
    });

    prevBtn.addEventListener("click", () => {
      modalImg.src = img[prev].src;
      modalTxt.innerHTML = img[prev].alt;
      prev--;
      next = prev + 2;
    });

    nextBtn.addEventListener("click", () => {
      modalImg.src = img[next].src;
      modalTxt.innerHTML = img[next].alt;
      next++;
      prev = next - 2;
    });

    close.addEventListener("click", () => {
      modal1.classList.remove("appear");
    });
  });
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
      modal1.classList.remove("appear");
    }); 