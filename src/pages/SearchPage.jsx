import React from "react";
import MainLayout from "../layouts/MainLayout";
import SearchFilter from "../components/SearchFilter";
import SmallProductCard from "../components/SmallProductCard";
export default function SearchPage() {
  return (
    <MainLayout>
      <div className="bg-gray d-flex">
        <div style={{ width: "20%" }} className="bg-white">
          <SearchFilter />
        </div>
        <div className="p-3" style={{ width: "80%" }}>
          <div>{/* Hiển thị lồng để so sánh tại đây */}</div>
          <div className="d-flex mb-3">
            <i className="bi bi-info-circle me-2"></i>
            <h1 className="h5 text-muted">
              Kết quả tìm kiếm cho từ khóa{" "}
              <span className="text-primary">'lồng chim'</span>
            </h1>
          </div>
          <div className="p-3 sorting-panel d-flex gap-3 align-items-center mb-3">
            <div>Sắp xếp theo</div>
            <div>
              <input
                className="form-check-input"
                type="radio"
                name="sortSearch"
                id="relevantSort"
              />
              <label className="form-check-label" htmlFor="relevantSort">
                Liên quan
              </label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="radio"
                name="sortSearch"
                id="latestSort"
              />
              <label className="form-check-label" htmlFor="latestSort">
                Mới nhất
              </label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="radio"
                name="sortSearch"
                id="sellingSort"
              />
              <label className="form-check-label" htmlFor="sellingSort">
                Bán chạy
              </label>
            </div>
            <div className="me-auto">
              <select
                className="form-select rounded-0"
                aria-label="Default select example"
                defaultValue={"0"}
              >
                <option value="0">Giá</option>
                <option value="1">Giá: Thấp đến Cao</option>
                <option value="2">Giá: Cao đến Thấp</option>
              </select>
            </div>
            <div className="d-flex align-items-center">
              <div className="me-3">
                <span className="text-primary">1</span>/3
              </div>
              <div class="input-group">
                <button
                  class="btn btn-light text-dark"
                  type="button"
                  id="button-addon1"
                >
                  <i class="bi bi-caret-left-fill"></i>
                </button>
                <button
                  class="btn btn-light text-dark"
                  type="button"
                  id="button-addon2"
                >
                  <i class="bi bi-caret-right-fill"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            {/* SmallProductCard cần id để phân biệt */}
            <SmallProductCard
              id={1}
              name="Lồng Chào Mào Báng Súng "
              image="https://longchim.vn/wp-content/uploads/2023/05/long-chao-mao-bang-sung-1-247x296.jpg"
              rating={4}
              discount={3500000}
              href={"/product-detail/1"}
            />
            <SmallProductCard
              id={2}
              name="Lồng Chào Mào Báng Súng "
              image="https://longchim.vn/wp-content/uploads/2023/05/long-chao-mao-bang-sung-1-247x296.jpg"
              rating={4}
              discount={3500000}
              href={"/product-detail/1"}
            />
            <SmallProductCard
              id={3}
              name="Lồng Chào Mào Báng Súng "
              image="https://longchim.vn/wp-content/uploads/2023/05/long-chao-mao-bang-sung-1-247x296.jpg"
              rating={4}
              discount={3500000}
              href={"/product-detail/1"}
            />
            <SmallProductCard
              id={4}
              name="Lồng Chào Mào Báng Súng "
              image="https://longchim.vn/wp-content/uploads/2023/05/long-chao-mao-bang-sung-1-247x296.jpg"
              rating={4}
              discount={3500000}
              href={"/product-detail/1"}
            />
            <SmallProductCard
              id={5}
              name="Lồng Chào Mào Báng Súng "
              image="https://longchim.vn/wp-content/uploads/2023/05/long-chao-mao-bang-sung-1-247x296.jpg"
              rating={4}
              discount={3500000}
              href={"/product-detail/1"}
            />
            <SmallProductCard
              id={6}
              name="Lồng Chào Mào Báng Súng "
              image="https://longchim.vn/wp-content/uploads/2023/05/long-chao-mao-bang-sung-1-247x296.jpg"
              rating={4}
              discount={3500000}
              href={"/product-detail/1"}
            />
          </div>
          <div className="d-flex">
            <nav aria-label="Page navigation example" className="mx-auto">
              <ul className="pagination">
                <li className="page-item disabled">
                  {/* disable */}
                  <a
                    className="page-link"
                    href="http://www.google.com"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {/*          active  vvv */}
                <li className="page-item active">
                  <a className="page-link" href="http://www.google.com">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="http://www.google.com">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="http://www.google.com">
                    3
                  </a>
                </li>
                <li className="page-item">
                  {" "}
                  {/* disable */}
                  <a
                    className="page-link"
                    href="http://www.google.com"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
