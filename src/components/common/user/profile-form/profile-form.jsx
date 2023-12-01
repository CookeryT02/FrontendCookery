import { useFormik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { services } from "../../../../services";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import CustomForm from "../../custom-form/custom-form";
import { utils } from "../../../../utils";
import "./profile-form.scss"

const formInputs = [
  {
    name: "firstName",
    label: "First Name"
  },
  {
    name: "lastName",
    label: "Last Name"
  },
  {
    name: "address",
    label: "Address",
    type: "textarea",
    rows: 4
  },
  {
    name: "phone",
    label: "Phone Number",
    asInput: "ReactInputMask",
    mask: "(999) 999-9999"
  },

  {
    name: "taxNo",
    label: "Tax No"
  },
  {
    name: "city",
    label: "City"
  },
  {
    name: "country",
    label: "Country"
  }
];

const UserProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const initialValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    phone: user?.phone || "",
    taxNo: user?.taxNo || "",
    address: user?.address || "",
    city: user?.city || "",
    country: user?.country || ""
  };

  const onSubmit = async (values) => {
    setLoading(true);
    const req = {

      firstName: values.firstName,
      lastName: values.lastName,
      email: user.email,
      phone: values.phone,
      taxNo: values.taxNo,
      address: values.address,
      city: values.city,
      country: values.country,
      birthDate: user.birthDate,

    };
    try {
      await services.user.updateUser(req);
      utils.functions.swalToast(`Profile updated`, "success");
    } catch (error) {
      console.log(error)
      utils.functions.swalToast(`Profile update failed: ${error.message}`, "error");
    }
    finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema: utils.validations.userProfileFormValidationSchema,
    onSubmit
  });

  return (
    <div className="profile-form">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="justify-content-center ">
          <Col md={6}>
            {formInputs.slice(0, 3).map((item) => (
              <CustomForm key={item.name} formik={formik} {...item} />
            ))}
          </Col>
          <Col md={6}>
            {formInputs.slice(3).map((item) => (
              <CustomForm key={item.name} formik={formik} {...item} />
            ))}
            <Button type="submit" className="btn-update"
              disabled={!(formik.dirty && formik.isValid) || loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "UPDATE PROFILE"}

            </Button>
          </Col>
        </Row>

      </Form>
    </div>
  );
};

export default UserProfileForm;