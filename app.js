window.addEventListener("load",()=>{
    let long;
    let lat;
    let locationTimezone = document.querySelector(".location-timezone");
    let tempDegree = document.querySelector(".temp-degree");
    let tempDescription = document.querySelector(".temp-description");
    let degreeSection = document.querySelector(".degree-section");
    const degreeSymbol = document.querySelector(".degree-section span");

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api=`${proxy}https://api.darksky.net/forecast/c3bc6195d4ef71460f4b10c65cd8ca14/${lat},${long}`;
            
            fetch(api).then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary, icon}= data.currently;
                //SET DOM Elements
                locationTimezone.textContent=data.timezone;
                tempDegree.textContent=temperature;
                tempDescription.textContent=summary;
                //Set Icon
                setIcons(icon,document.querySelector(".icon"));

                //Change F to C
                degreeSection.addEventListener('click',()=>{
                    
                    if(degreeSymbol.textContent=="F")
                    {
                        degreeSymbol.textContent="C";
                    }
                    else
                    {
                        degreeSymbol.textContent="F";
                    }
                })
            });
        });
    }

    function setIcons(icon, iconID)
    {
        const skycons = new Skycons({color:"white"});
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);
    }
});