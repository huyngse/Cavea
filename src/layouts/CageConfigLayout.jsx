import React from "react";
import MainLayout from "./MainLayout";

function CageConfigLayout(props) {
  return (
    <MainLayout>
      <div className="mb-3">
        <h1 className="h2 p-3 text-primary text-center">
          Thiết kế lồng chim theo yêu cầu
        </h1>
      </div>
      {props.children}
    </MainLayout>
  );
}

export default CageConfigLayout;
