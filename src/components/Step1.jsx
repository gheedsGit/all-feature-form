import React from "react";
import MainContainer from "./MainContainer";
import Form from "./Form";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Shoud not contain numbers")
    .required("This field is required"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Shoud not contain numbers")
    .required("This field is required"),
});

const Step1 = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    navigate("/step2");
  };

  return (
    <MainContainer typoMessage=" 👨‍💻👹🌃Step1㊙️🐒⛩️">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName")}
          id="firstName"
          type="text"
          label="First Name"
          error={!!errors?.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register("lastName")}
          id="lastName"
          type="text"
          label="Last Name"
          error={!!errors?.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step1;
