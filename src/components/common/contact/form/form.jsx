import { useFormik } from "formik";
import { useState } from "react";
import { utils } from "../../../../utils";
import { Button, Form, Spinner } from "react-bootstrap";
import CustomForm from "../../custom-form/custom-form";
import "./form.scss"


const formArray = [
  {
    name: "name",
    placeholder: "Name"
  },
  {
    name: "company",
    placeholder: "Company"
  },
  {
    name: "email",
    placeholder: "Email",
    type: "email"
  },
  {
    name: "phone",
    placeholder: "Phone",
  },
  {
    name: "message",
    placeholder: "Your Message",
    type: "textarea",
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
    validationSchema: utils.validations.contactFormValidationSchema,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit} className="contact-form">
      {
        formArray.map((item) => (
          <CustomForm key={item.name} formik={formik}  {...item} />
        ))
      }

      <Button type="submit" disabled={!(formik.dirty && formik.isValid) || loading}
        className="send-btn">
        {loading && <Spinner animation="border" size="sm" />}
        SEND
      </Button>
    </Form>
  )
};

export default ContactForm;