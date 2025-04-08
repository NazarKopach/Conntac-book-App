import * as Yup from "yup";

const phoneNumberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const addProfileSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must less 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .required("Number is required")
    .matches(phoneNumberRegex, "Invalid phone number"),
});

export const RegisterUserSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 8 characters")
    .required("Password is required"),
});

export const LoginUserSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 8 characters")
    .required("Password is required"),
});

export const SearchProductsSchema = Yup.object({
  searchTerm: Yup.string()
    .required("Search term is required")
    .min(2, "Search term must be at least 2 characters"),
});
