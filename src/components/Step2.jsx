import React from "react";
import MainContainer from "./MainContainer";
import Input from "./Input";
import Form from "./Form";
import PrimaryButton from "./PrimaryButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    navigate("/step3");
  };
  return (
    <MainContainer typoMessage=" 👩🏿‍💻🐉🕵🏻Step2👺🤖🧪">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" id="email" label="email" name="email" required />
        <Input type="password" />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
