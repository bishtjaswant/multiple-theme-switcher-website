const themeswitcher= document.querySelector('#themeswitcher');

navigator.geolocation.getCurrentPosition((position) => {
    var sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);
    var sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);

    if (isDay(sunrise,sunset)) {
        setTheme("theme-light");
    }else{
        setTheme("theme-dark");

    }


    function isDay(sunrise,sunset){
        let now = new Date().getHours();

        return now >=  sunrise.getHours() && now < sunset.getHours();
        
    }
})





const defaultTheme=  localStorage.getItem("theme") || "theme-light";
setTheme(defaultTheme);


themeswitcher.addEventListener('change', (e) => {
   setTheme(e.target.value); 
});


function    setTheme(theme) {
    theme= theme||"theme-light"

    document.documentElement.className=theme;

    localStorage.setItem("theme",theme);
    themeswitcher.value=theme;
}