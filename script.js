const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
const equipes = 7;
const planningBody = document.getElementById("planning-body");

let selectedCell = null;

jours.forEach(jour => {
  const row = document.createElement("tr");
  const dayCell = document.createElement("td");
  dayCell.textContent = jour;
  row.appendChild(dayCell);

  for (let i = 0; i < equipes; i++) {
    const cell = document.createElement("td");
    cell.addEventListener("click", () => openModal(cell));
    row.appendChild(cell);
  }

  planningBody.appendChild(row);
});

// Modal logic
const modal = document.getElementById("modal");
const input = document.getElementById("mission-input");
const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");

function openModal(cell) {
  selectedCell = cell;
  input.value = cell.textContent;
  modal.classList.remove("hidden");
  input.focus();
}

saveBtn.onclick = () => {
  if (selectedCell && input.value.trim()) {
    selectedCell.textContent = input.value.trim();
  }
  modal.classList.add("hidden");
  input.value = "";
};

cancelBtn.onclick = () => {
  modal.classList.add("hidden");
  input.value = "";
};
