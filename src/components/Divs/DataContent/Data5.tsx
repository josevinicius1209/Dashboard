import React from "react";
import { Marketplaces, Data51 } from "../../Box/styles";
import { LittleTitle } from "../../Text/styles";
import { Button, ButtonGroup } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Data5: React.FC = () => {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <Marketplaces>
      <Data51>
        <LittleTitle>Period</LittleTitle>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>Hour</Button>
          <Button>Day</Button>
          <Button>Week</Button>
        </ButtonGroup>
      </Data51>

      <Data51>
        <LittleTitle>Date</LittleTitle>
        <LocalizationProvider dateAdapter={AdapterDateFns} color={"#008FFB"}>
          <DatePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Data51>

      <Data51>
        <LittleTitle>Form of Payment</LittleTitle>
        <ButtonGroup
          variant="contained"
          aria-label="contained primary button group"
        >
          <Button>Spot Price</Button>
          <Button>Installment Price</Button>
        </ButtonGroup>
      </Data51>

      <Data51>
        <LittleTitle>Marketplaces</LittleTitle>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>All Marketplaces</Button>
        </ButtonGroup>
      </Data51>
    </Marketplaces>
  );
};

export default Data5;
