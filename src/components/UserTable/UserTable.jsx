import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
} from "@mui/material";

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
    <Table style={{ width: "90%" }}>
      <TableHead>
        <TableRow>
          <TableCell>Email</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Role</TableCell>
          <TableCell style={{ width: "80%" }}>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            {editingItem && editingItem.id === item.id ? (
              <>
                <TableCell>
                  <TextField
                    value={editingItem.email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editingItem.firstName}
                    onChange={(e) =>
                      handleFieldChange("firstName", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editingItem.lastName}
                    onChange={(e) =>
                      handleFieldChange("lastName", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>{editingItem.username}</TableCell>
                <TableCell>
                  <TextField
                    value={editingItem.phone}
                    onChange={(e) => handleFieldChange("phone", e.target.value)}
                  />
                </TableCell>
                <TableCell>{editingItem.role}</TableCell>
              </>
            ) : (
              <>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.role}</TableCell>
              </>
            )}
            <TableCell>
              {editingItem && editingItem.id === item.id ? (
                <>
                  <Button variant="outlined" onClick={handleSaveClick}>
                    Save
                  </Button>
                  <Button variant="outlined" onClick={handleCancelClick}>
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outlined"
                    onClick={() => handleEditClick(item)}
                  >
                    Sửa
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteClick(item.id)}
                  >
                    Xóa
                  </Button>
                </>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
