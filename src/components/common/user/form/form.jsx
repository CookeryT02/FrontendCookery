import React from 'react'
import "./form.scss"
import { Form, InputGroup } from 'react-bootstrap';
import { utils } from "../../../../utils";

const UserForm = (props) => {
    const {
        asGroup,
        asInput,
        disabled = false,
        floating,
        formik,
        itemsArr = [],
        label,
        mask,
        name,
        placeholder,
        rows,
        type = "text",
        min,
        icon
    } = props;

    let properties = {
        ...formik.getFieldProps(name),
        ...utils.functions.validCheck(name, formik),
        disabled,
    };

    if (["text", "date", "month", "time", "number", "email"].includes(type)) {
        properties = {
            ...properties,
            as: asInput === "ReactInputMask" ? ReactInputMask : asInput,
            mask: mask,
            placeholder: placeholder,
            type: type,
            min: min,
            rows: rows
        };
    } else if (type === "textarea") {
        properties = {
            ...properties,
            as: type,
            placeholder: placeholder,
            rows: rows,
        };
    }

    switch (type) {
        case "text":
        case "date":
        case "month":
        case "time":
        case "number":
        case "email":
        case "textarea":
            return floating ? (
                <FloatingLabel label={label} >
                    <Form.Control {...properties} />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors[name]}
                    </Form.Control.Feedback>
                </FloatingLabel>
            ) : (
                <InputGroup as={asGroup} className="" >
                    <InputGroup.Text className='icon'>
                        {icon}
                    </InputGroup.Text>
                    <Form.Control {...properties} />
                    <Form.Control.Feedback type="invalid" className="mt-2">
                        {formik.touched[name] && formik.errors[name]}
                    </Form.Control.Feedback>
                </InputGroup>
            );
        case "select":
            return (
                <Form.Group as={asGroup} className="">
                    <Form.Label>{label}</Form.Label>
                    <Form.Select {...properties}>
                        {itemsArr.map((item) => (
                            <option key={item.id} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            );
    }
}

export default UserForm