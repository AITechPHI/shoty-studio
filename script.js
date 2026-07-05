// AI Tech PHI Scripts
document.addEventListener("DOMContentLoaded", () => {
    console.log("AI Tech PHI website loaded!");

    const btn = document.querySelector(".btn");

    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const services = document.getElementById("services");

            if (services) {
                services.scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                alert("Welcome to AI Tech PHI!");
            }
        });
    }
});
