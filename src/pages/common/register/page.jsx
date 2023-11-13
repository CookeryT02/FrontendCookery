import { useFormik } from "formik";
import { PageHeader, PasswordInput, Spacer, UserForm } from "../../../components";
import { utils } from "../../../utils";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

const RegisterPage = () => {

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
    //initialValues: utils.initialValues.loginFormInitialValues,
    //validationSchema: utils.validations.loginFormValidationSchema,
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
            <Form noValidate onSubmit={formik.handleSubmit} className="login-form">

              <UserForm
                formik={formik}
                name="email"
                placeholder="Email"
                icon={<AiOutlineUser />}
              />
              <Spacer height="1.5rem" />

              <UserForm
                formik={formik}
                name="name"
                placeholder="Name"
                icon={<AiOutlineUser />}
              />

              <PasswordInput
                formik={formik}
                name="password"
                placeholder="Password"
              />


              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid) || loading}
                  className="login-btn">
                  {loading && <Spinner animation="border" size="sm" />} REGISTER
                </Button>
              </div>
              <Spacer height="1rem" />

            </Form>
          </Col>
        </Row >

      </Container >
      <Spacer height="5rem" />


    </>
  )
};

export default RegisterPage;