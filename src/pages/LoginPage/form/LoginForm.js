import React from "react";

import * as yup from "yup";

import {yupResolver} from "@hookform/resolvers/yup";
import {FormProvider, useForm} from "react-hook-form";
import {Form as AntdForm, Button} from "antd";
import {useDispatch} from "react-redux";
import {requests} from "../../../services/requests";
import FormElements from "../../../components/FormElements";
import {setAuthTokens} from "../../../services/actions";
import {useMutation} from "react-query";
import {showNotification} from "../../../utils/showNotification";
import {values} from "lodash";
import {Redirect} from "react-router-dom";
const LoginForm = () => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().required("validation required"),
    password: yup.string().trim().required("validation required"),
  });

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const [login, loginInfo] = useMutation(requests.auth.login, {
    onSuccess: ({data}) => {
      console.log(data);
      dispatch(setAuthTokens(data));
      methods.reset({
        email: "",
        password: "",
      });
    },
    onError: () => {
      showNotification("error", "Error with Login");
    },
  });

  const onSubmit = ({email, ...rest}) => {
    login({...rest, email});
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='login-form'>
        <FormElements.Input name='email' label='Email' />
        <FormElements.Input name='password' label='Password' password />
        <AntdForm.Item>
          {/*<Checkbox style={{ visibility: "hidden" }}>Remember me</Checkbox>*/}
          {/*<Link to="/" className="login-form-forgot" style={{ visibility: "hidden" }}>*/}
          {/*    Forgot password*/}
          {/*</Link>*/}
          <Button
            type='primary'
            loading={loginInfo.isLoading}
            htmlType='submit'
            className='login-form-button'
          >
            Log In
          </Button>
        </AntdForm.Item>
      </form>
    </FormProvider>
  );
};
export default LoginForm;
