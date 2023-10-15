import React, { useEffect, useState } from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext.jsx";
import RevenueChart from "../components/RevenueManagement/revenue_management.jsx";
import UserTable from "../components/UserTable/UserTable.jsx";
import pro_avatar from "../assets/pro_avatar.png";
import Profile from "../components/Profile/index.jsx";

const AdminPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const API_BASE_URL = "http://localhost:8080";

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [data, setData] = useState([]);
  const [, setEditingItem] = useState(null);
  const [isAdminUsers, setIsAdminUsers] = useState(true);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleEdit = (item) => {
    setEditingItem({ ...item });
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerResponse = await axios.get(
          `${API_BASE_URL}/admin/customer`
        );
        const managerResponse = await axios.get(
          `${API_BASE_URL}/admin/manager`
        );

        if (customerResponse.status === 200 && managerResponse.status === 200) {
          const customerData = customerResponse.data;
          const managerData = managerResponse.data;
          const combinedData = [...customerData, ...managerData];
          setData(combinedData);
        }
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/admin/search?search=${search}`
        );

        if (response.status === 200) {
          setSearchResults(response.data);
        }
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };

    handleSearch();
  }, [search]);

  const handleSaveEdit = async (editedItem) => {
    try {
      if (editedItem) {
        const response = await axios.put(
          `${API_BASE_URL}/admin/${editedItem.id}`,
          editedItem
        );

        if (response.status === 200) {
          const itemIndex = data.findIndex((item) => item.id === editedItem.id);
          const newData = [...data];
          newData[itemIndex] = editedItem;
          setData(newData);
        }
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/admin/${id}`);
      if (response.status === 200) {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
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
            onClick={() => setIsAdminUsers(true)}
            style={{ marginBottom: "16px", backgroundColor: "white" }}
          >
            Quản lí người dùng
          </Button>
          <Button
            variant="outlined"
            onClick={() => setIsAdminUsers(false)}
            style={{ marginBottom: "16px", backgroundColor: "white" }}
          >
            Quản lí doanh thu
          </Button>
        </div>
        <div className="col-9">
          {isAdminUsers ? (
            <TableContainer component={Paper}>
              <form className="input-group col-12 col-lg-auto mb-3 mb-lg-0 me-auto w-50">
                <input
                  type="text"
                  className="form-control search-bar"
                  placeholder="Tìm Kiếm người dùng"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  value={search}
                  onChange={handleSearchChange}
                />
                <button
                  className="btn btn-light"
                  type="button"
                  id="button-addon2"
                >
                  <SearchIcon />
                </button>
              </form>
              <UserTable
                data={search === "" ? data : searchResults}
                onEdit={handleEdit}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
                onDelete={handleDelete}
              />
            </TableContainer>
          ) : (
            <RevenueChart />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
