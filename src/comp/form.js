import React from "react";
import useForm from "../custom/useForm";
import validateForm from "../utils/validate";
const Formulario = (props) => {
  const { handleChange, handleSubmit, errors } = useForm(
    validateForm,
    props.initialValues,
    props.validators
  );
  const fieldHTML = props.fields.map((field) => (
    <div className="form-group">
      <label htmlFor={field.name}>{field.name}</label>
      <input
        type={field.type}
        name={field.name}
        className="form-control"
        id={field.name}
      />
    </div>
  ));
  return (
    <div className="container">
      <div className="row">
        <h1>
          <span>Formulario</span>
        </h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div>
            <form onSubmit={handleSubmit}>
              {fieldHTML}
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Formulario;
