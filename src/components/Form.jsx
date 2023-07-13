import { useState } from "react";
import { Button, Spacer } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const Form = ({ newLocation }) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;

    newLocation(city);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div style={{
        
          display:'flex',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '50px',

        }}>
          <Tooltip content={"Selecciona una Ciudad"} rounded color="primary">
          <Spacer y={2} />
            <Input 
              type="text"
              placeholder="Ciudad"
              size="xl"
              color= "black"
              onChange={(e) => setCity(e.target.value)}
              
            />
            <Spacer y={1} />
          </Tooltip>
          <Spacer y={1} />

          <Button size="lg" color="gradient" auto type="submit">
            {" "}
            Buscar{" "}
          </Button>
          <Spacer y={2} />
        </div>
      </form>
    </div>
  );
};

export default Form;
