import React from "react";
import useForm from "../custom/useForm";
import validateForm from "../utils/validate";
const Formulario = (props) => {
  const { handleChange, handleSubmit, errors } = useForm(
    validateForm,
    props.initialValues,
    props.fields.map((item) => {return { name: item.name, validators: item.validators };})
  );
  const fieldHTML = props.fields.map((field) => (
    <div className="form-group">
      <label htmlFor={field.name}>{field.name}</label>
      <input
        type={field.type}
        name={field.name}
        className="form-control"
        id={field.name}
        onChange = {handleChange}
      />
      {errors[field.name] && <p>{errors[field.name]}</p>}
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
              <button type="submit" className="btn btn-danger">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Formulario;
