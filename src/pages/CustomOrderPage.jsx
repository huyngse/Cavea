import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import MainLayout from "../layouts/MainLayout.jsx";

import BirdCageDesign from "../components/SelectBox/index.jsx";
import {
  selectModel,
  selectShape,
  selectMaterial,
  selectSpoke,
  selectColor,
  selectHook,
  selectLeg,
} from "../data/CustomOptionData.jsx";

export default function CustomerOrderPage() {
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

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <MainLayout>
      <div className="d-flex justify-content-center my-5">
        <div>
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
              label="Mẫu"
              options={selectModel}
              onChange={(event) => setSelectedModel(event.target.value)}
            ></BirdCageDesign>

            <BirdCageDesign
              sx={{ width: "10rem", marginBottom: "1rem!important" }}
              labelId="shape-select-label"
              id="shape-select"
              label="Kiểu dáng"
              options={selectShape}
              onChange={(event) => setSelectedShape(event.target.value)}
            ></BirdCageDesign>

            <BirdCageDesign
              sx={{ width: "10rem", marginBottom: "1rem!important" }}
              labelId="material-select-label"
              id="material-select"
              label="Nguyên liệu"
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
              label="Số nan"
              options={selectSpoke}
              onChange={(event) => setSelectedSpoke(event.target.value)}
            ></BirdCageDesign>

            <BirdCageDesign
              sx={{ width: "15rem", marginBottom: "1rem!important" }}
              labelId="color-select-label"
              id="color-select"
              label="Màu sắc"
              options={selectColor}
              onChange={(event) => setSelectedColor(event.target.value)}
            ></BirdCageDesign>
          </Box>

          <Box>
            <BirdCageDesign
              sx={{ width: "32rem", marginBottom: "1rem!important" }}
              labelId="hook-select-label"
              id="hook-select"
              label="Móc"
              options={selectHook}
              onChange={(event) => setSelectedHook(event.target.value)}
            ></BirdCageDesign>
          </Box>

          <Box>
            <BirdCageDesign
              sx={{ width: "32rem" }}
              labelId="leg-select-label"
              id="leg-select"
              label="Chân"
              options={selectLeg}
              onChange={(event) => setSelectedLeg(event.target.value)}
            ></BirdCageDesign>
          </Box>
          <Box>
            {showWarning ? (
              <p>Please select all fields</p>
            ) : (
              <>
                <p>Tổng cộng: {total.toLocaleString("vi-VN")} VND</p>
                <ColorButton variant="contained">Đặt ngay</ColorButton>
              </>
            )}
          </Box>
        </div>
      </div>
    </MainLayout>
  );
}
