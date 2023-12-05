import { useFormik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { services } from "../../../../services";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import CustomForm from "../../custom-form/custom-form";
import { utils } from "../../../../utils";
import "./password-form.scss"

const formInputs = [
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "oldPassword",
    label: "Current Password",
  },
  {
    name: "newPassword",
    label: "New Password",
  },
  {
    name: "confirmNewPassword",
    label: "New Password (retry)",
  },
];

const UserPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const initialValues = {
    email: user?.email || "",
  };

  const onSubmit = async (values) => {
    setLoading(true);
    const req = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword
    };

    try {
      await services.user.updatePassword(req);
      formik.resetForm();
    } catch (error) {
      utils.functions.swalToast(`Password update failed: ${error.message}`, "error");
    }
    finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema: utils.validations.userPasswordFormValidationSchema,
    onSubmit
  });

  return (
    <div className="password-form">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="justify-content-center ">
          <Col md={6}>
            {formInputs.slice(0, 2).map((item) => (
              <CustomForm key={item.name} formik={formik} {...item} disabled={item.name === 'email'} />
            ))}
          </Col>
          <Col md={6}>
            {formInputs.slice(2).map((item) => (
              <CustomForm key={item.name} formik={formik} {...item} />
            ))}
            <Button type="submit" className="btn-update"
              disabled={!(formik.dirty && formik.isValid) || loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "UPDATE PASSWORD"}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UserPasswordForm;