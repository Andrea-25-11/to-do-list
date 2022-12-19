import React, { useState } from "react";


// Se crea el componente llamado FORMTODO, que tendrá ccomo funcionalidad el cual contiene ciertas propiedades para ser utilizadas posteriormente.
const FORMTODO = (props) => {
  const { handleAddItem } = props; // Declara constante y se le asigna las props(parametros que se pueden heredar).
  const [description, setDescription] = useState(""); // Se uso el Hook useState el cual maneja la siguiente sintaxis: la variable const y entre corchetes cuadrados se declara una variable a la cual a aEl estado que tendra la descripcion y poder cambiar el estado del componente
  const handleSubmit = (e) => {
    // Manejador de evento onSubmit en el formulario
    e.preventDefault(); // Nos ayuda a evitar que se refresque la pagina y se pierda la informacion
    handleAddItem({
      // Recibe un metodo y envia unos valores(props)
      done: false, // Estado de la tarea(terminado o no terminado)
      id: (+new Date()).toString(), // El ID sera la fecha y esta se convierte en cadena de texto.
      description, // Declara llave vacia
    });
    setDescription(""); // Limpiamos el estado
  };
  // Se retornara la estructura del HTML despues de la funcionalidad
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* Evento del formulario y llama la funcionalidad cuando damos enter en el input o click en el boton*/}
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={description} // Asigna el valor que devuelve la funcionalidad
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="button pink"
            disabled={description ? "" : "disabled"} // Se utiliza un operador ternario que valida si es True devuelve vacio o False devuelve inhabilidato
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FORMTODO;