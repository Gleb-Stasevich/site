let checkHeader = true;

const preloader = document.querySelector('.preloader');

const header = document.querySelector('header');

const headerLinks = document.querySelectorAll('.header-link');

const sectionPosition = document.querySelectorAll('.header-navigation');

const buttons = document.querySelectorAll('.card-button');

window.onload = function () {
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1500);
};

for (let button of buttons) {
    button.addEventListener('click', function () {
        button.style.display = 'none';
    })
};

/** Высчитываем координаты до блоков (секций); 
*   178 px - header + margin секций; 
*/

function getCoords(sections) {
    let array = [];
    for (let section of sections) {
        let sectionPosition = section.getBoundingClientRect();
        let topPosition = sectionPosition.top + window.pageYOffset - 178;
        array.push(topPosition);

    }
    return array;
};

setTimeout(() => console.log(getCoords(sectionPosition)), 1500);

let coords = getCoords(sectionPosition);
console.log(coords);

setTimeout(showHeader, 1550);

/**если pageYOffset находится над секцией, меняем цвет ссылки headera */

function showHeader() {

    document.addEventListener('scroll', function (event) {

        if (checkHeader) {

            if (window.pageYOffset >= coords[0] && window.pageYOffset < coords[1]) {

                for (let i = 0; i < headerLinks.length; i++) {
                    if (i == 1) {
                        headerLinks[i].style.color = 'black';
                    } else {
                        headerLinks[i].style.color = 'white';
                    }
                }

            } else if (window.pageYOffset >= coords[1] && window.pageYOffset < coords[2]) {
                for (let i = 0; i < headerLinks.length; i++) {
                    if (i == 2) {
                        headerLinks[i].style.color = 'black';
                    } else {
                        headerLinks[i].style.color = 'white';
                    }
                }
            }
            else if (window.pageYOffset >= coords[2] && window.pageYOffset < coords[3]) {
                for (let i = 0; i < headerLinks.length; i++) {
                    if (i == 3) {
                        headerLinks[i].style.color = 'black';
                    } else {
                        headerLinks[i].style.color = 'white';
                    }
                }
            }
            else if (window.pageYOffset >= coords[3] && window.pageYOffset < coords[4]) {
                for (let i = 0; i < headerLinks.length; i++) {
                    if (i == 4) {
                        headerLinks[i].style.color = 'black';
                    } else {
                        headerLinks[i].style.color = 'white';
                    }
                }
            }
            else if (window.pageYOffset >= coords[4] && window.pageYOffset < coords[5]) {
                for (let i = 0; i < headerLinks.length; i++) {
                    if (i == 5) {
                        headerLinks[i].style.color = 'black';
                    } else {
                        headerLinks[i].style.color = 'white';
                    }
                }
            }
            else if (window.pageYOffset >= coords[5]) {
                for (let i = 0; i < headerLinks.length; i++) {
                    if (i == 6) {
                        headerLinks[i].style.color = 'black';
                    } else {
                        headerLinks[i].style.color = 'white';
                    }
                }
            }
            else {
                headerLinks[1].style.color = 'white';
            }


            checkHeader = false;

            setTimeout(() => checkHeader = true, 100);
        }

        if (window.pageYOffset <= 200) {
            header.style.top = -313 + 'px';
            return;
        }
        if (header.style.top == '0px') return;

        header.style.top = '0px';
    })
};

/** Плавный скролл */

SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 600,
    // Размер шага в пикселях
    stepSize: 160,

    // Дополнительные настройки:

    // Ускорение
    accelerationDelta: 250,
    // Максимальное ускорение
    accelerationMax: 3,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
});