
$(document).ready(function () {


    $('.nav-item').click(
        function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 90
            }, 800)
        });


    function burgerMenu(){

        var menuElem= document.getElementById('brg_nav');

        event.preventDefault();
        if(menuElem.className==='close-nav'){
            menuElem.className='open-nav';
        } else {
            menuElem.className='close-nav';
        }
    }

    var brgButton= document.getElementById('brg_btn');

    brgButton.addEventListener('click', burgerMenu, false);



    function temporaryInformation() {
        var windowWidth = window.innerWidth;
        if (windowWidth >= 1440) {
            var newDiv = document.createElement('div');
            newDiv.className = "temp";
            var newP = document.createElement('p');
            newP.className = "info";
            var addTxt = document.createTextNode("Ooopsss max resolution below 1440 px, ");
            var addTxt1= document.createTextNode("the rest of the build.... ");
            var addTxt2= document.createTextNode("sorry about it :)");
            newP.appendChild(addTxt);
            newP.appendChild(addTxt1);
            newP.appendChild(addTxt2);
            var newImg = document.createElement('img');
            newImg.className = "img_info";
            newImg.src = "assets/images/mobile_info.png";

            newDiv.appendChild(newP);
            newDiv.appendChild(newImg);
            var position = document.getElementsByTagName('body')[0];
            var positionBefore= document.getElementsByTagName('footer')[0];
            position.insertBefore(newDiv,positionBefore);

        }
    };

    temporaryInformation();

});
