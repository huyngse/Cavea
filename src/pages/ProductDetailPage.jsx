import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../components/CageList/list_product";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CardContext } from "../contexts/CardContext.jsx";
import ImageGallery from "react-image-gallery";
import QuantityInput from "../components/QuantityInput";
import UserReview from "../components/UserReview";
import MainLayout from "../layouts/MainLayout";

export default function ProductDetailPage() {
  const { addToCart } = useContext(CardContext);
  const { productId } = useParams();

  const productInfo = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!productInfo) {
    return <div className="text-center p-5 h1">Sản phẩm không tồn tại.</div>;
  }
  const images = [
    {
      original: productInfo.image,
      thumbnail: productInfo.image,
    },
    {
      original:
        "https://www.sieuthilongchim.net/img/webroot/upload/image/files/Mai%20tu%20quy%20go%20mun%20noc%20tre%20(1).jpg",
      thumbnail:
        "https://www.sieuthilongchim.net/img/webroot/upload/image/files/Mai%20tu%20quy%20go%20mun%20noc%20tre%20(1).jpg",
    },
    {
      original:
        "https://www.sieuthilongchim.net/img/webroot/upload/image/files/Mai%20tu%20quy%20go%20mun%20noc%20tre%20(2).jpg",
      thumbnail:
        "https://www.sieuthilongchim.net/img/webroot/upload/image/files/Mai%20tu%20quy%20go%20mun%20noc%20tre%20(2).jpg",
    },
    {
      original:
        "https://www.sieuthilongchim.net/img/webroot/upload/image/files/Mai%20tu%20quy%20go%20mun%20noc%20tre%20(3).jpg",
      thumbnail:
        "https://www.sieuthilongchim.net/img/webroot/upload/image/files/Mai%20tu%20quy%20go%20mun%20noc%20tre%20(3).jpg",
    },
  ];

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      addToCart(productToAdd);
    }
  };

  const price = productInfo.price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const discount = productInfo.discount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <MainLayout>
      <div className="p-3">
        <div className="p-3 pb-0 shadow">
          <div className="row mb-3">
            <div className="col-4">
              <ImageGallery items={images} showPlayButton={false} />
            </div>
            <div className="col-8 p-3 mb-3">
              <h1>
                {productInfo.name}
                <br />
                <span className="px-2 py-1 h6 text-white rounded-5" style={{backgroundColor: "darkOrange"}}>{productInfo.model}</span>
              </h1>
              <hr />
              <div className="d-flex align-items-center">
                <div className="me"> <span className="h5 mb-0 text-danger border-danger border-bottom">{productInfo.rating.toFixed(1)}</span></div>
                <Rating
                  name="read-only"
                  value={productInfo.rating}
                  readOnly
                  precision={0.5}
                  style={{ marginLeft: "10px" }}
                  className="pe-3 border-end"
                />
                <div className="px-3 border-end">
                  <span className="h5 mb-0 me-1 border-bottom">0</span>
                  Đánh giá
                </div>
                <div className="px-3">
                  <span className="h5 mb-0 me-1 border-bottom">0</span>
                  Đã bán
                </div>
              </div>
              <hr />
              {productInfo.description}

              <div className="row mb-3">
                <div className="col-5">
                  <div>
                    <span className="fw-bold">Hình dáng:</span>{" "}
                    {productInfo.shape}
                  </div>
                  <div>
                    <span className="fw-bold">Nguyên liệu:</span>{" "}
                    {productInfo.material}
                  </div>
                  <div>
                    <span className="fw-bold">Số nan:</span> {productInfo.spoke}
                  </div>
                  <div>
                    <span className="fw-bold">Móc: </span> {productInfo.hanger}
                  </div>
                  <div>
                    <span className="fw-bold"> Chân quỳ: </span>
                    {productInfo.base}
                  </div>
                </div>
                <div className="col-7">
                  <h2 className="text-primary">{price}</h2>
                  <h3 className="text-decoration-line-through text-muted lead">
                    {discount}
                  </h3>
                  <div className="mb-3 d-flex align-items-center">
                    <strong>Số lượng:</strong> <QuantityInput />
                  </div>
                  <div className="">
                    <a href="/view-cart">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-lg me-3"
                      >
                        Mua Ngay
                      </button>
                    </a>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={() => handleAddToCart(productInfo.id)}
                    >
                      <AddShoppingCartIcon style={{ marginRight: "5px" }} />
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ############################### DESCRIPTION ################################################ */}
        <div className="accordion shadow" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h2 className="h4">Mô tả sản phẩm</h2>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
                  placerat vestibulum lectus mauris ultrices. Egestas dui id
                  ornare arcu odio ut sem. Diam volutpat commodo sed egestas
                  egestas fringilla phasellus faucibus. In est ante in nibh mauris
                  cursus mattis. Nec feugiat nisl pretium fusce id velit ut
                  tortor. Quam viverra orci sagittis eu volutpat odio facilisis.
                  Ut etiam sit amet nisl. At volutpat diam ut venenatis tellus.
                  Nisl vel pretium lectus quam id leo in vitae. Mi ipsum faucibus
                  vitae aliquet nec. Ut enim blandit volutpat maecenas volutpat
                  blandit. Semper risus in hendrerit gravida.
                </p>
                <p>
                  Nec nam aliquam sem et tortor consequat id porta. Venenatis urna
                  cursus eget nunc scelerisque. Rhoncus mattis rhoncus urna neque
                  viverra. Scelerisque purus semper eget duis at. Id diam maecenas
                  ultricies mi eget. Turpis egestas pretium aenean pharetra magna.
                  Tellus cras adipiscing enim eu turpis egestas pretium aenean.
                  Fames ac turpis egestas sed tempus urna et. Congue quisque
                  egestas diam in arcu. Lobortis elementum nibh tellus molestie.
                  Lorem donec massa sapien faucibus.
                </p>
                <p>
                  Facilisis gravida neque convallis a cras. Tortor at auctor urna
                  nunc id. Duis ultricies lacus sed turpis tincidunt id aliquet
                  risus. Id eu nisl nunc mi ipsum. Pharetra vel turpis nunc eget
                  lorem dolor sed viverra ipsum. Suspendisse interdum consectetur
                  libero id faucibus nisl tincidunt eget nullam. Et malesuada
                  fames ac turpis egestas sed. Eu non diam phasellus vestibulum
                  lorem sed risus ultricies tristique. Volutpat blandit aliquam
                  etiam erat velit scelerisque in. Faucibus ornare suspendisse sed
                  nisi lacus sed viverra tellus in.
                </p>
                <p>
                  Nulla porttitor massa id neque aliquam vestibulum morbi. Justo
                  laoreet sit amet cursus sit amet dictum sit amet. Vitae tempus
                  quam pellentesque nec nam aliquam sem et. Gravida rutrum quisque
                  non tellus orci ac auctor augue. In iaculis nunc sed augue lacus
                  viverra vitae congue eu. Ultrices gravida dictum fusce ut
                  placerat orci nulla pellentesque. Etiam sit amet nisl purus in.
                  Pellentesque id nibh tortor id. Interdum velit euismod in
                  pellentesque massa placerat duis ultricies. Quis enim lobortis
                  scelerisque fermentum dui faucibus. Nec dui nunc mattis enim ut.
                  Turpis nunc eget lorem dolor sed viverra ipsum nunc.
                </p>
                <p>
                  Etiam sit amet nisl purus in mollis nunc sed id. Ullamcorper sit
                  amet risus nullam eget. Phasellus egestas tellus rutrum tellus
                  pellentesque eu. Mauris pellentesque pulvinar pellentesque
                  habitant morbi. Et ultrices neque ornare aenean euismod
                  elementum. Faucibus turpis in eu mi bibendum neque egestas
                  congue quisque. Sit amet aliquam id diam maecenas. Est sit amet
                  facilisis magna etiam tempor orci. Purus in mollis nunc sed id
                  semper risus in hendrerit. Enim nulla aliquet porttitor lacus
                  luctus. Id consectetur purus ut faucibus pulvinar. Porta nibh
                  venenatis cras sed felis eget velit. Cursus in hac habitasse
                  platea. Tellus pellentesque eu tincidunt tortor. Diam donec
                  adipiscing tristique risus. Facilisis magna etiam tempor orci eu
                  lobortis elementum.
                </p>
              </div>
            </div>
          </div>
          {/* ############################### REVIEW ################################################ */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h2 className="h4">Đánh giá sản phẩm</h2>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
              aria-labelledby="headingTwo"
            >
              <div className="accordion-body">
                <div className="rating-box text-center p-3 mb-3">
                  <p className="h5">
                    <span className="h3 fw-bold">
                      {productInfo.rating.toFixed(1)}
                    </span>{" "}
                    trên 5
                  </p>
                  <Rating
                    name="size-large"
                    defaultValue={productInfo.rating}
                    size="large"
                    precision={0.5}
                    readOnly
                  />
                </div>
                <UserReview
                  avatar="https://i.stack.imgur.com/34AD2.jpg"
                  username="phthanh159"
                  rating={productInfo.rating}
                  date="2023-01-17 06:40"
                  likeCount={50}
                >
                  <p>
                    Cảm ơn Shopee đã luôn là người đồng hành với những sản phẩm
                    chất lượng đã tạo nên uy tín cho cửa hàng shopee. Với shipper
                    giao hàng tận tay và được kiểm tra hàng trước khi nhận làm cho
                    khách hàng rất thích những sản phẩm đó và không lâu xa khách
                    hàng(em) có thể đặt nhiều hơn nữa để ủng hộ shoppe. Cảm ơn
                    shoppe rất nhiều hẹn gặp lại vào dịp khác rất hân hạnh được
                    đặt hàng từ shopee. Thanks
                  </p>
                </UserReview>
                <UserReview
                  avatar="https://i.stack.imgur.com/34AD2.jpg"
                  username="barbie.sua"
                  rating={5}
                  date="2023-05-26 10:57"
                  likeCount={502}
                >
                  <p>
                    Chân ck mình to, rất êm chân, mua trên mall là chất lượng tốt
                    tk shop nhiều🫰🫰🫰🫰🫰
                  </p>
                </UserReview>
                <UserReview
                  avatar="https://i.stack.imgur.com/34AD2.jpg"
                  username="jennyhuncorgi"
                  rating={5}
                  date="2022-05-28 16:51"
                  likeCount={53}
                >
                  <p>
                    Hàng nên mua dép đẹp lắm ak chất tốt giao hàng còn nhanh nưa
                    ak
                  </p>
                </UserReview>
                <UserReview
                  avatar="https://i.stack.imgur.com/34AD2.jpg"
                  username="04zpt4sr2p"
                  rating={4}
                  date="2023-05-06 09:49"
                  likeCount={0}
                >
                  <p>
                    Shop giao hàng rất nhanh. Nhìn tổng thể dép cũng đẹp. Chưa đi
                    lên chưa biết độ bền thế nào? Cháu síp hàng rất nhiệt tình !
                    Lễ phép
                  </p>
                </UserReview>
              </div>
            </div>
          </div>
        </div>
      </div>


    </MainLayout>
  );
}
