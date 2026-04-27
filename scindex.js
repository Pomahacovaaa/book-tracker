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

    // Currently reading
    const reading = books.filter(b => b.Status?.trim() === "Reading");

    const completed = books.filter(b => b.Status?.trim() === "Completed");
    document.getElementById("cr").textContent =
      reading
        .map(b => {
          const percent = Math.round((b.PagesRead / b.TotalPages) * 100);
          return `${b.Title} (${percent}%)`;
        })
        .join(", ");

    // To be read
    const planned = books.filter(b => b.Status?.trim() === "Planned");

    document.getElementById("tbr").textContent =
      planned.map(b => b.Title).join(", ");

    const plannedCount = planned.length;

    console.log(plannedCount);

    document.getElementById("plannedCount").textContent =
  planned.length;


   const completedCount = completed.length;

    console.log(completedCount);

    document.getElementById("completedCount").textContent =
  completed.length;

   document.getElementById("com").textContent =
      completed.map(b => b.Title).join(", ");

  });

  fetch('name.csv')
  .then(res => res.text())
  .then(text => {
    document.getElementById("output").textContent = text.trim();
  });