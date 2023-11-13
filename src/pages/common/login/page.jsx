import { Button, Col, Container, Form, FormCheck, Row, Spinner } from "react-bootstrap";
import PageHeader from "../../../components/common/page-header/page-header";
import Spacer from "../../../components/common/spacer/spacer";
import { useFormik } from "formik";
import { utils } from "../../../utils";
import { useState } from "react";
import PasswordInput from "../../../components/common/password-input/password-input";
import { Link } from "react-router-dom";
import "./page.scss";
import { FaUsers } from "react-icons/fa"
import { BiUser } from "react-icons/bi"
import { services } from "../../../services";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "../../../store/slice/auth/auth-slice";
import UserForm from "../../../components/common/user/form/form";





const LoginPage = () => {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    setLoading(true);
    try {

      const data = await services.user.login(values);
      // save token
      utils.functions.swalToast("Login successful", "success")
      services.encryptedLocalStorage.setItem("token", data.token)

      dispatch(loginSuccess())
      utils.functions.swalToast("Login successful", "success")

    } catch (error) {
      dispatch(loginFailure());

      utils.functions.swalToast(error.response.data.message, "error")


    } finally {
      setLoading(false);
    }
  };


  const formik = useFormik({
    initialValues: utils.initialValues.loginFormInitialValues,
    validationSchema: utils.validations.loginFormValidationSchema,
    onSubmit,
  });


  return (
    <>
      <PageHeader title="LOGIN" />
      <Spacer />
      <Container>
        <Row>
          <FaUsers size={200} className="user-icon" />

          <Col md={6} lg={5} xl={4} className="mx-auto">
            <Form noValidate onSubmit={formik.handleSubmit} className="login-form">

              <UserForm
                formik={formik}
                name="email"
                placeholder="Email"
                icon={<BiUser />}
              />


              <PasswordInput
                formik={formik}
                name="password"
                placeholder="Password"
              />

              <span className="remember-forgot">
                <Form>
                  <FormCheck type="checkbox" id="remember-check" label="Remember me" className="custom-checkbox" />

                </Form>
                <Link style={{ pointerEvents: loading ? "none" : "auto" }} className="lnk" to={"/forgot-password"}>Forgot password?</Link>
              </span>

              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid) || loading}
                  className="login-btn">
                  {loading && <Spinner animation="border" size="sm" />} LOGIN
                </Button>
              </div>
              <Spacer height="1rem" />
              <div className="d-flex justify-content-center">
                <Link style={{ pointerEvents: loading ? "none" : "auto" }} className="lnk nw-user" to={"/register"}>or register new user</Link>
              </div>
            </Form>
          </Col>
        </Row >

      </Container >
      <Spacer height="4rem" />

    </>
  )
};

export default LoginPage;