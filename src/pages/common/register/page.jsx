import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import PageHeader from "../../../components/common/page-header/page-header";
import Spacer from "../../../components/common/spacer/spacer";
import { useFormik } from "formik";
import { utils } from "../../../utils";
import { useState } from "react";
import { FaUsers , FaPhoneAlt } from "react-icons/fa"
import { PasswordInput, UserForm } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { MdDateRange , MdPlace, MdOutlineEmail  } from "react-icons/md";
import { constants } from "../../../constants";
import { TbReceiptTax } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { loginFailure } from "../../../store";
import { services } from "../../../services";
import { Spinner } from 'react-bootstrap';



const {routes} = constants


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
    placeholder: "Enter birthday (yyyy-mm-dd)",
    asInput: "ReactInputMask",
    mask: "9999-99-99",
    icon: <MdDateRange />
  },
  {
    name: "phone",
    placeholder: "Enter phone number",
    asInput: "ReactInputMask",
    mask: "(999) 999-9999",
    icon: <FaPhoneAlt />
  },
  {
    name: "address",
    placeholder: "Enter address",
    rows: 2,
    icon: <MdPlace />
  },
  {
    name: "city",
    placeholder: "Enter city",
    icon: <MdPlace />
  },
  {
    name: "country",
    placeholder: "Enter country",
    icon: <MdPlace />
  },
  {
    name: "taxNo",
    placeholder: "Enter tax number",
    icon: <TbReceiptTax />
  }

];

const passwordItems = [
  {
    name: "email",
    placeholder: "Enter email",
    type: "email",
    icon: <MdOutlineEmail />
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

const RegisterPage = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
       dispatch(loginFailure());
       utils.functions.swalToast(error.response?.data?.message, "error");
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
            <Form noValidate onSubmit={formik.handleSubmit} className="login-form mb-4">

              {
                formItems.map((item) => (
                  <UserForm key={item.name} formik={formik}  {...item} />
                ))
              }
              <hr />
              {
                passwordItems.map((item)=>(
                  item.name === "email" ? (
                    <UserForm key={item.name} formik={formik} {...item}/>
                  ) : (
                    <PasswordInput key={item.name} formik={formik} {...item}/>
                  )
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
              <Link to={routes.login} style={{color:"black",  display: "flex", justifyContent:"center"}}>Do you have already an account?</Link>
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