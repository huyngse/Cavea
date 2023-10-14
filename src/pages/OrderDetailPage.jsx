import React from "react";
import MainLayout from "../layouts/MainLayout";
import OrderDetail from "../components/OrderHistory/OrderDetail";

export default function OrderDetailPage() {
    return (
        < MainLayout >
            <div className="container">
                <OrderDetail />
            </div>
        </MainLayout >
    );
}
