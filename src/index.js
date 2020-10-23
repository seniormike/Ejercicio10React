import React from "react";
import ReactDOM from "react-dom";
import Formulario from "./comp/form";
import "bootstrap/dist/css/bootstrap.css";
const fields = [
  { type: "text", name: "Nombre", placeholder: "Nombre", validators: { required: true, minLength: 5, maxLength: 20 } },
  { type: "text", name: "Apellido", placeholder: "Apellido", validators: { required: true, minLength: 5, maxLength: 20 } },
  { type: "email", name: "Correo", placeholder: "Correo", validators: { required: true, minLength: 5, maxLength: 20 } },
];
const initialValues = { Nombre: "", Apellido: "", Correo: "" };
ReactDOM.render(<Formulario fields={fields} initialValues={initialValues} />, document.getElementById("root"));