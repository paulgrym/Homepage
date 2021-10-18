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
        const toggleBackgroundColorButton = document.querySelector(".js-toggleBackgroundButton");
        toggleBackgroundColorButton.addEventListener("click", toggleBackgroundColor);
        welcome();
    };
    init();

}

{
    const togglePhoto = () => {
        const photoSource = document.querySelector(".js-photoElement");
        const photoVisibility = document.querySelector(".js-photoVisibility");

        if (photoSource.src.includes("images/cat.JPG")) {
            photoSource.src = "images/me.jpg";
        } else {
            photoSource.src = "images/cat.JPG";
        };

        if (photoSource.src.includes("images/cat.JPG")) {
            photoVisibility.innerText = "Usuń";
        } else {
            photoVisibility.innerText = "Pokaż";
        };
    }

    const initPhoto = () => {
        const changePhotoButton = document.querySelector(".js-changePhotoButton");
        changePhotoButton.addEventListener("click", togglePhoto)
    };
    initPhoto();
}
