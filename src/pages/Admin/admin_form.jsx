import React, { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  TableContainer,
  Paper,
  Button,
  Typography,
  Tooltip,
} from "@mui/material";
import pro_avatar from "../../assets/pro_avatar.png";
import Profile from "../../components/Profile/index.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";
import RevenueChart from "../../components/RevenueManagement/revenue_management.jsx";
import UserTable from "../../components/UserTable/UserTable.jsx";

const initialData = [
  {
    id: 1,
    email: "example1@example.com",
    firstName: "John",
    lastName: "Doe",
    password: "password1",
    phone: "123-456-7890",
    role: "user",
    username: "john_doe",
  },
  {
    id: 2,
    email: "example2@example.com",
    firstName: "Jane",
    lastName: "Smith",
    password: "password2",
    phone: "987-654-3210",
    role: "admin",
    username: "jane_smith",
  },
];

export default function AdminForm() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [data, setData] = useState(initialData);
  const [editingItem, setEditingItem] = useState(null);
  const [, setEditDialogOpen] = useState(false);
  const [isManagingUsers, setIsManagingUsers] = useState(true);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleEdit = (item) => {
    setEditingItem({ ...item });
    setEditDialogOpen(true);
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
    setEditDialogOpen(false);
  };

  const handleSaveEdit = () => {
    const updatedData = data.map((item) =>
      item.id === editingItem.id ? editingItem : item
    );
    setData(updatedData);
    setEditingItem(null);
    setEditDialogOpen(false);
  };

  return (
    <>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-3 bg-primary">
          <Box sx={{ flexGrow: 0, padding: "20px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="pro_avatar" src={pro_avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Profile />
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Button
            variant="outlined"
            onClick={() => setIsManagingUsers(true)}
            style={{ marginBottom: "16px", backgroundColor: "white" }}
          >
            Quản lí người dùng
          </Button>
          <Button
            variant="outlined"
            onClick={() => setIsManagingUsers(false)}
            style={{ marginBottom: "16px", backgroundColor: "white" }}
          >
            Quản lí doanh thu
          </Button>
        </div>
        <div className="col-9">
          {isManagingUsers ? (
            <TableContainer component={Paper}>
              {/* Sử dụng UserTable component */}
              <UserTable
                data={data}
                editingItem={editingItem}
                onEdit={handleEdit}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
              />
            </TableContainer>
          ) : (
            <RevenueChart />
          )}
        </div>
      </div>
    </>
  );
}
