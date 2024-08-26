import empoloyeeData from "../data/employeeData"

export default function peoplesInfo() {
  const box = document.getElementById("box")
  box.innerHTML = ""

  empoloyeeData.forEach((employee, index) => {
    box.innerHTML += `
    <div class="box" id="employee${index}">
      <div class="image-box" >
          <img src=${employee.img} alt="img" />
          <h2 id="title"> ${employee.name} </h2>
      </div>
      <div class="text-box">
        <h2 id="title"> ${employee.name} </h2>
        <p>${employee.description}</p>
      </div>
    </div>`
  })
}