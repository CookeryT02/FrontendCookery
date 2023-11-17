import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import PageHeader from "../../../components/common/page-header/page-header";
import Spacer from "../../../components/common/spacer/spacer";
import { useFormik } from "formik";
import { utils } from "../../../utils";
import { useState } from "react";
import { FaUsers } from "react-icons/fa"
import { PasswordInput, UserForm } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TbReceiptTax } from "react-icons/tb"
import { MdDateRange } from "react-icons/md"

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
      icon: <AiOutlineUser />
    },
    {
      name: "birthDate",
      label: "Birthday",
      placeholder: "Enter birthday",
      asInput: "ReactInputMask",
      mask: "99/99/9999",
      icon: <MdDateRange />
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "Enter phone number",
      asInput: "ReactInputMask",
      mask: "(999) 999-9999",
      icon: <AiOutlinePhone/>
    },
    {
      name: "address",
      label: "Address",
      placeholder: "Enter address",
      icon: <CiLocationOn/>
    },
    {
      name: "city",
      label: "City",
      placeholder: "Enter city",
      icon: <CiLocationOn/>
    },
    {
      name: "country",
      label: "Country",
      placeholder: "Enter country",
      icon: <CiLocationOn/>
    },
    {
      name: "taxNo",
      label: "Tax number",
      placeholder: "Enter tax number",
      icon: <TbReceiptTax/>
    }

  ];

  const passwordItems = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter email",
      type: "email",
      icon: <AiOutlineUser />,
    },
    {
      name: "password",
      placeholder: "Enter password",
      component: PasswordInput,
    },
    {
      name: "confirmPassword",
      placeholder: "Confirm password",
      component: PasswordInput,
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
                  <div key={item.name} className="mb-5">
                      <UserForm key={item.name} formik={formik}  {...item}/>
                  </div>
                ))
              }
              <hr />
              {
               passwordItems.map((item, index) => (
                 <div key={item.name} className="mb-2">
                      {item.component ? (
                         <item.component formik={formik} {...item} className="g-5" />
                      ) : (
                         <UserForm formik={formik} {...item} className="g-5" />
                      )}
                 </div>
               ))
               }

              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid) || loading}
                  className="login-btn">
                  {loading && <Spinner animation="border" size="sm" />} REGISTER
                </Button>
              </div>
              <Link to={"/login"} className="d-flex justify-content-center mt-3"
                  style={{color:"black"}}
              >
                  Do you have already an account?
                </Link>
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