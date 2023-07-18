import * as React from "react";
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
import { MuiTelInput } from "mui-tel-input";
import "./App.css";
import { Container } from "@mui/material";

function App() {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [gender, setGender] = React.useState("");

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

  const genderHandler = (event) => {
    setGender(event.target.value);
  };

  const phoneHandler = (newValue) => {
    setPhoneNumber(newValue);
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

  PersonelAd : String (zorunlu)
  PersonelSoyad : String (z)
  DogumTarih: Date (z)
  Cinsiyet : String, select (z)
  AsilPersonelMi : bool (z)
  Email : email ?
  ProjeAd : String ?
  CalistigiOfis : String ?
  Unvan: String ?
  Telefon :  +90 (555) 444 33 22 (z)
  Sifre : password hidden (z)
  SifreTekrar: password hidden (z)


  Kaydet 
  
  */
