let galleryImages = document.querySelectorAll(".gallery-img");
let imageType = ".jpg";



if (galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            
            let imageNumber = index + 1;

            let container = document.body;

            let imgWindowBack = document.createElement("div");
            container.appendChild(imgWindowBack);
            imgWindowBack.setAttribute("id", "back-div-popUp");


            let imgContent = document.createElement("img");
            imgWindowBack.appendChild(imgContent);
            imgContent.setAttribute("id", "back-img-popUp");
            imgContent.setAttribute("src", "img/img" + imageNumber + imageType);


            let imgCloseBtn = document.createElement("i");
            imgWindowBack.appendChild(imgCloseBtn);
            imgCloseBtn.setAttribute("class", "fas fa-times-circle");
            imgCloseBtn.setAttribute("onclick", "closeImg()");


            let nextBtn = document.createElement("button");
            nextBtn.textContent = 'NEXT';
            nextBtn.classList.add('next-btn');
            imgWindowBack.appendChild(nextBtn);

            nextBtn.addEventListener("click", () => {
                imageNumber > 5 ? imageNumber = 1 : imageNumber++;
                imgContent.setAttribute("src", "img/img" + imageNumber + imageType);
            });

            let prevBtn = document.createElement("button");
            prevBtn.textContent = 'PREV';
            prevBtn.classList.add('prev-btn');
            imgWindowBack.appendChild(prevBtn);

            prevBtn.addEventListener("click", () => {
                imageNumber < 2 ? imageNumber = 6 : imageNumber--;
                imgContent.setAttribute("src", "img/img" + imageNumber + imageType);
            });
        }
    }

    )
}


function closeImg() {
    document.querySelector("#back-div-popUp").remove();
}

function nextImg(e) {
    console.log(e);
}