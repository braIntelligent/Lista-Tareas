const input = document.getElementById("tareas");
const button = document.querySelector("button");
const listaTareas = document.getElementById("lista-tareas");

const agregarTarea = () => {
  if (input.value) {
    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("lista");
    listaTareas.appendChild(nuevaTarea);

    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.classList.add("parrafo");
    nuevaTarea.appendChild(nuevoParrafo);
    nuevoParrafo.innerText = input.value.toUpperCase();
    input.value = "";

    const divIcons = document.createElement("div");
    divIcons.classList.add("divIcons");
    nuevaTarea.appendChild(divIcons);

    const completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
    divIcons.appendChild(completar);
    completar.addEventListener("click", () => {
      nuevoParrafo.classList.toggle("completada");
    });

    const eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
    divIcons.appendChild(eliminar);
    eliminar.addEventListener("click", () => {
      nuevaTarea.remove();
    });

    listaTareas.scrollTop = listaTareas.scrollHeight;
    
  } else {
    alert("Ingresa alguna tarea");
  }
};

button.addEventListener("click", agregarTarea);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});
