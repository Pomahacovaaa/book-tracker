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

    const plannedMystery = books.filter(
      b => b.Status?.trim() === "Completed" &&
           b.Genre?.trim() === "Mystery"
    );

    const plannedSciFi = books.filter(
      b => b.Status?.trim() === "Completed" &&
           b.Genre?.trim() === "Sci-Fi"
    );

    const plannedThriller = books.filter(
      b => b.Status?.trim() === "Planned" &&
           b.Genre?.trim() === "Thriller"
    );
    const plannedRomance = books.filter(
  b => b.Status?.trim() === "Planned" &&
       b.Genre?.trim() === "Romance"
);

const plannedDystopian = books.filter(
  b => b.Status?.trim() === "Planned" &&
       b.Genre?.trim() === "Dystopian"
);

const plannedHorror = books.filter(
  b => b.Status?.trim() === "Planned" &&
       b.Genre?.trim() === "Horror"
);

const plannedAdventure = books.filter(
  b => b.Status?.trim() === "Planned" &&
       b.Genre?.trim() === "Adventure"
);

const plannedHistorical = books.filter(
  b => b.Status?.trim() === "Planned" &&
       b.Genre?.trim() === "Historical"
);

const plannedBiography = books.filter(
  b => b.Status?.trim() === "Planned" &&
       b.Genre?.trim() === "Biography"
);

const plannedMemoir = books.filter(
  b => b.Status?.trim() === "Planned" &&
       b.Genre?.trim() === "Memoir"
);

const plannedPsychology = books.filter(
  b => b.Status?.trim() === "Planned" &&
       b.Genre?.trim() === "Psychology"
);

const plannedSelfHelp = books.filter(
  b => b.Status?.trim() === "Planned" &&
       b.Genre?.trim() === "Self-Help"
);

const plannedCrime = books.filter(
  b => b.Status?.trim() === "Planned" &&
       b.Genre?.trim() === "Crime"
);

const plannedYoungAdult = books.filter(
  b => b.Status?.trim() === "Planned" &&
       b.Genre?.trim() === "Young Adult"
);

    // DISPLAY
    document.getElementById("nonfic").textContent =
      plannedNonfic.map(b => b.Title).join(", ");

    document.getElementById("fantasy").textContent =
      plannedFantasy.map(b => b.Title).join(", ");

    document.getElementById("thriller").textContent =
      plannedThriller.map(b => b.Title).join(", ");

    document.getElementById("scifi").textContent =
      plannedFantasy.map(b => b.Title).join(", ");

    document.getElementById("mystery").textContent =
      plannedThriller.map(b => b.Title).join(", ");

// document.getElementById("romance").textContent =
//   plannedRomance.map(b => b.Title).join(", ");

// document.getElementById("dystopian").textContent =
//   plannedDystopian.map(b => b.Title).join(", ");

// document.getElementById("horror").textContent =
//   plannedHorror.map(b => b.Title).join(", ");

// document.getElementById("adventure").textContent =
//   plannedAdventure.map(b => b.Title).join(", ");

// document.getElementById("historical").textContent =
//   plannedHistorical.map(b => b.Title).join(", ");

// document.getElementById("biography").textContent =
//   plannedBiography.map(b => b.Title).join(", ");

// document.getElementById("memoir").textContent =
//   plannedMemoir.map(b => b.Title).join(", ");

// document.getElementById("psychology").textContent =
//   plannedPsychology.map(b => b.Title).join(", ");

// document.getElementById("selfhelp").textContent =
//   plannedSelfHelp.map(b => b.Title).join(", ");

// document.getElementById("crime").textContent =
//   plannedCrime.map(b => b.Title).join(", ");

// document.getElementById("ya").textContent =
//   plannedYoungAdult.map(b => b.Title).join(", ");

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
