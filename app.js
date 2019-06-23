window.addEventListener("load",()=>{
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api=`${proxy}https://api.darksky.net/forecast/c3bc6195d4ef71460f4b10c65cd8ca14/37.8267,-122.4233`;

        })
    }
})