//FUNCTIONS
import { validCheck, swalQuestion, swalToast, formatDateTime } from "./functions/functions";

//INITIAL VALUES
import {
    contactFormInitialValues, loginFormInitialValues, registerFormInitialValues
} from "./initial-values/initial-values"



//TABLES



//VALIDATIONS


import {
    contactFormValidationSchema, loginFormValidationSchema, registerFormValidationSchema,
    userProfileFormValidationSchema, userPasswordFormValidationSchema
} from "./validations/validations"



export const utils = {
    functions: { validCheck, swalQuestion, swalToast, formatDateTime },
    initialValues: {
        contactFormInitialValues, loginFormInitialValues, registerFormInitialValues
    },
    tables: {},
    validations: {
        contactFormValidationSchema, loginFormValidationSchema, registerFormValidationSchema,
        userProfileFormValidationSchema, userPasswordFormValidationSchema
    },
}