import * as React from "react";
import { useState } from "react";
//import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "./App.css";
import { FaCalendarAlt } from "react-icons/fa";
import MuiPhoneNumber from "mui-phone-number";
import { Button } from "@mui/material";
import InputMask from "react-input-mask";

function App() {
  const handleOnSubmit = (values) => {
    debugger;
    console.log(values);
  };

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div elevation={3} className="paper">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="firstname"
                size="small"
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 50 }}
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("firstname", {
                  required: true,
                  validate: (value) => {
                    if (!value) {
                      return "Bu alan zorunludur.";
                    }
                    return true;
                  },
                })}
                error={!!errors.firstname}
                helperText={errors.firstname?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="surname"
                size="small"
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 50 }}
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("surname", {
                  required: true,
                  validate: (value) => {
                    if (!value) {
                      return "Bu alan zorunludur.";
                    }
                    return true;
                  },
                })}
                error={!!errors.surname}
                helperText={errors.surname?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <InputMask
                mask="+90 999 999 99 99"
                defaultValue="+90 "
                id="phoneNumber"
                name="phoneNumber"
                
                {...register("phoneNumber", {
                  required: true,
                  validate: (value) => {                    
                    if (value.length === 17) {
                      return "";
                    } else return "invalid";
                  },
                })}
              />
              </Grid>

              {/*{<MuiPhoneNumber
                name="phone"
                value={phone}
                label="phoneNumber"
                defaultCountry={"tr"}
                countryCodeEditable={false}
                
                onChange={(e) => {
                  debugger;
                  if (!e || e.length > 17) {
                    return;
                  } else {
                    setValue("phoneNumber", e);
                  }
                }}
                // {...register("phoneNumber", {
                //   required: "Bu alan zorunludur.",
                //   validate: (value) => {
                //     if (!value || value.length > 17) {
                //       return "Lütfen geçerli bir telefon numarası girin.";
                //     }
                //     return true;
                //   },
                // })}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />*/}
            
            {/*
            <Grid item xs={6}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Gender</InputLabel>
                <Select
                  label="gender"
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={selectedGender}
                  //onBlur={validateGender}
                  //onChange={handleGender}
                  error={!!genderError}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={0}>Woman</MenuItem>
                  <MenuItem value={1}>Man</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <div className="birthday-picker-container">
                <div className="birthday-picker-wrapper">
                  <DatePicker
                    label="birthday"
                    selected={selectedDate}
                    //onChange={handleDateChange}
                    //onBlur={validateDatePicker} // Run validation when the date picker loses focus
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

            <Grid item sx={12}>
              <div className="email-input-container">
                <TextField
                  label="email"
                  type="email"
                  placeholder="Email"
                  id="emailInput"
                />
                emailError={!!errors.email}
                emailHelperText={errors.email?.message}
              </div>
            </Grid>
            {console.log("render oldu")}
            <Grid item xs={10}>
              <TextField
                label="password"
                type="password"
                placeholder="Password"
                id="passwordInput"
                value={password}
                //onChange={handlePasswordChange}
                //onBlur={validatePassword} // Run validation when the input loses focus
              />
              <TextField
                label="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                value={confirmPassword}
                //onChange={handleConfirmPasswordChange}
                //onBlur={validateConfirmPassword} // Run validation when the input loses focus
              />
              {errorPassword && (
                <div className="error-message">{errorPassword}</div>
              )}
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="projectName"
                size="small"
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 5 }}
                {...register("projectName", {
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
                label="title"
                size="small"
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 5 }}
                {...register("title", {
                  maxLength: {
                    value: 50,
                  },
                })}
                error={!!errors.title}
                helperText={errors.title?.message}
              ></TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="office"
                size="small"
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 5 }}
                {...register("office", {
                  maxLength: {
                    value: 50,
                  },
                })}
                error={!!errors.office}
                helperText={errors.office?.message}
              ></TextField>
            </Grid> */}

            <Grid item xs={12}>
              <Button type="submit">submit</Button>
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

  **PersonelAd : String (zorunlu)
  **PersonelSoyad : String (z)
  
  **Email : email ?
  **ProjeAd : String ?
  **CalistigiOfis : String ?
  **Unvan: String ?
  **DogumTarih: Date (z)
  **Sifre : password hidden (z)
  **SifreTekrar: password hidden (z)

  *Telefon :  +90 (555) 444 33 22 (z)
  *Cinsiyet : String, select (z)
  AsilPersonelMi : bool (z)

  Kaydet 
  
  */

/*
  <TextField
                label="First Name"
                value={firstname}
                onChange={handleFirstnameChange}
                onBlur={validateFirstName} // Run validation when the input loses focus
                error={!!firstnameError}
                helperText={firstnameError}
                required
              /> */
