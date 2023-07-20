import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "./App.css";
import { FaCalendarAlt } from "react-icons/fa";
import { Button, Radio, RadioGroup, FormLabel } from "@mui/material";
import InputMask from "react-input-mask";

function App() {
  const handleOnSubmit = (values) => {
    debugger;
    console.log(values);
  };

  const {
    register,
    control,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg">
      <div elevation={3} className="paper">
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {/* firstname */}
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

              {/* surname */}
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

              {/* gender */}
              <Grid item xs={4}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Gender</InputLabel>
                  <Select
                    label="gender"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register("gender", {
                      required: true,
                      validate: (value) => {
                        if (value == null || value == undefined) {
                          return "Bu alan zorunludur.";
                        }
                        return true;
                      },
                    })}
                    error={!!errors.gender}
                    helperText={errors.gender?.message}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0}>Woman</MenuItem>
                    <MenuItem value={1}>Man</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* isPersonal ? */}
              <Grid sx={4}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    isPersonal
                  </FormLabel>
                  <RadioGroup
                    defaultValue=""
                    name="radio-buttons-group"
                    label="isPersonal"
                    {...register("surname", {
                      required: true,
                      validate: (value) => {
                        if (!value) {
                          return "Bu alan zorunludur.";
                        }
                        return true;
                      },
                    })}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="no"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* phone number ? */}
              <Grid item xs={4}>
                <InputMask
                  label="phoneNumber"
                  mask="+90 999 999 99 99"
                  defaultValue="+90 "
                  id="phoneNumber"
                  name="phoneNumber"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /\d{3}-\d{3}-\d{4}/,
                      message:
                        "Invalid phone number format (e.g., 123-456-7890)",
                    },
                  })}
                  error={!!errors.surname}
                  helperText={errors.surname?.message}
                >
                  {(inputProps) => <input type="text" {...inputProps} />}
                </InputMask>
              </Grid>

              {/* email */}
              <Grid item sx={6}>
                <div className="email-input-container">
                  <TextField
                    label="email"
                    type="email"
                    id="emailInput"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
              </Grid>

              {/* birthday ? */}
              <Grid item xs={6}>
                <div className="birthday-picker-container">
                  <div
                    className={`birthday-picker-wrapper ${
                      errors.birthday ? "input-error" : ""
                    }`}
                  >
                    <DatePicker
                      label="birthday"
                      selected={null}
                      id="birthday"
                      placeholderText="birthday"
                      name="birthday"
                      dateFormat="dd/MM/yyyy"
                      {...register("birthday", {
                        required: true,
                        validate: (value) => {
                          if (!value) {
                            return "Bu alan zorunludur.";
                          }
                          return true;
                        },
                      })}
                      error={!!errors.birthday}
                      helperText={errors.birthday?.message}
                    />
                    <FaCalendarAlt className="birthday-picker-icon" />{" "}
                  </div>
                </div>
              </Grid>

              {/* projectName */}
              <Grid item xs={12}>
                <TextField
                  label="projectName"
                  size="small"
                  fullWidth
                  variant="outlined"
                  inputProps={{ maxLength: 50 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register("projectName", {
                    maxLength: {
                      value: 50,
                    },
                  })}
                  error={!!errors.soyad}
                  helperText={errors.soyad?.message}
                ></TextField>
              </Grid>

              {/* title */}
              <Grid item xs={6}>
                <TextField
                  label="title"
                  size="small"
                  fullWidth
                  variant="outlined"
                  inputProps={{ maxLength: 50 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register("title", {
                    maxLength: {
                      value: 50,
                    },
                  })}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                ></TextField>
              </Grid>

              {/* office */}
              <Grid item xs={6}>
                <TextField
                  label="office"
                  size="small"
                  fullWidth
                  variant="outlined"
                  inputProps={{ maxLength: 50 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register("office", {
                    maxLength: {
                      value: 50,
                    },
                  })}
                  error={!!errors.office}
                  helperText={errors.office?.message}
                ></TextField>
              </Grid>

              {/* password */}
              <Grid item xs={12}>
                <TextField
                  label="password"
                  type="password"
                  id="password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register("password", {
                    required: true,
                    validate: (value) => {
                      if (value === null || value.length < 10) {
                        return "en az 10 karakter";
                      }
                      if (
                        getValues("confirmPassword") !== null &&
                        getValues("confirmPassword") !== undefined &&
                        getValues("confirmPassword") != value
                      ) {
                        return "adam gibi gir";
                      }
                      return true;
                    },
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                <TextField
                  label="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => {
                      if (value === null || value.length < 10) {
                        return "en az 10 karakter";
                      }
                      if (
                        getValues("password") !== null &&
                        getValues("password") !== undefined &&
                        getValues("password") != value
                      ) {
                        return "adam gibi gir";
                      }
                      return true;
                    },
                  })}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit">submit</Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </div>
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

  menu container items row 
  menu1e basıldığında content root ile 
  
  */
