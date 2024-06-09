import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function PanelHijo({
  nombre,
  edad,
  dni,
  fechaNacimiento,
  obraSocial,
  imagen,
}: {
  nombre: string;
  edad: number;
  dni: string;
  fechaNacimiento: string;
  obraSocial: string;
  imagen: string;
}) {
  return (
    <Card sx={{ width: 350, borderRadius: 4 }}>
      <CardMedia sx={{ height: 500 }} image={imagen} title="Foto de perfil" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Edad: {edad} años
        </Typography>
        <Typography variant="body2" color="text.secondary">
          DNI: {dni}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fecha de Nacimiento: {fechaNacimiento}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Obra Social: {obraSocial}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
  );
}

export function PanelPadre() {
  return (
    <div style={{ display: "flex" }}>
      <PanelHijo
        nombre="Tomas Altero"
        edad={7}
        dni="55845574"
        fechaNacimiento="15/05/2014"
        obraSocial="OSDE"
        imagen="/persona.webp"
      />
      <div style={{ marginLeft: "60px" }}>
        <PanelHijo
          nombre="María López"
          edad={35}
          dni="12345678"
          fechaNacimiento="25/10/1989"
          obraSocial="Swiss Medical"
          imagen="/persona2.webp"
        />
      </div>
    </div>
  );
}
