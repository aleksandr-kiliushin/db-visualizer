import dbPortrait from "../../dist/db-portrait.json"

const form = document.querySelector("#select-list")

if (localStorage.selectedTablesNames === undefined) {
  window.selectedTablesNames = Object.keys(dbPortrait.schema.tables)
  localStorage.selectedTablesNames = JSON.stringify(window.selectedTablesNames)
} else {
  window.selectedTablesNames = JSON.parse(localStorage.selectedTablesNames)
}

for (const tableName of Object.keys(dbPortrait.schema.tables)) {
  const checkboxContainer = document.createElement("div")
  checkboxContainer.classList.add("checkbox-container")

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.id = tableName
  checkbox.value = tableName
  checkbox.checked = window.selectedTablesNames.includes(tableName)
  checkboxContainer.append(checkbox)

  const checkboxLabel = document.createElement("label")
  checkboxLabel.setAttribute("for", tableName)
  checkboxLabel.innerText = tableName
  checkboxContainer.append(checkboxLabel)

  form.append(checkboxContainer)
}

form.addEventListener("change", (event) => {
  if (event.target.checked) {
    window.selectedTablesNames.push(event.target.id)
  } else {
    window.selectedTablesNames = window.selectedTablesNames.filter((tableName) => tableName !== event.target.id)
  }
  localStorage.selectedTablesNames = JSON.stringify(window.selectedTablesNames)
})
