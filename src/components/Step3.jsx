import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useData } from "../DataContext";
import MainContainer  from "./MainContainer";
import FileInput  from "./FileInput";
import PrimaryButton  from "./PrimaryButton";
import Form from "./Form";

const Step3 = () => {
  const navigate = useNavigate();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    navigate("/result");
    setValues(data);
  };

  return (
    <MainContainer typoMessage=" 🖥️⌨️💾Step3🌐💽💾">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step3;