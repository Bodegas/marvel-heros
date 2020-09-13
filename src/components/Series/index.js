import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";

const Series = ({ ...props }) => {
  return (
    <div>
      <div>Series</div>
      <div>{JSON.stringify(props, null, 2)}</div>
    </div>
  );
};

Series.displayName = "Series";
// Series.propTypes = {};

export default Series;
