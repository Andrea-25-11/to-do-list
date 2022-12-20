// Se importe el compoentne del checkbox para poder seleccionar las tareas en la lista
import React from "react";
import CheckBox from "./CheckBox"; 

// Al componente TASKLIST se le asignan unas props correspondientes a 
const TASKLIST = (props) => {
  const { list, setList } = props; // Se le asigna a la variable list las props que lleguen

  /* Cuando el usuario intente escribir sobre el input de usuario o contraseña, se va a ejecutar el evento onChange en React. Dentro de este evento, existe una propiedad target que guarda el elemento input. Esto quiere decir que, a través del comando event.target, podemos tener acceso a toda la API del elemento HTML. Así, podemos acceder a todos los atributos del elemento input, como lo son su type y value. */
  const onChangeStatus = (e) => {
    const { name, checked } = e.target;

    /* Esta constante actualiza el listado de las traeas que se van agregando para la correcta visualizacion, en ella se usa un metodo de los arrays para recorrer algo y que esta devuelva algo, para iterar a través de los elementos dentro de una colección de arreglos en JavaScript. En este caso la lista y la nueva tarea agregada para la actualizacion correcta */
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  const chk = list.map((item) => (
    <CheckBox key={item.id} data={item} onChange={onChangeStatus} />
  ));

  return (
    <div className="todo-list">
      {list.length ? chk : "No tasks"}
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Eliminar tareas completadas
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TASKLIST; // Exportamos el componente para poder usarlo en el componente container