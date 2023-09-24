import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import BirdCageDesign from "../../Components/SelectBox/index.jsx";
import {
  selectModel,
  selectShape,
  selectMaterial,
  selectSpoke,
  selectColor,
  selectHook,
  selectLeg,
} from "./selectList.jsx";
import { FormWrapper } from "../../Components/Header/style_component.jsx";
import { CustomButtonForHomePage } from "../../Components/Button/style_component.jsx";
import { SelectGroup } from "./style_component.jsx";

function ServiceForm() {
  const [selectedModel, setSelectedModel] = useState(selectModel[0].value);
  const [selectedShape, setSelectedShape] = useState(selectShape[0].value);
  const [selectedMaterial, setSelectedMaterial] = useState(
    selectMaterial[0].value
  );
  const [selectedSpoke, setSelectedSpoke] = useState(selectSpoke[0].value);
  const [selectedColor, setSelectedColor] = useState(selectColor[0].value);
  const [selectedHook, setSelectedHook] = useState(selectHook[0].value);
  const [selectedLeg, setSelectedLeg] = useState(selectLeg[0].value);

  const [total, setTotal] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const calculatedTotal =
      selectedModel *
      selectedShape *
      selectedMaterial *
      selectedSpoke *
      selectedColor *
      selectedHook *
      selectedLeg;
    setTotal(calculatedTotal);
    setShowWarning(calculatedTotal === 0);
  }, [
    selectedModel,
    selectedShape,
    selectedMaterial,
    selectedSpoke,
    selectedColor,
    selectedHook,
    selectedLeg,
  ]);

  return (
    <FormWrapper>
      <SelectGroup>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <BirdCageDesign
            sx={{ width: "10rem", marginBottom: "1rem!important" }}
            labelId="model-select-label"
            id="model-select"
            label="Model"
            options={selectModel}
            onChange={(event) => setSelectedModel(event.target.value)}
          ></BirdCageDesign>

          <BirdCageDesign
            sx={{ width: "10rem", marginBottom: "1rem!important" }}
            labelId="shape-select-label"
            id="shape-select"
            label="Shape"
            options={selectShape}
            onChange={(event) => setSelectedShape(event.target.value)}
          ></BirdCageDesign>

          <BirdCageDesign
            sx={{ width: "10rem", marginBottom: "1rem!important" }}
            labelId="material-select-label"
            id="material-select"
            label="Material"
            options={selectMaterial}
            onChange={(event) => setSelectedMaterial(event.target.value)}
          ></BirdCageDesign>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <BirdCageDesign
            sx={{ width: "15rem", marginBottom: "1rem!important" }}
            labelId="spoke-select-label"
            id="spoke-select"
            label="Spoke"
            options={selectSpoke}
            onChange={(event) => setSelectedSpoke(event.target.value)}
          ></BirdCageDesign>

          <BirdCageDesign
            sx={{ width: "15rem", marginBottom: "1rem!important" }}
            labelId="color-select-label"
            id="color-select"
            label="Color"
            options={selectColor}
            onChange={(event) => setSelectedColor(event.target.value)}
          ></BirdCageDesign>
        </Box>

        <Box>
          <BirdCageDesign
            sx={{ width: "32rem", marginBottom: "1rem!important" }}
            labelId="hook-select-label"
            id="hook-select"
            label="Hook"
            options={selectHook}
            onChange={(event) => setSelectedHook(event.target.value)}
          ></BirdCageDesign>
        </Box>

        <Box>
          <BirdCageDesign
            sx={{ width: "32rem" }}
            labelId="leg-select-label"
            id="leg-select"
            label="Leg"
            options={selectLeg}
            onChange={(event) => setSelectedLeg(event.target.value)}
          ></BirdCageDesign>
        </Box>
        <Box>
          {showWarning ? (
            <p>Please select all fields</p>
          ) : (
            <>
              <p>Total: {total.toLocaleString("vi-VN")} VND</p>
              <CustomButtonForHomePage>Pay now</CustomButtonForHomePage>
            </>
          )}
        </Box>
      </SelectGroup>
    </FormWrapper>
  );
}

export default ServiceForm;
