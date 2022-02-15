import React from "react";
import MainContainer from "./MainContainer";
import Input from "./Input";
import Form from "./Form";
import PrimaryButton from "./PrimaryButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import parsePhoneNumberFormString from "libphonenumber-js";
import { useData } from "../DataContext";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Not correct email format")
    .required("Email is required field"),
});
const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFormString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};

const Step2 = () => {
  const navigate = useNavigate();
  const { data, setValues } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: data.email,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setValues(data);
    navigate("/step3");
  };

  const hasPhone = watch("hasPhone");

  return (
    <MainContainer typoMessage=" 👩🏿‍💻🐉🕵🏻Step2👺🤖🧪">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="email"
          {...register("email", { required: true })}
          required
          label="email"
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              {...register("hasPhone")}
            />
          }
          label="Do you have phone?"
        />
        {hasPhone && (
          <Input
            {...register("phoneNumber")}
            type="tel"
            label="Phone number"
            onChange={(e) => {
              e.target.value = normalizePhoneNumber(e.target.value);
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
