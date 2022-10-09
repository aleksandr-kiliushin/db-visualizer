import dbPortrait from "../../dist/db-portrait.json"

const form = document.querySelector("#select-list")

window.selectedTablesNames = []

for (const tableName of Object.keys(dbPortrait.schema.tables)) {
  const checkboxContainer = document.createElement("div")
  checkboxContainer.classList.add("checkbox-container")

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.id = tableName
  checkbox.value = tableName
  checkbox.checked = true
  checkboxContainer.append(checkbox)

  const checkboxLabel = document.createElement("label")
  checkboxLabel.setAttribute("for", tableName)
  checkboxLabel.innerText = tableName
  checkboxContainer.append(checkboxLabel)

  form.append(checkboxContainer)
  window.selectedTablesNames.push(tableName)
}

form.addEventListener("change", (event) => {
  if (event.target.checked) {
    window.selectedTablesNames.push(event.target.id)
  } else {
    window.selectedTablesNames = window.selectedTablesNames.filter((tableName) => tableName !== event.target.id)
  }
})
