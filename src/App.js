import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./App.css";
import { Container } from "@mui/material";

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [gender, setGender] = React.useState("");

  const genderHandler = (event) => {
    setGender(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper elevation={3} className="paper">
    <form onSubmit={handleSubmit}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={8}>
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

          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>

          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>

          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </form>
    </Paper>
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
