import React from 'react'
import AccountSidebar from "../../Components/AccountSidebar/AccountSidebar";

const AccountLayout = (props) => {
    return (
        <div className="d-flex">
            <AccountSidebar />
            <div className="flex-grow-1 m-3 ">
                {props.children}
            </div>
        </div>
    )
}

export default AccountLayout