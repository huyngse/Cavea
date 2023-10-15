import React from 'react'
import AccountSidebar from "../components/AccountSidebar";
import MainLayout from "./MainLayout"

const AccountLayout = (props) => {
    return (
        <MainLayout>
            <div className="d-flex">
                <AccountSidebar />
                <div className="flex-grow-1 p-3 bg-gray">
                    {props.children}
                </div>
            </div>
        </MainLayout>
    )
}

export default AccountLayout