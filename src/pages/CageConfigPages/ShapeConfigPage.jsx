import { useState } from "react";
import { formatCurrency } from "../../utils/utils";

const mockShape = [
  {
    name: "Vuông",
    img: "https://longchimvac.net/app/webroot/uploads/files/demo/longchaomaovuong_750x1000.jpg",
    ratioPrice: 0,
  },
  {
    name: "Tròn",
    img: "https://chimcanhvietnam.vn/images/sanpham/2094567168n%E1%BB%81n.JPG",
    ratioPrice: 0.05,
  },
  {
    name: "Thái",
    img: "https://sieuthilongchim.net/img/webroot/upload/image/files/chao%20mao%20thai%20tre%20gia%20(5).jpg",
    ratioPrice: 0.1,
  },
  { name: "Uốn Vai", img: "https://i.imgur.com/bhU41y9.jpg", ratioPrice: 0.15 },
];

function ShapeConfigPage({ data, setData, setActiveStep }) {
  const [shapes, setShapes] = useState(mockShape);

  const handleSelectShape = (name, price) => {
    setData((prev) => ({
      ...prev,
      shape: name,
    }));
    setActiveStep((prev) => prev + 1);
  };

  return (
    <>
      <div className="p-2">
        <h1 className="h3">Chọn hình dáng lồng</h1>
      </div>
      <div className="container-fluid mb-3">
        <div className="row p-2">
          {shapes.map((shape) => (
            <div className="col-4" key={shape.name}>
              <div className="rounded shadow">
                <div
                  className="p-2 overflow-hidden"
                  style={{ height: "200px" }}
                >
                  <img
                    src={shape.img}
                    alt=""
                    className="h-100 w-100 object-fit-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="h5">{shape.name}</h3>
                  <div className="mb-2">
                    {formatCurrency(data.basePrice * shape.ratioPrice)}
                  </div>
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() =>
                      handleSelectShape(
                        shape.name,
                        data.basePrice * shape.ratioPrice
                      )
                    }
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
}

export default ShapeConfigPage;
