import { Button, Col, Container, Form, FormCheck, InputGroup, Row } from "react-bootstrap";
import PageHeader from "../../../components/common/page-header/page-header";
import Spacer from "../../../components/common/spacer/spacer";
import CustomForm from "../../../components/common/custom-form/custom-form";
import { useFormik } from "formik";
import { utils } from "../../../utils";
import { useState } from "react";
import PasswordInput from "../../../components/common/password-input/password-input";
import { Link } from "react-router-dom";
import "./page.scss";
import { FaUsers } from "react-icons/fa"
import { BiUser } from "react-icons/bi"



const LoginPage = () => {

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      /*  // istegini endpointe gonder
       const data = await services.user.login(values);
       // token'i sifrelenmis localstorage'e kaydet
       services.encryptedLocalStorage.setItem(
           "pickanddrivetoken",
           data.token
       );
       // token ile kullanici bilgilerini al
       const responseUser = await services.user.getUser();
       // kullanici bilgilerini merkezi state'e kaydet
       dispatch(loginSuccess(responseUser));
       utils.functions.swalToast(
           "You have successfully logged in",
           "success"
       );
       navigate(routes.home); */
    } catch (error) {
      /*  dispatch(loginFailure());
       utils.functions.swalToast(error.response.data.message, "error"); */
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
          <Spacer height="2rem" />
          <Col md={6} lg={5} xl={4} className="mx-auto">
            <Form size noValidate onSubmit={formik.handleSubmit} className="login-form">
              <Form.Group>
                <InputGroup className="input-with-line">
                  <InputGroup.Text className="custom-icon2">
                    <BiUser />
                  </InputGroup.Text>
                  <Form.Control
                    {...utils.functions.validCheck("email", formik)}
                    {...formik.getFieldProps("email")}
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors["email"]}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Spacer height="0.5rem" />
              <PasswordInput
                formik={formik}
                name="password"
                placeholder="Password"
              />

              <span className="remember-forgot">
                <Form>
                  <FormCheck type="checkbox" id="remember-check" label="Remember me" className="custom-checkbox" />

                </Form>
                <Link className="lnk" to={"/forgot-password"}>Forgot password?</Link>
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
                <Link className="lnk nw-user" to={"/register"}>or register new user</Link>
              </div>
            </Form>
          </Col>
        </Row >

      </Container >
      <Spacer height="5rem" />

    </>
  )
};

export default LoginPage;