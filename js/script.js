{
    const welcome = () => {
        console.log("Cześć!");
    };

    const toggleBackgroundColor = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("body--grey");
        body.classList.contains("body--grey") ? (themeName.innerText = "białe") : (themeName.innerText = "szare");
    };

    const init = () => {
        const changeColorButton = document.querySelector(".js-changeColorButton");
        changeColorButton.addEventListener("click", toggleBackgroundColor);
        welcome();
    };
    init();

}

{
    const togglePhoto = () => {
        const photoSource = document.querySelector(".js-photoSrc");
        const photoVisibility = document.querySelector(".js-photoVisibility");
        photoSource.src.includes("images/cat.JPG") ? (photoSource.src = "images/me.jpg") : (photoSource.src = "images/cat.JPG");
        photoVisibility.innerText = photoSource.src.includes("images/cat.JPG") ? ("Usuń") : ("Pokaż");
    }

    const initPhoto = () => {
        const changePhotoButton = document.querySelector(".js-changePhotoButton");
        changePhotoButton.addEventListener("click", togglePhoto)
    };
    initPhoto();
}
