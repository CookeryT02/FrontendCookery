import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import PageHeader from "../../../components/common/page-header/page-header";
import Spacer from "../../../components/common/spacer/spacer";
import { useFormik } from "formik";
import { utils } from "../../../utils";
import { useState } from "react";
import { FaUsers } from "react-icons/fa"
import { BiUser } from "react-icons/bi"
import { PasswordInput } from "../../../components";
import { constants } from "../../../constants";
import { useNavigate } from "react-router-dom";

const {routes } = constants;

const formItems = [
  {
      name: "firstName",
      label: "First Name",
      placeholder: "Enter first name",
  },
  {
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter last name",
  },
  {
      name: "email",
      label: "Email",
      placeholder: "Enter email",
      type: "email",
  },
  {
      name: "phoneNumber",
      label: "Phone Number",
      placeholder: "Enter phone number",
      asInput: "ReactInputMask",
      mask: "(999) 999-9999",
  },
  {
      name: "address",
      label: "Address",
      placeholder: "Enter address",
  },
  {
      name: "city",
      label: "City",
      placeholder: "Enter city",
  },
  {
      name: "country",
      label: "Country",
      placeholder: "Enter country",
  },
  {
      name: "taxNumber",
      label: "Tax number",
      placeholder: "Enter tax number",
  }

];

const passwordItems = [
  {
      name: "password",
      label: "Password",
      placeholder: "Enter password",
  },
  {
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm password",
  },
];

const RegisterPage = () => {

  const formItems = [
    {
      name: "firstName",
      label: "First Name",
      placeholder: "Enter first name",
      icon: <AiOutlineUser />
    },
    {
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter last name",
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      placeholder: "Enter phone number",
      asInput: "ReactInputMask",
      mask: "(999) 999-9999",
    },
    {
      name: "address",
      label: "Address",
      placeholder: "Enter address",
    },
    {
      name: "city",
      label: "City",
      placeholder: "Enter city",
    },
    {
      name: "country",
      label: "Country",
      placeholder: "Enter country",
    },
    {
      name: "taxNumber",
      label: "Tax number",
      placeholder: "Enter tax number",
    }

  ];

  const passwordItems = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter email",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm password",
    },
  ];

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await services.user.register(values);
      utils.functions.swalToast(
          "You have successfully registered!",
          "success"
      );
      navigate(routes.login);
    } catch (error) {
      console.log(error);
            utils.functions.swalToast(error.response.data.message, "error");
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

