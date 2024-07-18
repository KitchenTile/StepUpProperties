import empoloyeeData from "../data/employeeData"

export default function peoplesInfo() {
  const box = document.getElementById("box")
  box.innerHTML = ""

  empoloyeeData.forEach((employee, index) => {
    box.innerHTML += `
    <div id="employee${index}">
      <div class="image-box" >
          <img src=${employee.img} alt="img" />
      </div>
      <div class="text-box">
        <h2> ${employee.name} </h2>
        <p>${employee.description}</p>
      </div>
    </div>`
  })
}