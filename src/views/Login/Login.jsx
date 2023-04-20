import { useFormik } from "formik";
import { useContext } from "react";
import FormControl from "../../components/FormControl/FormControl";
import Input from "../../components/Input/Input";
import AuthContext from "../../contexts/AuthContext";
import { login as loginService } from "../../services/AuthService";
import { setAccessToken } from "../../stores/AccessTokenStore";
import { loginSchema } from "../schemas/login.schema";
import "./Login.css";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { login } = useContext(AuthContext);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setFieldError,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginService({ email: values.email, password: values.password }) // llama a /login del back pasandole el email y la password
        .then((response) => {
          // Usar el login del contexto
          login(response.accessToken);
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            setFieldError("email", err?.response?.data?.message);
          } else {
            setFieldError("email", err.message);
          }
          setSubmitting(false);
        });

      // Peticion al back para que me devuelva el JWT
    },
  });

  return (  
    <div className="Login-bg">
      <div className="Login">
        <h1>Login</h1>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="text-center d-flex flex-column align-items-center ">
            <img src="./images/logo-negro.png" style={{ width: "100px" }}></img>
            <small className="logo text-small pt-2 pb-3">Nomad Camper</small>
          </div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && errors.email}
            placeholder="Enter your email..."
          />
          {touched.email && errors.email && (
            <div className="text-danger">{errors.email}</div>
          )}

          <label htmlFor="password">Password</label>
          <Input
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password}
            placeholder="Enter your password..."
            type="password"
          />
          {touched.password && errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}

          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
