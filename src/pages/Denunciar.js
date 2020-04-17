import React, { useState } from "react";
import { Body } from "../components/Body";
import NavBar from "../components/NavBar";
import { TextField, MenuItem, IconButton, Button } from "@material-ui/core";
import styled from "styled-components";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import brLocale from "date-fns/locale/pt-BR";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

export default function Denunciar() {
  const categorias = [
    { value: "Fe", label: "Festa" },
    { value: "Fi", label: "Fila" },
  ];
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState(Date.now());

  function handleChange(e) {
    setCategoria(e.target.value);
  }

  function handleData(date) {
    setData(date);
  }

  return (
    <Body>
      <NavBar title="Fazer denúncia" />

      <Form>
        <TextField
          id="outlined-basic"
          label="Título (opcional)"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Descrição (opcional)"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Endereço" variant="outlined" />
        <TextField
          id="outlined-select-currency"
          select
          label="Categoria"
          value={categoria}
          onChange={handleChange}
          variant="outlined"
        >
          {categorias.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
          <DateTimePicker
            inputVariant="outlined"
            label="Data e hora"
            value={data}
            onChange={handleData}
            format="dd/MM/yyyy HH:mm"
          />
        </MuiPickersUtilsProvider>

        <Images>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </Images>
        <Button variant="contained">Adicionar denúncia</Button>
      </Form>
    </Body>
  );
}

const Form = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .MuiFormControl-root.MuiTextField-root {
    width: 300px;
    margin-bottom: 20px;
  }

  button {
    background-color: #ef3535 !important;
    color: white;
  }
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  .MuiIconButton-colorPrimary {
    color: #ef3535 !important;
  }
`;
