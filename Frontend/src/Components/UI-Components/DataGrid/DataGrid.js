import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CustomButton from "../Buttons/Button";

export default function Table({
  rows,
  onRowClick,
  reduxstate,
  onDelete,
  onUpdate,
  onView,
}) {
  const columns = [
    { field: "id", headerName: "id", width: 100, editable: true },
    { field: "Name", headerName: "Name", width: 350, editable: true },
    {
      field: "Description",
      headerName: "Description",
      width: 400,
      editable: true,
    },
    { field: "Price", headerName: "Price", width: 200, editable: true },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 250,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const handleDelete = () => {
          onDelete(params);
        };
        const handleUpdate = () => {
          onUpdate(params);
        };
        const handleView = () => {
          onView(params);
        };
        return (
          <div>
            <CustomButton
              variant={"contained"}
              onClick={handleDelete}
              text={"Delete"}
            />
            <CustomButton
              variant={"contained"}
              onClick={handleUpdate}
              text={"Update"}
            />
            <CustomButton
              variant={"contained"}
              onClick={handleView}
              text={"VIew"}
            />
          </div>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows ? rows : []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        loading={reduxstate.loading}
        pageSizeOptions={[5]}
        onRowClick={onRowClick}
        rowSelection={true}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
