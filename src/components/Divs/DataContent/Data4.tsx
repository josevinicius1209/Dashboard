import React from "react";
import { Box } from "../../Box/styles";
import { Header } from "../styles";
import { LittleTitle } from "../../Text/styles";
import Seletor from "../../Selector/index";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Data41 } from "../../Box/styles";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

const Data4: React.FC = () => {
  const [value, setValue] = React.useState<Date | null>(null);

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 5,
    maxColumns: 6,
  });

  return (
    <Box>
      <Header>
        <LittleTitle>Offer</LittleTitle>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Seletor />
      </Header>
      <Data41></Data41>
    </Box>
  );
};

export default Data4;
