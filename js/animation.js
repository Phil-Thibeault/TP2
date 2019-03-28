window.addEventListener('load',function(){
    console.log('passe')
    let elmTitre = document.querySelector('.site-branding .site-title')
    let elmDescription = document.querySelector('.site-branding .site-description')

    elmTitre.classList.add('anim1')
    elmDescription.classList.add('anim3')

    /**
     * Animation personnalisée
     */
    let aImg = document.querySelectorAll("img");
    window.addEventListener("scroll", function(){
        var windowPos = window.scrollY;
        var offset = aImg[0].offsetTop;
        console.log(offset);
        console.log(windowPos);
        for(let i = 0; i < aImg.length; i++){
            if(windowPos >= aImg[i].offsetTop - (aImg[i].offsetHeight * 2)){
                aImg[i].classList.add('imgApparait');
            }
        }
    });
})