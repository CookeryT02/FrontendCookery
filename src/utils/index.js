//FUNCTIONS
import { validCheck } from "./functions/functions";

//INITIAL VALUES
import {
    contactFormInitialValues, loginFormInitialValues
} from "./initial-values/initial-values"



//TABLES



//VALIDATIONS


import {
    contactFormValidationSchema, loginFormValidationSchema
} from "./validations/validations"



export const utils = {
    functions: { validCheck },
    initialValues: {
        contactFormInitialValues, loginFormInitialValues
    },
    tables: {},
    validations: { contactFormValidationSchema, loginFormValidationSchema },
}