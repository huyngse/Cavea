import React, { useState } from "react";
export default function UserTable(props) {
  const { data, onEdit, onCancel, onSave, onDelete } = props;
  const [editingItem, setEditingItem] = useState(null);

  const handleEditClick = (item) => {
    setEditingItem({ ...item });
    onEdit(item);
  };

  const handleFieldChange = (fieldName, value) => {
    setEditingItem((prevItem) => ({
      ...prevItem,
      [fieldName]: value,
    }));
  };

  const handleSaveClick = () => {
    onSave(editingItem);
    setEditingItem(null);
  };

  const handleCancelClick = () => {
    setEditingItem(null);
    onCancel();
  };

  const handleDeleteClick = (id) => {
    onDelete(id);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Email</th>
          <th>Họ và tên</th>
          <th>Tên tài khoản</th>
          <th>Số điện thoại</th>
          <th>Quyền</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {editingItem && editingItem.id === item.id ? (
              <>
                <td>
                  <input
                    value={editingItem.email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    value={editingItem.firstName}
                    onChange={(e) =>
                      handleFieldChange("firstName", e.target.value)
                    }
                  />
                </td>
                <td>{editingItem.username}</td>
                <td>
                  <input
                    value={editingItem.phone}
                    onChange={(e) => handleFieldChange("phone", e.target.value)}
                  />
                </td>
                <td>{editingItem.role}</td>
              </>
            ) : (
              <>
                <td>{item.email}</td>
                <td>{item.firstName}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.role}</td>
              </>
            )}
            <td>
              {editingItem && editingItem.id === item.id ? (
                <>
                  <button className="border-0 bg-transparent text-decoration-underline text-primary" onClick={handleSaveClick}>
                    Lưu
                  </button>
                  <button className="border-0 bg-transparent" onClick={handleCancelClick}>
                    <i className="bi bi-x-circle text-danger"></i>
                  </button>
                </>
              ) : (
                <div>
                  <button className="border-0 bg-transparent" onClick={() => handleEditClick(item)}>
                    <i className="bi bi-pencil-square text-primary"></i>
                  </button>
                  <button className="border-0 bg-transparent" onClick={() => handleDeleteClick(item.id)}>
                    <i className="bi bi-trash text-danger"></i>
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
