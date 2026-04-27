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
    const plannedFantasy = books.filter(
      b => b.Status?.trim() === "Planned" &&
           b.Genre?.trim() === "Fantasy"
    );

    const plannedNonfic = books.filter(
      b => b.Status?.trim() === "Planned" &&
           b.Genre?.trim() === "Non-Fiction"
    );



    const plannedThriller = books.filter(
      b => b.Status?.trim() === "Planned" &&
           b.Genre?.trim() === "Thriller"
    );

    // DISPLAY
    document.getElementById("nonfic").textContent =
      plannedNonfic.map(b => b.Title).join(", ");

    document.getElementById("fantasy").textContent =
      plannedFantasy.map(b => b.Title).join(", ");



    document.getElementById("thriller").textContent =
      plannedThriller.map(b => b.Title).join(", ");

const reading = books.filter(b => b.Status?.trim() === "Reading");

document.getElementById("cr").textContent =
  reading
    .map(b => {
      const percent = Math.round((b.PagesRead / b.TotalPages) * 100);
      return `${b.Title} (${percent}%)`;
    })
    .join(", ");


const planned = books.filter(b => b.Status?.trim() === "Planned");

document.getElementById("tbr").textContent =
  planned.map(b => b.Title).join(", ");
  });