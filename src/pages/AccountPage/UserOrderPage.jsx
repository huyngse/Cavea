import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import OrderCard from '../../components/OrderHistory/OrderCard';
import OrderItem from '../../components/OrderHistory/OrderItem';
import AccountLayout from '../../layouts/AccountLayout';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>  {children}</>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function UserOrderPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AccountLayout>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="mb-3">
                    <Tabs value={value} onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="basic tabs example" className='bg-light' centered>
                        <Tab label="Tất cả" {...a11yProps(0)} />
                        <Tab label="Chờ xác nhận" {...a11yProps(1)} />
                        <Tab label="Đang giao" {...a11yProps(2)} />
                        <Tab label="Hoàn thành" {...a11yProps(3)} />
                        <Tab label="Đã hủy" {...a11yProps(4)} />

                    </Tabs>
                </Box>
                {/* tất cả */}
                <CustomTabPanel value={value} index={0}>
                    <div className="input-group mb-3 border-0">
                        <button className="input-group-text rounded-0" id="basic-addon1"><i className="bi bi-search"></i></button>
                        <input type="text" className='form-control rounded-0 py-2' placeholder='Bạn có thể tìm kiếm theo tên sản phẩm hoặc ID đơn hàng ' />
                    </div>
                    <OrderCard id="5" name="Đơn hàng số 5" status="đã hủy"
                        total={300000}
                    >
                        <OrderItem
                            image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                            name="LỒNG MI TRIỆN TRÚC CẬT HÀNG SIÊU KỸ"
                            type="Lồng chim họa mi"
                            discount={3950000}
                            price={4500000}
                            quantity={1}
                        />
                    </OrderCard>
                    <OrderCard id="1" name="Đơn hàng số 1" status="hoàn thành"
                        total={100000}
                    >
                        <OrderItem
                            image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                            name="LỒNG MI TRIỆN TRÚC CẬT HÀNG SIÊU KỸ"
                            type="Lồng chim họa mi"
                            discount={3950000}
                            price={4500000}
                            quantity={2}
                        />
                    </OrderCard>
                    <OrderCard id="2" name="Đơn hàng số 2" status="hoàn thành"
                        total={200000}
                    >
                        <OrderItem
                            image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                            name="LỒNG MI TRIỆN TRÚC CẬT HÀNG SIÊU KỸ"
                            type="Lồng chim họa mi"
                            discount={3950000}
                            price={4500000}
                            quantity={1}
                        />
                        <OrderItem
                            image="https://www.sieuthilongchim.net//admin/webroot/upload/image/images/chao%20mao/long.jpg"
                            name="LỒNG CHIM GỖ MUN VĂN HOA CHỮ THẬP 17 NAN TRE GIÀ"
                            type="Lồng chim chào mào"
                            discount={1750000}
                            price={2500000}
                            quantity={1}
                        />
                    </OrderCard>
                    <OrderCard id="3" name="Đơn hàng số 3" status="chờ thanh toán"
                        total={300000}
                    >
                        <OrderItem
                            image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                            name="LỒNG MI TRIỆN TRÚC CẬT HÀNG SIÊU KỸ"
                            type="Lồng chim họa mi"
                            discount={3950000}
                            price={4500000}
                            quantity={3}
                        />
                    </OrderCard>
                    <OrderCard id="4" name="Đơn hàng số 4" status="đang giao"
                        total={300000}
                    >
                        <OrderItem
                            image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                            name="LỒNG MI TRIỆN TRÚC CẬT HÀNG SIÊU KỸ"
                            type="Lồng chim họa mi"
                            discount={3950000}
                            price={4500000}
                            quantity={1}
                        />
                    </OrderCard>

                </CustomTabPanel>
                {/* chờ xác nhận */}
                <CustomTabPanel value={value} index={1}>
                    <OrderCard name="Đơn hàng số 3" status="chờ thanh toán"
                        total={300000}
                    >
                        <OrderItem
                            image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                            name="LỒNG MI TRIỆN TRÚC CẬT HÀNG SIÊU KỸ"
                            type="Lồng chim họa mi"
                            discount={3950000}
                            price={4500000}
                            quantity={3}
                        />
                    </OrderCard>
                </CustomTabPanel>
                {/* đang giao */}
                <CustomTabPanel value={value} index={2}>
                    <OrderCard name="Đơn hàng số 4" status="đang giao"
                        total={300000}
                    >
                        <OrderItem
                            image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                            name="LỒNG MI TRIỆN TRÚC CẬT HÀNG SIÊU KỸ"
                            type="Lồng chim họa mi"
                            discount={3950000}
                            price={4500000}
                            quantity={1}
                        />
                    </OrderCard>
                </CustomTabPanel>
                {/* hoàn thành */}
                <CustomTabPanel value={value} index={3}>
                    <OrderCard name="Đơn hàng số 1" status="hoàn thành"
                        total={100000}
                    >
                        <OrderItem
                            image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                            name="LỒNG MI TRIỆN TRÚC CẬT HÀNG SIÊU KỸ"
                            type="Lồng chim họa mi"
                            discount={3950000}
                            price={4500000}
                            quantity={2}
                        />
                    </OrderCard>
                    <OrderCard name="Đơn hàng số 2" status="hoàn thành"
                        total={200000}
                    >
                        <OrderItem
                            image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                            name="LỒNG MI TRIỆN TRÚC CẬT HÀNG SIÊU KỸ"
                            type="Lồng chim họa mi"
                            discount={3950000}
                            price={4500000}
                            quantity={1}
                        />
                        <OrderItem
                            image="https://www.sieuthilongchim.net//admin/webroot/upload/image/images/chao%20mao/long.jpg"
                            name="LỒNG CHIM GỖ MUN VĂN HOA CHỮ THẬP 17 NAN TRE GIÀ"
                            type="Lồng chim chào mào"
                            discount={1750000}
                            price={2500000}
                            quantity={1}
                        />
                    </OrderCard>
                </CustomTabPanel>
                {/* đã hủy */}
                <CustomTabPanel value={value} index={4}>
                    <OrderCard name="Đơn hàng số 5" status="đã hủy"
                        total={300000}
                    >
                        <OrderItem
                            image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                            name="LỒNG MI TRIỆN TRÚC CẬT HÀNG SIÊU KỸ"
                            type="Lồng chim họa mi"
                            discount={3950000}
                            price={4500000}
                            quantity={1}
                        />
                    </OrderCard>
                </CustomTabPanel>
            </Box>
        </AccountLayout>
    );
}
