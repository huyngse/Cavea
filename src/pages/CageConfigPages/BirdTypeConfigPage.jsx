import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/utils";
import axios from "axios";

import chimCuGay from "../../assets/Bird-photos/chim-cu-gay.jpg";
import chimHoaMi from "../../assets/Bird-photos/chim-hoa-mi.jpg";
import chimChaoMao from "../../assets/Bird-photos/chim-chao-mao.jpg";
import chimKhuyen from "../../assets/Bird-photos/chim-khuyen.jpg";
import chimChoeThan from "../../assets/Bird-photos/chim-choe-than.jpg";
import chimKhuou from "../../assets/Bird-photos/chim-khuou.jpg";
import chimHutMat from "../../assets/Bird-photos/chim-hut-mat.jpg";
import chimChoeLua from "../../assets/Bird-photos/chim-chich-choe-lua.jpg";

const mockBirdTypes = [
  {
    birdtypeId: 1,
    birdName: "Cu Gáy",
    basePrice: 100000,
    baseTime: 1,
    img: chimCuGay,
  },
  {
    birdtypeId: 2,
    birdName: "Chào Mào",
    basePrice: 150000,
    baseTime: 2,
    img: chimChaoMao,
  },
  {
    birdtypeId: 3,
    birdName: "Khuyên",
    basePrice: 125000,
    img: chimKhuyen,
    baseTime: 2,
  },
  {
    birdtypeId: 4,
    birdName: "Họa MI",
    basePrice: 144000,
    img: chimHoaMi,
    baseTime: 1,
  },
  {
    birdtypeId: 5,
    birdName: "Chích Chòe Than",
    basePrice: 135000,
    img: chimChoeThan,
    baseTime: 2,
  },
];
const BirdTypeConfigPage = ({ data, setData, setActiveStep }) => {
  const [birdTypes, setBirdTypes] = useState(mockBirdTypes);

  useEffect(() => {
    const handleGetBirdTypes = async () => {
      try {
        const res = await axios.get("http://localhost:8089/bird-types/get");
        setBirdTypes(res.data.list);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleGetBirdTypes();
  }, []);

  const handleSelectBirdType = ({ birdtypeId, birdName, basePrice }) => {
    setData((prev) => ({
      ...prev,
      birdtypeId,
      birdName,
      basePrice,
    }));
    setActiveStep((prev) => prev + 1);
  };

  return (
    <>
      <div className="p-2">
        <h1 className="h3">Chọn loại chim</h1>
      </div>
      <div className="container-fluid mb-3">
        <div className="row p-2 ">
          {birdTypes.map((birdType) => (
            <div className="col-4 mb-4" key={birdType.birdtypeId}>
              <div className="rounded shadow">
                <div
                  className="p-2 overflow-hidden"
                  style={{ height: "200px" }}
                >
                  <img
                    src={birdType.img}
                    alt=""
                    className="h-100 w-100 object-fit-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="h5">{birdType.birdName}</h3>
                  <div className="mb-2">
                    {formatCurrency(birdType.basePrice)}
                  </div>
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => handleSelectBirdType(birdType)}
                  >
                    Chọn
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BirdTypeConfigPage;
