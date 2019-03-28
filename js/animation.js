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
    let aTexte = document.getElementsByClassName("texte");
    window.addEventListener("scroll", function(){
        var windowPos = window.scrollY;
        for(let i = 0; i < aImg.length; i++){
            if(windowPos >= aImg[i].offsetTop - (aImg[i].offsetHeight * 2)){
                aImg[i].classList.add('imgApparait');
            }
        }
        for(let i = 0; i < aTexte.length; i++){
            if(windowPos >= aTexte[i].offsetTop - (aTexte[i].offsetHeight)){
                aTexte[i].classList.add('texteApparait');
            }
        }
    });
})