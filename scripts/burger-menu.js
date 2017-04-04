window.burgerMenu = (burgerId, itemId, classes) => {
    const burger = document.getElementById(burgerId);
    const item = document.getElementById(itemId);

    burger.addEventListener("click", () => {
        if(item.className.indexOf(classes) > -1){
            item.className = item.className.replace(classes, "");
        }else{
            item.className += " " + classes;
        }
    });

    window.addEventListener("resize", () => {
        if(item.className.indexOf(classes) < 0 && window.innerWidth > 900)
            item.className += classes;
    });
};