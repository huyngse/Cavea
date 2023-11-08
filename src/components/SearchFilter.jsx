import React from "react";
import Rating from "@mui/material/Rating";

export default function SearchFilter() {
  return (
    <form className="p-3">
      <h1 className="h5 mb-3">
        <i className="bi bi-filter me-2"></i>Bộ lọc tìm kiếm
      </h1>
      {/* #################### */}
      {/*       LOẠI LỒNG        */}
      {/* #################### */}
      <div>
        <h2 className="h6">Loại lồng</h2>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="cgFilter"
          />
          <label className="form-check-label" htmlFor="cgFilter">
            Cu gáy (429)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="hmFilter"
          />
          <label className="form-check-label" htmlFor="hmFilter">
            Họa mi (469)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="cmFilter"
          />
          <label className="form-check-label" htmlFor="cmFilter">
            Chào mào (325)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="lkFilter"
          />
          <label className="form-check-label" htmlFor="lkFilter">
            Khuyên (322)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="ctFilter"
          />
          <label className="form-check-label" htmlFor="ctFilter">
            Chòe than (212)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="ckFilter"
          />
          <label className="form-check-label" htmlFor="ckFilter">
            Khướu (199)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="lyFilter"
          />
          <label className="form-check-label" htmlFor="lyFilter">
            Hút mật (165)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="clFilter"
          />
          <label className="form-check-label" htmlFor="clFilter">
            Chòe lửa (132)
          </label>
        </div>
      </div>
      <hr />
      {/* #################### */}
      {/*       KHOẢNG GIÁ        */}
      {/* #################### */}
      <div>
        <h2 className="h6">Khoảng giá</h2>
        <div className="d-flex mb-3">
          <input
            className="form-control rounded-0 border border-primary"
            type="text"
            placeholder="₫ Từ"
            aria-label="default input example"
          />
          <span className="px-4">-</span>
          <input
            className="form-control rounded-0 border border-primary"
            type="text"
            placeholder="₫ Đến"
            aria-label="default input example"
          />
        </div>
        <button className="btn btn-primary rounded-0 w-100">Áp dụng</button>
      </div>
      <hr />
      {/* #################### */}
      {/*       ĐÁNH GIÁ        */}
      {/* #################### */}
      <div>
        <h2 className="h6">Đánh giá</h2>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rating5"
          />
          <label className="form-check-label d-flex" htmlFor="rating5">
            <Rating name="read-only" value={5} readOnly />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rating4"
          />
          <label className="form-check-label d-flex" htmlFor="rating4">
            <Rating name="read-only" value={4} readOnly className="me-2" /> trở
            lên
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rating3"
          />
          <label className="form-check-label d-flex" htmlFor="rating3">
            <Rating name="read-only" value={3} readOnly className="me-2" /> trở
            lên
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rating2"
          />
          <label className="form-check-label d-flex" htmlFor="rating2">
            <Rating name="read-only" value={2} readOnly className="me-2" /> trở
            lên
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rating1"
          />
          <label className="form-check-label d-flex" htmlFor="rating1">
            <Rating name="read-only" value={1} readOnly className="me-2" /> trở
            lên
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="ratingAll"
          />
          <label className="form-check-label d-flex" htmlFor="ratingAll">
            Tất cả
          </label>
        </div>
      </div>
      <hr />
      {/* #################### */}
      {/*      TRÌNH TRẠNG      */}
      {/* #################### */}
      <div>
        <h2 className="h6">Tình trạng</h2>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="orderedFilter"
          />
          <label className="form-check-label" htmlFor="orderedFilter">
            Đã mua
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="newFilter"
          />
          <label className="form-check-label d-flex" htmlFor="newFilter">
            Mới
          </label>
        </div>
        <hr />
        <button className="btn btn-primary rounded-0 w-100" type="reset">
          Xóa tất cả
        </button>
      </div>
    </form>
  );
}
