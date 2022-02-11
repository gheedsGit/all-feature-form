import React from "react";
import MainContainer from "./MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "./Form";

const Step1 = () => {
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        {" "}
        👨‍💻👹🌃Step1
      </Typography>
      <Form></Form>
    </MainContainer>
  );
};

export default Step1;
