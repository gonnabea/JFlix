const root = document.getElementById("root");
 
    const HeaderControll = () => {
        root.addEventListener("contextmenu", showHeader)
    }
    
    const showHeader = () => {
        const root = document.getElementById("root");
        root.removeEventListener("mousemove", showHeader);
        const header = document.getElementById("header");
        header.style.animation = "showHeader 0.3s forwards";
        const timeout = setTimeout(hideHeader, 2000);
        console.log(timeout)
    }
    
    const hideHeader = () => {

        const root = document.getElementById("root");
        const header = document.getElementById("header");
        header.style.animation = "hideHeader 0.3s forwards";
        root.addEventListener("mousemove", showHeader)
    }

    export default HeaderControll;