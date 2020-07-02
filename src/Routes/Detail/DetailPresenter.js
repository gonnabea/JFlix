import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({
    result,
    error,
    loading
}) => null;

TVPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.bool,
    loading: PropTypes.string
}

export default TVPresenter;