// Footer year and last modified
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    // Static weather values
    const temp = 24; // °C
    const speed = 10; // km/h

    document.getElementById("temp").textContent = temp;
    document.getElementById("speed").textContent = speed;

    // Wind chill calculation (Celsius)
    function calculateWindChill(t, s) {
        return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
    }

    let windChill = "N/A";
    if (temp <= 10 && speed > 4.8) {
        windChill = calculateWindChill(temp, speed) + " °C";
    }
    document.getElementById("windchill").textContent = windChill;
});

