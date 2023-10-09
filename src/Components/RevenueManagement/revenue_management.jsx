import React, { useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
} from "@mui/material";

export default function RevenueManagement() {
  const [revenueData] = useState([
    {
      id: 1,
      month: "January",
      amount: 10000,
    },
    {
      id: 2,
      month: "February",
      amount: 12000,
    },
  ]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Quản lý doanh thu
      </Typography>
      <Button variant="outlined" style={{ marginBottom: "16px" }}>
        Thêm doanh thu
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tháng</TableCell>
              <TableCell>Doanh thu (USD)</TableCell>
              <TableCell>Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {revenueData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.month}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary">
                    Sửa
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
