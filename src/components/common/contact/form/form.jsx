import { useFormik } from "formik";
import { useState } from "react";
import { utils } from "../../../../utils";
import { Button, Form, Spinner } from "react-bootstrap";
import CustomForm from "../../custom-form/custom-form";


const formArray = [
  {
    name: "name",
    label: "Name"
  },
  {
    name: "company",
    label: "Company"
  },
  {
    name: "email",
    label: "Email",
    type: "email"
  },
  {
    name: "phone",
    label: "Phone",
    type: "phone"
  },
  {
    name: "message",
    label: "Message",
    type: "text",
    rows: 3
  }
]

const ContactForm = () => {

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    try {
      // service contact send message( values)
      // success message
      formik.resetForm
    } catch (error) {
      //error message
    }
    finally { setLoading(false) }
  }

  const formik = useFormik({
    initialValues: utils.initialValues.contactFormInitialValues,
    validationSchema: utils.validations.contactFormValidations,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit} className="contact-form">
      {
        formArray.map((item) => (
          <CustomForm key={item.name} formik={formik} {...item} />
        ))
      }

      <Button type="submit" disabled={!(formik.dirty && formik.isValid) || loading} className="w-100">
        {loading && <Spinner animation="border" size="sm" />}
        Send
      </Button>
    </Form>
  )
};

export default ContactForm;