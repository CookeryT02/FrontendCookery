import { useFormik } from "formik";
import { useState } from "react";
import { utils } from "../../../../utils";
import { Button, Form, Spinner } from "react-bootstrap";
import CustomForm from "../../custom-form/custom-form";
import "./form.scss"
import { services } from "../../../../services";


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
    setLoading(true);
    try {
      await services.contact.sendMessage(values)
      utils.functions.swalToast("Message sent.", "success")
      formik.resetForm();
    } catch (error) {
      utils.functions.swalToast("message failed to send ", "error")
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