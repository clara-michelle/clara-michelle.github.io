// document.getElementById("volunteer_button").addEventListener("click", displayDate);
function openForm() {
    document.getElementById("volunteer_form").style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
    const charityName = document.querySelector("h1").textContent.trim();
    const checkboxes = document.querySelectorAll("#volunteer_form input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
        if (checkbox.value === charityName) {
            checkbox.checked = true;
        }
    });
});
