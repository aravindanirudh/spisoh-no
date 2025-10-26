/* Planned Date of Event Modification */
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();

  const minDateAllowed = new Date(today);
  minDateAllowed.setDate(today.getDate() + 3);

  flatpickr("#event-date", {
    dateFormat: "d-m-Y",
    minDate: minDateAllowed,
    disableMobile: true
  });
});