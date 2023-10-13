import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
} from "@mui/material";

export default function UserTable({
  data,
  editingItem,
  onEdit,
  onSave,
  onCancel,
}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Email</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Edit</TableCell>
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
                    onChange={(e) =>
                      onEdit({
                        ...editingItem,
                        email: e.target.value,
                      })
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editingItem.firstName}
                    onChange={(e) =>
                      onEdit({
                        ...editingItem,
                        firstName: e.target.value,
                      })
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editingItem.lastName}
                    onChange={(e) =>
                      onEdit({
                        ...editingItem,
                        lastName: e.target.value,
                      })
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editingItem.phone}
                    onChange={(e) =>
                      onEdit({
                        ...editingItem,
                        phone: e.target.value,
                      })
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editingItem.role}
                    onChange={(e) =>
                      onEdit({
                        ...editingItem,
                        role: e.target.value,
                      })
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editingItem.username}
                    onChange={(e) =>
                      onEdit({
                        ...editingItem,
                        username: e.target.value,
                      })
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={onSave}>
                    Save
                  </Button>
                  <Button variant="outlined" onClick={onCancel}>
                    Cancel
                  </Button>
                </TableCell>
              </>
            ) : (
              <>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => onEdit(item)}>
                    Edit
                  </Button>
                </TableCell>
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
