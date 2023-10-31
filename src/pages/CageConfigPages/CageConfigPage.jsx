import { useState, useEffect, useMemo } from "react";
import CageConfigLayout from "../../layouts/CageConfigLayout";
import { formatCurrency } from "../../utils/utils";
import ProgressStepper from "../../components/ProgressStepper";
import BirdTypeConfigPage from "./BirdTypeConfigPage";
import ShapeConfigPage from "./ShapeConfigPage";
import MaterialConfigPage from "./MaterialConfigPage";
import SizeConfigPage from "./SizeConfigPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const steps = ["Loại chim", "Hình dáng", "Nguyên liệu", "Kích thước"];
function CageConfigPage() {
  const [data, setData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const userIdC=17

  const handleReset = () => {
    setData({});
    setActiveStep(0);
  };

  const handleSubmit = async () => {
    try {
      
      const body = {
        username: userIdC,
        shape: data.shape,
        material: data.material,
        basePrice: data.basePrice,
        birdtypeId: data.birdtypeId,
        description: `birdName: ${data.birdName}, height: ${data.height}, width: ${data.width}, bar: ${data.bar}`,
      };
      console.log("height",data.height)
      await axios.post("http://localhost:8089/cart/add-to-cart-v2", body);
      navigate("/checkout?customize-cage=true");
    } catch (error) {
      console.log(error.message);
    }
  };

  const isAllowNext = useMemo(() => {
    switch (activeStep) {
      case 0:
        return !!data.birdName;
      case 1:
        return !!data.shape;
      case 2:
        return !!data.material;
      case 3:
        return !!data.bar && !!data.height && !!data.width;
      default:
        return false;
    }
  }, [activeStep, data]);

  const renderActiveComponent = useMemo(() => {
    switch (activeStep) {
      case 0:
        return (
          <BirdTypeConfigPage
            data={data}
            setData={setData}
            setActiveStep={setActiveStep}
          />
        );
      case 1:
        return (
          <ShapeConfigPage
            data={data}
            setData={setData}
            setActiveStep={setActiveStep}
          />
        );
      case 2:
        return (
          <MaterialConfigPage
            data={data}
            setData={setData}
            setActiveStep={setActiveStep}
          />
        );
      case 3:
        return (
          <SizeConfigPage
            data={data}
            setData={setData}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return <></>;
    }
  }, [activeStep]);

  return (
    <CageConfigLayout>
      <div className="container-fluid">
        <ProgressStepper
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          isAllowNext={isAllowNext}
          handleFinish={handleSubmit}
        >
          <div className="row">
            <div className="col-8">{renderActiveComponent}</div>
            <div className="col-4">
              <div className="p-3">
                <h2 className="h4 text-center">Mẫu lồng của bạn</h2>
                <p>
                  <strong>Loại chim: </strong>
                  {data.birdName}
                  <br />
                  <strong>Hình dáng: </strong> {data.shape}
                  <br />
                  <strong>Nguyên liệu: </strong> {data.material}
                  <br />
                  <strong>Số nan: </strong>
                  {data.bar}
                  <br />
                  <strong>Chiều cao: </strong>
                  {data.height}
                  <br />
                  <strong>Đường kính: </strong>
                  {data.width}
                  <br />
                  <strong>Mức giá cơ bản: </strong>
                  {formatCurrency(data.basePrice)}
                </p>
              </div>
              <div className="mb-3 text-center">
                <button className="btn btn-primary w-100" onClick={handleReset}>
                  Đặt lại thiết kế
                </button>
              </div>
              <div className=" border border-danger text-danger p-3 ">
                Giá sẽ được xác định sau khi chọn loại chim, hình dáng, nguyên
                liệu và kích thước
              </div>
            </div>
          </div>
        </ProgressStepper>
      </div>
    </CageConfigLayout>
  );
}

export default CageConfigPage;
