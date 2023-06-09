import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import FormControl from "../../components/FormControl/FormControl";
import { createUser } from "../../services/UserService";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "Por favor, introduce tu nombre";
      }

      if (!values.lastName) {
        errors.lastName = "Por favor, introduce tus apellidos";
      }

      if (!values.email) {
        errors.email = "Por favor, introduce tu email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Dirección de email no válida";
      }

      if (!values.username) {
        errors.username = "Por favor, introduce un nombre de usuario";
      }

      if (!values.password) {
        errors.password = "Por favor, introduce una contraseña";
      } else if (values.password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres";
      }

      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Las contraseñas no coinciden";
      }

      return errors;
    },
    onSubmit: (values) => {
      createUser(values)
        .then(() => {
          navigate("/login");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  console.log(errors);

  return (
    <div className="signup-card-container">
      <div className="signup-card">
        <div className="signup-card__header">
          <h2 className="signup-card__title">Crear cuenta</h2>
          <img src="./images/logo-negro.png" style={{ width: "100px" }}></img>
          <small className="logo text-small pt-2 pb-3">Nomad Camper</small>
        </div>
        <div className="signup-card__body">
          <form onSubmit={handleSubmit} className="signup-form">
            <FormControl
              text="Nombre"
              error={touched.firstName && errors.firstName}
              htmlFor="firstname"
            >
              <Input
                label="Nombre"
                id="firstName"
                name="firstName"
                type="text"
                value={values.firstName}
                error={touched.firstName && errors.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </FormControl>
            <FormControl
              text="Apellidos"
              error={touched.lastName && errors.lastName}
              htmlFor="lastname"
            >
              <Input
                label="Apellidos"
                id="lastName"
                name="lastName"
                type="text"
                value={values.lastName}
                error={touched.lastName && errors.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </FormControl>
            <FormControl
              text="Email"
              error={touched.email && errors.email}
              htmlFor="email"
            >
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                value={values.email}
                error={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </FormControl>
            <FormControl
              text="Nombre de usuario"
              error={touched.username && errors.username}
              htmlFor="username"
            >
              <Input
                label="Nombre de usuario"
                id="username"
                name="username"
                type="text"
                value={values.username}
                error={touched.username && errors.username}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </FormControl>

            <FormControl
              text="Contraseña"
              error={touched.password && errors.password}
              htmlFor="password"
            >
              <Input
                label="Contraseña"
                id="password"
                name="password"
                type="password"
                value={values.password}
                error={touched.password && errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </FormControl>
            <FormControl
              text="Repetir contraseña"
              error={touched.confirmPassword && errors.confirmPassword}
              htmlFor="confirmPassword"
            >
              <Input
                label="Repetir contraseña"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </FormControl>

            <button type="submit">Crear cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignupForm;
