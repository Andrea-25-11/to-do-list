/* Este componente va contener los componentes requeridos los cuales son: FormTodo y TaskList, estos
 traen la funcionalidad propuesta para lograr lo esperado que es añadir tareas, visaulizarlas y checkearlas 
 cuando estén hechas y se tiene la posibilidad de eliminarlas */

 import React, { useState } from "react"; // Se importa el hook useState de control estados de react

 // Importamos los componentes, ya que, el componente Container es el padre de todos los componentes
 import TaskList from "./TaskList";
 import FormTodo from "./FormTodo";
 
 // Se declara una constante e inicializa con una función flecha, la cual, tiene como objetico
 const CONTAINER = (_) => {
   const [list, setList] = useState([]); // Estado nuevo(lista), se alamacenan los datos del componente FormTodo a la lista vacia.
 
   // Recibe las propiedades del componente FormTodo para ir organizarlas cada vez que se agrega una nueva.
   const handleAddItem = (addItem) => {
     setList([...list, addItem]);
   };
   return (
     <div>
       <FormTodo handleAddItem={handleAddItem} />
       <TaskList list={list} setList={setList} />{" "}
       {/* Genera un valor cada vez que se ingresa */}
     </div>
   );
 };
 
 export default CONTAINER;