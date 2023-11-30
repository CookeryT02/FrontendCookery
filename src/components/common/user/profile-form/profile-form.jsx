import { useFormik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { services } from "../../../../services";
import { Button, Col, Form, Row } from "react-bootstrap";
import CustomForm from "../../custom-form/custom-form";
import { utils } from "../../../../utils";
import "./profile-form.scss"

const formInputs = [
  {
    name: "firstName",
    label: "First Name"
  },
  {
    name: "phone",
    label: "Phone Number",
    asInput: "ReactInputMask",
    mask: "(999) 999-9999"
  },
  {
    name: "address",
    label: "Address",
    type: "textarea",
    rows: 4
  },
  {
    name: "lastName",
    label: "Last Name"
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
    try {
      await services.user.updateUser(values);
    } catch (error) {
      utils.functions.swalToast("update failed", "error")
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
    <div className="profile-form"> {/* SCSS dosyasındaki stil tanımları bu div içinde geçerli olacak */}
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
            <Button type="submit" className="btn-update" disabled={loading}>
              {loading ? "Updating..." : "UPDATE PROFILE"}
            </Button>
          </Col>
        </Row>

      </Form>
    </div>
  );
};

export default UserProfileForm;