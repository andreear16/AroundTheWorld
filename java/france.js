//SVG
document.addEventListener("DOMContentLoaded", () => {
    const mapInfo = document.getElementById("mapInfo");

    // Informații despre locații
    const locations = {
        nice: "Nice is known for its beautiful Promenade des Anglais and charming Old Town.",
        cannes: "Cannes is famous for its International Film Festival and luxurious vibe.",
        monaco: "Monaco offers opulence, with highlights like the Monte Carlo Casino and Grand Prix."
    };

    // Adaugă evenimente pentru locații
    document.querySelectorAll(".location").forEach(location => {
        location.addEventListener("click", (e) => {
            const locationId = e.target.id;
            mapInfo.textContent = locations[locationId] || "Information not available.";
        });
    });
});
