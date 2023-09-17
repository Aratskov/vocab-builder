import { useFormik } from 'formik';
import {
  validationSchemaLogin,
  validationSchemaRegister,
} from '../SchemaValidation/SchemaValidation';
import { useNavigate } from 'react-router-dom';
import {
  Modal,
  Title,
  SecondText,
  Form,
  Input,
  Button,
  TextError,
  ToggleBtn,
  ContainerModal,
  SecondButton,
} from './AuthForm.styled';
// import Icon from '../../assets/icons/close.svg';
// import { loginUser, registerUser } from '../../redux/auth/authOperation';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import icons from '../../assets/icons/password.svg';

export const AuthForm = ({ isRegister }) => {
//   const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      userName: '',
    },
    // validationSchema: isRegister
    //   ? validationSchemaRegister
    //   : validationSchemaLogin,
    // onSubmit: values => {
    //   isRegister ? dispatch(registerUser(values)) : dispatch(loginUser(values));
    // },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    
      <Modal>
          <ContainerModal>
              <Title>{isRegister ? 'Register' : 'Login'}</Title>
        <SecondText>
          {isRegister
            ? 'To start using our services, please fill out the registration form below. All fields are mandatory:'
            : 'Please enter your login details to continue using our service:'}
        </SecondText>
        <form onSubmit={formik.handleSubmit}>
          <Form>
            {isRegister && (
              <label htmlFor="userName">
                <Input
                  id="userName"
                  name="userName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                  placeholder="Name"
                />
                {formik.touched.userName && formik.errors.userName && (
                  <TextError>{formik.errors.userName}</TextError>
                )}
              </label>
            )}
            <label htmlFor="email">
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email && (
                <TextError>{formik.errors.email}</TextError>
              )}
            </label>

            <label htmlFor="password" style={{ position: 'relative' }}>
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
              />
              {/* <ToggleBtn onClick={togglePassword}>
                <use
                  href={
                    showPassword ? `${icons}#icon-eye` : `${icons}#icon-antiEye`
                  }
                ></use>
              </ToggleBtn> */}

              {formik.touched.password && formik.errors.password && (
                <TextError>{formik.errors.password}</TextError>
              )}
            </label>
          </Form>
                  <Button type="submit">{isRegister ? 'Register' : 'Login'} </Button>
          <SecondButton type="submit">{isRegister ? 'Login' : 'Register'} </SecondButton>
                  
        </form>
        </ContainerModal>
      </Modal>
  );
};