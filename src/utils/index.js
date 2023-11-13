//FUNCTIONS
import { validCheck } from "./functions/functions";

//INITIAL VALUES
import {
    contactFormInitialValues, loginFormInitialValues, registerFormInitialValues
} from "./initial-values/initial-values"



//TABLES



//VALIDATIONS


import {
    contactFormValidationSchema, loginFormValidationSchema, registerFormValidationSchema
} from "./validations/validations"



export const utils = {
    functions: { validCheck },
    initialValues: {
        contactFormInitialValues, loginFormInitialValues, registerFormInitialValues,
    },
    tables: {},
    validations: { contactFormValidationSchema, loginFormValidationSchema, registerFormValidationSchema  },
}