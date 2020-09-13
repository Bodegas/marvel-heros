import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";

const Libros = ({ ...props }) => {
  return (
    <div>
      <div>Libros</div>
      <div>{JSON.stringify(props, null, 2)}</div>
    </div>
  );
};

Libros.displayName = "Libros";
// Libros.propTypes = {};

export default Libros;
