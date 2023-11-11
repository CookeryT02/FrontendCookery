import { useFormik } from "formik";
import { UserForm } from "../../../components";
import { utils } from "../../../utils";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";

const RegisterPage = () => {

  const [loading, setLoading] = useState(false);

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
    initialValues: utils.initialValues.loginFormInitialValues,
    validationSchema: utils.validations.loginFormValidationSchema,
    onSubmit,
  });


  return (
    <>
      <Container>
        <UserForm
          formik={formik}
          name="email"
          placeholder="Email"
          icon={<AiOutlineUser />}
        />
      </Container>

    </>
  )
};

export default RegisterPage;