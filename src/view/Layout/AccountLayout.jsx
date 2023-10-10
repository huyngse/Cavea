import React from 'react'
import AccountSidebar from "../../Components/AccountSidebar/AccountSidebar";

const AccountLayout = (props) => {
    return (
        <div className="d-flex">
            <AccountSidebar />
            <div className="bg-white flex-grow-1 m-3 py-3 px-4">
                {props.children}
            </div>
        </div>
    )
}

export default AccountLayout