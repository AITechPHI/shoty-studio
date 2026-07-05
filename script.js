alert("JavaScript Loaded!");

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");

    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const services = document.getElementById("services");

            if (services) {
                services.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
});
