/* Este componente llamado CONTAINER tendrá en si interior los tros dos componentes llamados TaskList y FormTodo para lograr hacer funcional la página */

 import React, { useState } from "react"; // Se importa el hook useState de control estados de react para que pueda ser interpretado 

 // Se importaton los componentes TaskListo y FormTodo al ser los hijos del Container
 import TaskList from "./TaskList";
 import FormTodo from "./FormTodo";
 
 // Se declara una constante e inicializa con una función flecha, la cual, tiene como objetivo retornar los otros dos componentes y a su vez usar el useState para actualizar la lista cada que se añada un item a la misma 
 const CONTAINER = (_) => {
   const [list, setList] = useState([]); // Estado nuevo(lista), se alamacenan los datos del componente FormTodo a la lista vacia.
 
   // Recibe las propiedades del componente FormTodo para ir organizarlas cada vez que se agrega una nueva y se utiliza el operador spread (...)permite que un iterable se expanda en lugares donde se esperan más de 0 argumentos.
   const handleAddItem = (addItem) => {
     setList([...list, addItem]); 
   };
   return (
     <div>
        <h1 className="h1">MIS PENDIENTES</h1>
       <FormTodo handleAddItem={handleAddItem} />
       <TaskList list={list} setList={setList} />{" "}
     </div>
   );
 };
 
 export default CONTAINER;