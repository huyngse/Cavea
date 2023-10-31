import { useState } from "react";
import { formatCurrency } from "../../utils/utils";

const mockMaterial = [
  {
    name: "Gỗ Mun",
    img: "https://sango.us/sites/default/files/u10/go-mun-cao-cap.jpg",
    ratioPrice: 0.1,
  },
  {
    name: "Tre Già",
    img: "https://cf.shopee.vn/file/335c97c228ec5212793ebfddca6cb96e",
    ratioPrice: 0,
  },
  {
    name: "Tre xử lí",
    img: "https://bamboofurni.com/images/detailed/6/van-tam-tre-ghep-3-lop_js52-26.jpg",
    ratioPrice: 0.05,
  },
  {
    name: "Mây",
    img: "https://minhmy.com.vn/wp-content/uploads/2015/12/MCT-5002-N-2.jpg",
    ratioPrice: 0.05,
  },
  {
    name: "Hương Huyết Đỏ",
    img: "https://cuagobachviet.vn/wp-content/uploads/2020/07/go-huong-huyet-la-gi-scaled.jpg",
    ratioPrice: 0.15,
  },
  {
    name: "Inox",
    img: "https://cf.shopee.vn/file/fe24a20414f61010108dc852bc2d59b5",
    ratioPrice: 0.05,
  },
];

function MaterialConfigPage({ data, setData, setActiveStep }) {
  const [materials, setMaterials] = useState(mockMaterial);

  const handleSelectMaterial = (name, price) => {
    setData((prev) => ({
      ...prev,
      material: name,
    }));
    setActiveStep((prev) => prev + 1);
  };

  return (
    <>
      <div className="p-2">
        <h1 className="h3">Chọn nguyên liệu lồng</h1>
      </div>
      <div className="container-fluid mb-3">
        <div className="row p-2">
          {materials.map((material) => (
            <>
              <div className="col-4" key={material.name}>
                <div className="rounded shadow">
                  <div
                    className="p-2 overflow-hidden"
                    style={{ height: "200px" }}
                  >
                    <img
                      src={material.img}
                      alt=""
                      className="h-100 w-100 object-fit-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="h5">{material.name}</h3>
                    <div className="mb-2">
                      {formatCurrency(data.basePrice * material.ratioPrice)}
                    </div>
                    <button
                      className="btn btn-primary mb-3"
                      onClick={() =>
                        handleSelectMaterial(
                          material.name,
                          data.basePrice * material.ratioPrice
                        )
                      }
                    >
                      Chọn
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default MaterialConfigPage;
