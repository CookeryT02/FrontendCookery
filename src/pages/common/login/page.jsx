import { Button, Col, Container, Form, FormCheck, Row, Spinner } from "react-bootstrap";
import PageHeader from "../../../components/common/page-header/page-header";
import Spacer from "../../../components/common/spacer/spacer";
import { useFormik } from "formik";
import { utils } from "../../../utils";
import { useState } from "react";
import PasswordInput from "../../../components/common/password-input/password-input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa"
import { BiUser } from "react-icons/bi"
import { services } from "../../../services";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess } from "../../../store/slice/auth/auth-slice";
import UserForm from "../../../components/common/user/form/form";
import { constants } from "../../../constants";
import "./page.scss";

const { routes } = constants;



const LoginPage = () => {

  const { user } = useSelector((state) => state.auth)

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    setLoading(true);
    try {

      const data = await services.user.login(values);
      services.encryptedLocalStorage.setItem("ctToken", data.token)
      const responseUser = await services.user.getUser();
      dispatch(loginSuccess(responseUser))

      utils.functions.swalToast("Login successful", "success")

      navigate(routes.home);

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

  if (Object.keys(user).length > 0) return <Navigate to={routes.home} />

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