import { useEffect, useState } from "react";
import { constants } from "../../../../constants";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { utils } from "../../../../utils";
import { CustomForm, Loading, Spacer } from "../../../../components";
import {
  Alert,
  Button,
  Col,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { services } from "../../../../services";
import "./style.scss"

const { routes } = constants;

const formItems = [
  {
    label: "First Name",
    name: "firstName",
  },
  {
    label: "Last Name",
    name: "lastName",
  },
  {
    label: "Address",
    name: "address",
  },
  {
    label: "Phone",
    name: "phone",
    asInput: "ReactInputMask",
    mask: "(999) 999-9999",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Birth Date",
    name: "birthDate",
    type: "date"
  },
];

const roles = [
  { label: "Customer", value: "Customer" },
  { label: "P.Manager", value: "ProductManager" },
  { label: "S.Specialist", value: "SalesSpecialist" },
  { label: "S.Manager", value: "SalesManager" },
  { label: "Administrator", value: "Administrator" }
];

const AdminUserDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    birthDate: "",
    taxNo: 0,
    password: "",
    builtIn: false,
    status: 0,
    roles: [""]
  });

  const onSubmit = async (values) => {
    setUpdating(true);
    console.log(values)
    const dto = {
      ...values,
    };

    try {
      await services.user.updateUserAdmin(id, dto);
      utils.functions.swalToast("User updated successfully.", "success");
    } catch (error) {
      utils.functions.swalToast(
        "There was an error updating the user.",
        "error"
      );
    } finally {
      setUpdating(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema:
      utils.validations.adminUserDetailsFormValidationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const removeUser = async () => {
    setDeleting(true);
    try {
      await services.user.deleteUser(id);
      utils.functions.swalToast("User deleted successfully.", "success");
      navigate(`${routes.adminUsers}`);
    } catch (error) {
      utils.functions.swalToast(
        "There was an error deleting the user.",
        "error"
      );
    } finally {
      setDeleting(false);
    }
  };

  const handleDelete = async () => {
    utils.functions
      .swalQuestion(
        "Are you sure you want to delete this user?",
        "You won't be able to revert this action!"
      )
      .then((result) => {
        if (result.isConfirmed) {
          removeUser();
        }
      });
  };

  const handleChangeRoles = (role) => {
    if (formik.values.roles.includes(role)) {
      const newRoles = formik.values.roles.filter((r) => r !== role);
      formik.setFieldValue("roles", newRoles);
    } else {
      formik.setFieldValue("roles", [...formik.values.roles, role]);
    }
  };

  const loadData = async () => {
    try {
      const userData = await services.user.getUserAdmin(id);
      setInitialValues(userData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return loading ? (
    <Loading height={500} />
  ) : (
    <Form
      noValidate
      onSubmit={formik.handleSubmit}
      className="admin-user-details-form mt-5">
      <fieldset disabled={formik.values.builtIn}>
        <Spacer height={"6rem"} />
        <Row>
          {formItems.map((item, index) => (
            <Col
              key={item.name}
              lg={(index === 0 || index === 1) ? 6 : (index === 2) ? 12 : 4}
            >
              <CustomForm formik={formik} {...item} />
            </Col>
          ))}
        </Row>

        <div>Role</div>
        <div className="d-flex gap-1">
          {roles.map((role) => (
            <Form.Check
              key={role.value}
              label={role.label}
              value={role.value}
              type="checkbox"
              name="roles"
              checked={formik.values.roles.includes(role.value)}
              onChange={() => handleChangeRoles(role.value)}
            />
          ))}
        </div>

        <div className="text-end btnRow">
          <Button
            className="btnDelete"
            variant="danger"
            onClick={handleDelete}
            disabled={deleting}>
            {deleting && (
              <Spinner animation="border" size="sm" />
            )}{" "}
            Delete
          </Button>
          <Button
            className="btnSave"
            type="submit"
            disabled={
              !(formik.dirty && formik.isValid) ||
              updating
            }>
            {updating && (
              <Spinner animation="border" size="sm" />
            )}{" "}
            Save
          </Button>
        </div>

      </fieldset>
      {formik.values.builtIn && (
        <Alert variant="warning">
          Built-in accounts cannot be deleted or updated.
        </Alert>
      )}

    </Form>
  );
};

export default AdminUserDetailsPage;
