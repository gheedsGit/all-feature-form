import React from "react";
import MainContainer from "./MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "./Form";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
    fontSize: "24px",
    color: "#050a0e",
    fontFamily: "Tomorrow, sans-serif",
    textShadow: "1px 1px #00f0ff",
    fontWeight: "300",
    textTransform: "uppercase",
  },
}));

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
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const classes = useStyles();

  const onSubmit = (data) => {
    navigate("/step2");
  };

  return (
    <MainContainer>
      <Typography className={classes.root} component="h2" variant="h5">
        {" "}
        👨‍💻👹🌃Step1㊙️🐒⛩️
      </Typography>
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
