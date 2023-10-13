import React from 'react'
import AccountSidebar from "../components/AccountSidebar";
import MainLayout from "./MainLayout"

const AccountLayout = (props) => {
    return (
        <MainLayout>
            <div className="d-flex">
                <AccountSidebar />
                <div className="flex-grow-1 m-3 ">
                    {props.children}
                </div>
            </div>
        </MainLayout>
    )
}

export default AccountLayout