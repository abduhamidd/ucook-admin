import React, {Fragment} from "react";
import {Controller, useFormContext} from "react-hook-form";
import {Input as AndtInput, Form as AntdForm} from "antd";

const Input = ({
  name,
  label,
  className,
  password,
  arrayItem,
  icon: Inputicon,
  defaultValue,
  tab,
  changeTab,
  ...inputProps
}) => {
  const {errors, formState, control} = useFormContext();
  const error = errors?.name;
  const touched = formState.touched?.name;

  return (
    <Fragment>
      <AntdForm.Item
        validateStatus={touched && error ? "error" : undefined}
        label={label}
        help={touched && error && error.message.replace(name, "")}
      >
        <Controller
          as={
            password ? (
              <AndtInput.Password {...inputProps} />
            ) : (
              <AndtInput {...inputProps} />
            )
          }
          name={name}
          control={control}
          defaultValue={defaultValue}
        ></Controller>
      </AntdForm.Item>
    </Fragment>
  );
};
export default Input;
