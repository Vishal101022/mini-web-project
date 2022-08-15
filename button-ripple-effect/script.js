const button_ = document.querySelector(".button");

button_.addEventListener("mouseover", (event) => {
    const x = event.pageX - button_.offsetLeft;
    const y = event.pageY - button_.offsetTop;

    button_.style.setProperty("--xPos", x + "px" );
    button_.style.setProperty("--yPos", y + "px");
});