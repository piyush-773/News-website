const apiKey = "d0798657b30145c2c352f2fc5f6ba045";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const input = document.querySelector(".search input");
        const btn = document.querySelector(".search button");
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        let today = `${month}-${day}-${year}`

        async function weather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".date").innerHTML = today;
            document.querySelector(".temp").innerHTML = Math.floor(data.main.temp);
            document.querySelector(".humadity").innerHTML = data.main.humidity;
            document.querySelector(".wind").innerHTML = data.wind.speed;
            document.querySelector(".min").innerHTML = Math.floor(data.main.temp_min);
            document.querySelector(".max").innerHTML = Math.floor(data.main.temp_max);
        }
        btn.addEventListener("click", () => {
            weather(input.value);
        })
        input.addEventListener("keypress", function(event) {
            if(event.key === "Enter"){
            weather(input.value);
            }
        })