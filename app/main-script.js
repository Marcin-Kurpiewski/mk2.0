$(document).ready(function () {
    $('.nav--item').click(
        function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 90
            }, 800);
            $('')
        });

    function burgerMenu() {

        var menuElem = document.getElementById('main_nav'),
            nav_btn = document.getElementById('btn-close');
            console.log(nav_btn);
        event.preventDefault();
        if (menuElem.className === 'close--nav') {
            menuElem.className = 'open--nav';
            nav_btn.className = 'fa fa-times fa-3x';
        } else {
            menuElem.className = 'close--nav';
            nav_btn.className = 'fa fa-bars fa-3x';
        }

    }

    var brgButton = document.getElementById('brg_btn');
    brgButton.addEventListener('click', burgerMenu, false);



    //
    // function temporaryInformation() {
    //     var windowWidth = window.innerWidth;
    //     if (windowWidth >= 2550) {
    //         var newDiv = document.createElement('div');
    //         newDiv.className = "temp";
    //         var newP = document.createElement('p');
    //         newP.className = "info";
    //         var addTxt = document.createTextNode("Ooopsss max resolution below 1440 px, ");
    //         var addTxt1 = document.createTextNode("the rest of the build.... ");
    //         var addTxt2 = document.createTextNode("sorry about it :)");
    //         newP.appendChild(addTxt);
    //         newP.appendChild(addTxt1);
    //         newP.appendChild(addTxt2);
    //         var newImg = document.createElement('img');
    //         newImg.className = "img_info";
    //         newImg.src = "assets/images/mobile_info.png";
    //
    //         newDiv.appendChild(newP);
    //         newDiv.appendChild(newImg);
    //         var position = document.getElementsByTagName('body')[0];
    //         var positionBefore = document.getElementsByTagName('footer')[0];
    //         position.insertBefore(newDiv, positionBefore);
    //
    //     }
    // };
    //
    // temporaryInformation();

});



var data= [
    {name: 'Github', used: "It\s a lot lines of code", link:'https://github.com/Marcin-Kurpiewski/', img:'github.jpg', color:'red'},
    {name: 'bitbucket', used: 'Another repo', link:'https://bitbucket.org/kurus/', img:'bitbucket.jpg', color:'blue'},
    {name: 'barista', used: 'HTML5, SCSS, BS4, GULP, JS', link:'https://bitbucket.org/kurus/brown_rabbit', img:'barista.jpg',color:'red'},
    {name: 'maxstudio', used: 'WORDPRESS', link:'http://maxstudio.mkurpiewski.com/', img:'maxstudio.jpg', color:'blue'},
    {name: 'lux-clean.dk', used: 'HTML, CSS, BS3', link:'http://marcin-kurpiewski.github.io/www.lux-clean.dk/', img:'lux-clean.jpg', color:'blue'},
    {name: 'event landing page', used: 'HTML5, CSS3, JS', link:'http://mkurpiewski.com/landing/', img:'event-landing.jpg', color:'blue'},
    {name: 'eventapp', used: ', HTML, CSS, Angular js', link:'http://mkurpiewski.com/event-app/', img:'event-app.jpg', color:'red'},
    {name: 'casino game', used: 'HTML, CSS, JS ', link:'https://marcin-kurpiewski.github.io/Casino-game/', img:'casino-game.jpg', color:'red'}
];
function portfolioTemplate(data){

    for ( var i=0; i < data.length; i++) {


        var list = document.createElement('li');
        list.setAttribute('class', 'port--item box' +[i+1]);

        var h3 = document.createElement('h3');
        h3.setAttribute('class', 'port--heading');
        h3.appendChild(document.createTextNode("" + data[i].name + ""));

        var ul = document.createElement('ul');
        var li1 = document.createElement('li');
            li1.setAttribute('class', 'dynamic--list');
        li1.appendChild(h3);
        ul.appendChild(li1);


        var next= document.getElementsByClassName('dynamic--list');

        var li2 = document.createElement('li');
        li2.appendChild(document.createTextNode("" + data[i].used));
        ul.appendChild(li2);

        var li3 = document.createElement('li'),
            img= document.createElement('img');
        li3.setAttribute('class', 'point');
        img.setAttribute('src', 'images/5_Portfolio/point_sm.png');
        img.setAttribute('class', 'point');
        li3.appendChild(img);
        ul.appendChild(li3);

        var li4 = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href', data[i].link);
        a.appendChild(document.createTextNode("{see more}"));
        li4.appendChild(a);
        ul.appendChild(li4);



        var getUl = document.getElementById('port__list');
        getUl.appendChild(list);
        list.appendChild(ul);

        var newNodeList=[];

        newNodeList.push(list[i]);


    }


}