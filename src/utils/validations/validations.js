import * as Yup from 'yup';

// LOGIN FORM
export const loginFormValidationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
    password: Yup.string()
        .required("Please enter your password")
        .min(8, "Password must be at least 8 characters")
        .max(50, "Password must be at most 50 characters")
});

// REGISTER FORM
export const registerFormValidationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be at most 50 characters")
        .required("Please enter your first name"),
    lastName: Yup.string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must be at most 50 characters")
        .required("Please enter your last name"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .max(50, "Password must be at most 50 characters")
        .matches(/[a-z]+/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
        .matches(/\d+/, "Password must contain at least one number")
        .matches(/[@$!%*#?&.]+/, "Password must contain at least one special character")
        .required("Please enter your password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords fields doesn't match")
        .required("Please confirm your password"),
    phone: Yup.string()
        .matches(/^[\d\s()/-]+$/, "There are invalid characters in your phone number")
        .min(14, "Phone number must be at least 10 digits")
        .max(14, "Phone number must be at most 10 digits")
        .required("Please enter your phone number"),
    address: Yup.string()
        .min(5, "Address mustW be at least 5 characters")
        .max(50, "Address must be at most 50 characters")
        .required("Please enter your address"),
    city: Yup.string()
        .required("Please enter your zip code"),
    country: Yup.string()
        .required("Please enter your zip code"),
    taxNo: Yup.string()
        .required("Please enter your zip code"),
    birthDate: Yup.string()
        .required("Please enter your birth date"),
});


// CONTACT FORM
export const contactFormValidationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters")
        .required("Please enter your name"),
    company: Yup.string()
        .min(2, "Company name must be at least 2 characters")
        .max(50, "Company name must be at most 50 characters")
        .required("Please enter your company name"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
    phone: Yup.string()
        .min(13, "Phone number must be at least 13 digits")
        .max(13, "Phone number must be at most 13 digits")
        .required("Please enter your phone number"),
    message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .max(200, "Message must be at most 200 characters")
        .required("Please enter your message"),
});
