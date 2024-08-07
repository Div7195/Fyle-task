document.addEventListener("DOMContentLoaded", function() {


        const projectImage = document.getElementById('projectImage').querySelector('img');
        const firstProject = document.getElementById('firstProject')
        const secondProject = document.getElementById('secondProject')
        const thirdProject = document.getElementById('thirdProject')

        firstProject.addEventListener('click', () => {
            projectImage.src = './assets/card2.png'
            firstProject.style.color = '#ffffff'
            firstProject.style.backgroundColor = '#FF3147'
            secondProject.style.color = '#000000'
            secondProject.style.backgroundColor = '#FFFFFF'
            thirdProject.style.color = '#000000'
            thirdProject.style.backgroundColor = '#FFFFFF'
        });

        secondProject.addEventListener('click', () => {
            projectImage.src = './assets/card4.png'
            secondProject.style.color = '#ffffff'
            secondProject.style.backgroundColor = '#FF3147'
            firstProject.style.color = '#000000'
            firstProject.style.backgroundColor = '#FFFFFF'
            thirdProject.style.color = '#000000'
            thirdProject.style.backgroundColor = '#FFFFFF'
        });

        thirdProject.addEventListener('click', () => {
            projectImage.src = './assets/card3.png'
            thirdProject.style.color = '#ffffff'
            thirdProject.style.backgroundColor = '#FF3147'
            secondProject.style.color = '#000000'
            secondProject.style.backgroundColor = '#FFFFFF'
            firstProject.style.color = '#000000'
            firstProject.style.backgroundColor = '#FFFFFF'
        });
        const clickableDivs = document.querySelectorAll('.redirect-div');

        
        clickableDivs.forEach(div => {
            div.addEventListener('click', function() {
                window.open('https://www.fylehq.com', '_blank');
                
            });
        });
        
        
        const cardsContainer = document.getElementById('cardsContainer');
        const firstDotImg = document.querySelector('#firstDot img');
        const secondDotImg = document.querySelector('#secondDot img');
        const thirdDotImg = document.querySelector('#thirdDot img');
        function updateDotColors(visibleDot) {
            switch (visibleDot) {
                case 1:
                    firstDotImg.src = './assets/red-dot.png';
                    secondDotImg.src = './assets/blackdot.png';
                    thirdDotImg.src = './assets/blackdot.png';
                    break;
                case 2:
                    firstDotImg.src = './assets/blackdot.png';
                    secondDotImg.src = './assets/red-dot.png';
                    thirdDotImg.src = './assets/blackdot.png';
                    break;
                case 3:
                    firstDotImg.src = './assets/blackdot.png';
                    secondDotImg.src = './assets/blackdot.png';
                    thirdDotImg.src = './assets/red-dot.png';
                    break;
                default:
                    break;
            }
        }

        
        cardsContainer.addEventListener('scroll', function() {
            const cardWidth = cardsContainer.clientWidth;
            const scrollLeft = cardsContainer.scrollLeft;
            const visibleCards = Math.ceil(scrollLeft / cardWidth);

            updateDotColors(visibleCards);
        });

        
        updateDotColors(1);

        const contactBtn = document.getElementById('contact-btn');
        const popupContainer = document.getElementById('popupContainer');
        popupContainer.addEventListener('click', function(){
            closePopup()
        } )
        contactBtn.addEventListener('click', function(){
            openPopup()
        } )
        function openPopup() {
            var popup = document.getElementById('popupContainer');
            popup.style.display = 'flex';
            setTimeout(function() {
                popup.style.opacity = '1';
            }, 10); 
        }
        function closePopup() {
            var popup = document.getElementById('popupContainer');
            popup.style.opacity = '0';
            setTimeout(function() {
                popup.style.display = 'none';
            }, 300); 
        }
});

