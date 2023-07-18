import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import './App.css';

const RegisterForm = () => {
  const options = [
    { value: 'woman', label: 'woman' },
    { value: 'man', label: 'man' },
];
  //const [selected, setSelected] = useState(""); //options[0]

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

  const submitHandler = () => {
    console.log("surname");
  }

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div>
        <label>First Name</label>
        <input
          firstname="firstname"
          type="text"
          {...register("firstname", registerOptions.firstname)}
        />
        <small className="text-danger">
          {errors?.firstname && errors.firstname.message}
        </small>
      </div>

      <div>
        <label>Surname</label>
        <input
          surname="firstname"
          type="text"
          {...register("surname", registerOptions.surname)}
        />
        <small className="text-danger">
          {errors?.surname && errors.surname.message}
        </small>
      </div>

      <div>
        <label>Gender</label>
        {/*<select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
          </select>*/}
        <Select
          value={options.value}
          options={options}
          defaultValue={""}
        />
          <small className="text-danger">
            {options.value==="" && errors?.gender && errors.gender.message}      
        </small>
        
        
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="optional"
          {...register("email", registerOptions.email)}
        />
      </div>

      <div>
        <label>Project Name</label>
        <input
          surname="projectName"
          type="text"
          placeholder="optional"
          {...register("projectName", registerOptions.surname)}
        />
      </div>

      <div>
        <label>Office Name</label>
        <input
          surname="officeName"
          type="text"
          placeholder="optional"
          {...register("officeName", registerOptions.officeName)}
        />
      </div>

      <div>
        <label>Title</label>
        <input
          surname="title"
          type="text"
          placeholder="optional"
          {...register("title", registerOptions.title)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register("password", registerOptions.password)}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>

      <div>
        <label>Password Again</label>
        <input
          type="password"
          name="password"
          {...register("password", registerOptions.password)}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>

      <button onChange={submitHandler}>Submit</button>
    </form>
  );
};
export default RegisterForm;

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
