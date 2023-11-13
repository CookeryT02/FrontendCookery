import { Button, Col, Container, Form, FormCheck, InputGroup, Row } from "react-bootstrap";
import PageHeader from "../../../components/common/page-header/page-header";
import Spacer from "../../../components/common/spacer/spacer";
import { useFormik } from "formik";
import { utils } from "../../../utils";
import { useState } from "react";
import { FaUsers } from "react-icons/fa"
import { BiUser } from "react-icons/bi"
import { PasswordInput } from "../../../components";

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
    initialValues: utils.initialValues.registerFormInitialValues,
    validationSchema: utils.validations.registerFormValidationSchema,
    onSubmit,
  });


  return (
    <>
      <PageHeader title="REGISTER" />
      <Spacer />
      <Container>
        
        <Row>
          <FaUsers size={200} className="user-icon" />
          <Spacer height="2rem" />
          <hr />
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
              placeholder="Password"
              name="password"
              formik={formik}
              />
              <PasswordInput 
              placeholder="Confirm Password"
              name="password"
              formik={formik}
              />

              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid) || loading}
                  className="login-btn">
                  {loading && <Spinner animation="border" size="sm" />} SEND
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