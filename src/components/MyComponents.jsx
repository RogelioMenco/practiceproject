// importar todos los modulos de react / dependencias
import React from "react";

export const MyComponents = () => {
  const name = "Rogelio Menco";
  const repository = "https://github.com/inesmariao/component-practice";

  const student = {
    name: "Rogelio",
    lastName: "Menco",
    mobile: "3026172447",
    linkedinProfile: "https://www.linkedin.com/in/rogelio-menco",
  };
  console.log(student);
  return (
    <div>
      <har />
      <p>Este es mi primer componente</p>
      <h2>Temas de react</h2>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados - hooks</li>
        <li>Comunicacion</li>
      </ul>
      <hr />
      <h2>Datos del docente</h2>
      <p>Nombre: {name}</p>
      <p>Repositorio:</p>
      <p>{repository}</p>
      <hr />
      <h2>Datos del estudiante</h2>
      <p>Nombre: {student.name}</p>
      <p>lastName: {student.lastName}</p>
      <p>Mobile: {student.mobile}</p>
      <p> Perfil de linkedIn</p>
      <p>linkedinProfile: {student.linkedinProfile}</p>
    </div>
  );
};

//  Funcion del componente

// Export
