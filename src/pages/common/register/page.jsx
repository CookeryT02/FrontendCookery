import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import PageHeader from "../../../components/common/page-header/page-header";
import Spacer from "../../../components/common/spacer/spacer";
import { useFormik } from "formik";
import { utils } from "../../../utils";
import { useState } from "react";
import { FaUsers } from "react-icons/fa"
import { PasswordInput, UserForm } from "../../../components";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const RegisterPage = () => {

  const formItems = [
    {
      name: "firstName",
      placeholder: "Enter first name",
      icon: <AiOutlineUser />
    },
    {
      name: "lastName",
      placeholder: "Enter last name",
      icon: <AiOutlineUser />
    },
    {
      name: "birthDate",
      placeholder: "Enter birthday",
      asInput: "ReactInputMask",
      mask: "99/99/9999",
      icon: <MdDateRange />
    },
    {
      name: "phone",
      placeholder: "Enter phone number",
      asInput: "ReactInputMask",
      mask: "(999) 999-9999",
    },
    {
      name: "address",
      placeholder: "Enter address",
      rows: 2
    },
    {
      name: "city",
      placeholder: "Enter city",
    },
    {
      name: "country",
      placeholder: "Enter country",
    },
    {
      name: "taxNo",
      placeholder: "Enter tax number",
    }

  ];

  const passwordItems = [
    {
      name: "email",
      placeholder: "Enter email",
      type: "email",
    },
    {
      name: "password",
      placeholder: "Enter password",
    },
    {
      name: "confirmPassword",
      placeholder: "Confirm password",
    },
  ];

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
          <FaUsers size={200} className="user-icon mb-2rem" />
          <Col md={6} lg={5} xl={4} className="mx-auto">
            <Form noValidate onSubmit={formik.handleSubmit} className="login-form">

              {
                formItems.map((item) => (
                  <UserForm key={item.name} formik={formik}  {...item} />
                ))
              }
              <hr />



              <UserForm
                formik={formik}
                name="email"
                placeholder="Email"
                icon={<AiOutlineUser />}
              />

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