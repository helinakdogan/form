import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import DatePicker from "react-datepicker";
import { MuiTelInput } from "mui-tel-input";
import "./App.css";
import { Container } from "@mui/material";
import { FaCalendarAlt } from "react-icons/fa";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState("");
  const [gender, setGender] = React.useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setPasswordError] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const registerOptions = {
    firstname: { required: "First name is required" },
    surname: { required: "Surname is required" },
    gender: { required: "Gender is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  const validateDatePicker = () => {
    if (!selectedDate) {
      setError("Please select your birthday.");
    } else {
      setError("");
    }
  };

  const genderHandler = (event) => {
    setGender(event.target.value);
  };

  const phoneHandler = (newValue) => {
    setPhoneNumber(newValue);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError("");
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required.");
    } else if (password.length < 10) {
      setPasswordError("Password must be at least 10 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div elevation={3} className="paper">
      <form onSubmit={handleSubmit}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                size="small"
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 50 }}
                {...register("soyad", {
                  maxLength: {
                    value: 50,
                  },
                })}
                error={!!errors.soyad}
                helperText={errors.soyad?.message}
              ></TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Surname"
                size="small"
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 5 }}
                {...register("soyad", {
                  maxLength: {
                    value: 50,
                  },
                })}
                error={!!errors.soyad}
                helperText={errors.soyad?.message}
              ></TextField>
            </Grid>

            <Grid item xs={6}>
              <MuiTelInput
                label="Phone Number"
                initialValueFormat="national"
                defaultCountry="TR"
                value={phoneNumber}
                inputProps={{ maxLength: 17 }}
                {...register("phone", {
                  maxLength: {
                    value: 17,
                  },
                })}
                withCountryCallingCode
                onChange={phoneHandler}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Gender</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={gender}
                  label="Gender"
                  onChange={genderHandler}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Woman</MenuItem>
                  <MenuItem value={20}>Man</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Project Name"
                size="small"
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 5 }}
                {...register("proje", {
                  maxLength: {
                    value: 50,
                  },
                })}
                error={!!errors.soyad}
                helperText={errors.soyad?.message}
              ></TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Title"
                size="small"
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 5 }}
                {...register("ünvan", {
                  maxLength: {
                    value: 50,
                  },
                })}
                error={!!errors.soyad}
                helperText={errors.soyad?.message}
              ></TextField>
            </Grid>

            <Grid item xs={6}>
              <div className="birthday-picker-container">
                <div className="birthday-picker-wrapper">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    onBlur={validateDatePicker} // Run validation when the date picker loses focus
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    placeholderText="Birthday"
                    dropdownMode="select"
                    dateFormat="dd/MM/yyyy"
                    maxDate={new Date()} // Prevent future dates from being selectable
                  />
                  <FaCalendarAlt className="birthday-picker-icon" />
                </div>
                {error && <div className="error-message">{error}</div>}
              </div>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Office"
                size="small"
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 5 }}
                {...register("ofis", {
                  maxLength: {
                    value: 50,
                  },
                })}
                error={!!errors.soyad}
                helperText={errors.soyad?.message}
              ></TextField>
            </Grid>

            <Grid item xs={10}>
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                id="passwordInput"
                value={password}
                onChange={handlePasswordChange}
                onBlur={validatePassword} // Run validation when the input loses focus
              />

              <label htmlFor="confirmPasswordInput">Confirm Password</label>
              <input
                type="password"
                id="confirmPasswordInput"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onBlur={validateConfirmPassword} // Run validation when the input loses focus
              />
              {errorPassword && <div className="error-message">{errorPassword}</div>}
          
            </Grid>

            
          </Grid>
        </Box>
      </form>
    </div>
  );
}
export default App;

/*
react state nedir, state ve set state kullanımına örnek


reat hook form 
formik 



formlarda validasyonlar
 ör : zorunlu mu slsn




 formda istediğimiz bilgiler: 

  *PersonelAd : String (zorunlu)
  *PersonelSoyad : String (z)
  *DogumTarih: Date (z)
  *Cinsiyet : String, select (z)
  AsilPersonelMi : bool (z)
  Email : email ?
  *ProjeAd : String ?
  *CalistigiOfis : String ?
  *Unvan: String ?
  *Telefon :  +90 (555) 444 33 22 (z)
  *Sifre : password hidden (z)
  *SifreTekrar: password hidden (z)


  Kaydet 
  
  */
