import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "../../components/UserTable/UserTable.jsx";
import AdminLayout from "../../layouts/AdminLayout.jsx"

const AdminManageAccountPage = () => {
  const API_BASE_URL = "http://localhost:8080";

  const [data, setData] = useState([]);
  const [, setEditingItem] = useState(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
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
    console.log(editedItem);
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
    <AdminLayout>
      <div className="bg-gray p-4 min-vh-100 w-100">
        <form className="input-group mb-3">
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
            <i className="bi bi-search"></i>
          </button>
        </form>
        <UserTable
          data={search === "" ? data : searchResults}
          onEdit={handleEdit}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
          onDelete={handleDelete}
        />
      </div>

    </AdminLayout >
  );
};

export default AdminManageAccountPage;
