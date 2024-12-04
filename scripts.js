document.querySelectorAll(".add-event-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("addEventPopup").classList.remove("hidden");
  });
});

document.querySelector(".close-popup").addEventListener("click", () => {
  document.getElementById("addEventPopup").classList.add("hidden");
});

document.querySelector(".cancel-btn").addEventListener("click", () => {
  document.getElementById("addEventPopup").classList.add("hidden");
});
