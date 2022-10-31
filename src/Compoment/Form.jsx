import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { ErrorMessage  , useField} from "formik";

const  Form1 = (props) => {
  const[field , meta] = useField(props);
// console.log(meta);
// console.log(field);
  return (
    <>
      <Col lg={4}>
        <div className="input_gp">
          <input  className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"}`} {...field} {...props}  required  />
            <ErrorMessage component="div" name={field.name}  className="error" /> 
        </div>
      </Col>
    </>
  );
};
export {Form1};
