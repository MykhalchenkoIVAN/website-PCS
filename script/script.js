'use strict'

const images = document.querySelectorAll('.img_how');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseButton = document.querySelector('.close_modal_window ');
const modalImage = document.querySelector('.modal_images');
const body = document.querySelector('.body');
const arrLeft = document.querySelector('.arrow_left');
const arrRight = document.querySelector('.arrow_right');


const addHiddenClass = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
    arrLeft.classList.add('hidden');
    arrRight.classList.add('hidden');
}

window.onclick = function () {
    console.log("click");
    console.log(imageId);
    console.log(modalImage.src);
}
let imageId;
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        modalWindow.classList.remove('hidden');
        overlay.classList.remove('hidden');
        btnCloseButton.classList.remove('hidden');
        arrLeft.classList.remove('hidden');
        arrRight.classList.remove('hidden');
        modalImage.alt = images[i].alt;
        modalImage.src = images[i].src;
        modalWindow.style.marginLeft = (body.clientWidth / 2);
        modalWindow.style.marginTop = (body.clientHeight / 2);
        document.documentElement.scrollTop = 650;
        imageId = images[i].id;
        console.log(modalImage.src);
        imageId++
        console.log(imageId);
        console.log(modalImage.src);
    })
}
arrRight.addEventListener('click', function () {
    imageId++
    if (imageId > 0 && imageId < 9) {
        modalImage.src = `file:///E:/PSC%20site1/img/img${imageId}.png`;
    } else {
        imageId = 1

        modalImage.src = `file:///E:/PSC%20site1/img/img${imageId}.png`;
    }

    console.log(imageId);
    console.log(modalImage.src);
})


arrLeft.addEventListener('click', function () {
    imageId--
    if (imageId > 0 && imageId < 9) {
        modalImage.src = `file:///E:/PSC%20site1/img/img${imageId}.png`;
    } else {
        imageId = 8

        modalImage.src = `file:///E:/PSC%20site1/img/img${imageId}.png`;
    }
    console.log(imageId);
    console.log(modalImage.src);
})
btnCloseButton.addEventListener('click', addHiddenClass);

overlay.addEventListener('click', addHiddenClass);

// Function maps
document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([50.6767405, 17.9740576], 18);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([50.6767405, 17.9740576]).addTo(map);
    marker.bindPopup(`<b>Firma sprzątająca
    PCS</b>`).openPopup();

})