fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vS8JRp19JXRxlAuvCJMaDErziMS1ojj17eZK89PwUMJeiqovO5nZsWY1yFFFPE9gY6v6qTuMIQI8ptA/pub?output=csv")
  .then(res => res.text())
  .then(data => {

    const rows = data.trim().split(/\r?\n/);
    const headers = rows[0].split(",").map(h => h.trim());

    const books = rows.slice(1).map(row => {
      const values = row.split(",").map(v => v.trim());

      let obj = {};
      headers.forEach((h, i) => {
        obj[h] = values[i];
      });

      return obj;
    });

    // FILTERS (Planned + Genres)
    const finFantasy = books.filter(
      b => b.Status?.trim() === "Completed" &&
           b.Genre?.trim() === "Fantasy"
    );

    const finSciFi = books.filter(
      b => b.Status?.trim() === "Completed" &&
           b.Genre?.trim() === "Sci-Fi"
    );

    const finThriller = books.filter(
      b => b.Status?.trim() === "Completed" &&
           b.Genre?.trim() === "Thriller"
    );

    const finMystery = books.filter(
      b => b.Status?.trim() === "Completed" &&
           b.Genre?.trim() === "Mystery"
    );

    const finNonfic = books.filter(
      b => b.Status?.trim() === "Completed" &&
           b.Genre?.trim() === "Non-Fiction"
    );

    // DISPLAY
document.getElementById("fantasy").textContent =
  finFantasy.map(b => `${b.Title} ${b.Rating ? b.Rating + "/5" : ""}`).join(", ");

document.getElementById("scifi").textContent =
  finSciFi.map(b => `${b.Title} ${b.Rating ? b.Rating + "/5" : ""}`).join(", ");

document.getElementById("thriller").textContent =
  finThriller.map(b => `${b.Title} ${b.Rating ? b.Rating + "/5" : ""}`).join(", ");

document.getElementById("nonfic").textContent =
  finNonfic.map(b => `${b.Title} ${b.Rating ? b.Rating + "/5" : ""}`).join(", ");

document.getElementById("mystery").textContent =
  finMystery.map(b => `${b.Title} ${b.Rating ? b.Rating + "/5" : ""}`).join(", ");

const reading = books.filter(b => b.Status?.trim() === "Reading");

document.getElementById("cr").textContent =
  reading
    .map(b => {
      const percent = Math.round((b.PagesRead / b.TotalPages) * 100);
      return `${b.Title} (${percent}%) ${b.Rating ? b.Rating + "/5" : ""}`;
    })
    .join(", ");


const planned = books.filter(b => b.Status?.trim() === "Planned");

document.getElementById("tbr").textContent =
  planned.map(b => b.Title).join(", ");
  });

