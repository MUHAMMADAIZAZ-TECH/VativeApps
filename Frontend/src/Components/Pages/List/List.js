import React, { useState, useEffect } from "react";
import { CustomButton, Table, TextInput } from "../../UI-Components/";
import {
  AddProducts,
  DeleteProducts,
  UpdateProducts,
  GetProducts,
} from "../../../Store/Slicers/ProductSlice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { CssBaseline, Box, Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxstate = useSelector((state) => state.product);
  const handler = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const [state, setstate] = useState({
    id: "",
    Name: "",
    Description: "",
    Price: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const validateForm = () => {
    const errors = {};
    Object.keys(state).forEach((key) => {
      if (!state[key]) {
        errors[key] = `This ${key} is required`;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const Add = () => {
    if (validateForm()) {
      dispatch(AddProducts(state))
    }
  };
  const Update = (Item) => {
    const { __v, ...rest } = Item.row;
    dispatch(UpdateProducts(rest))
  };
  const Delete = (Item) => {
    const { __v, ...rest } = Item.row;
    dispatch(DeleteProducts(rest.id))
  };
  const View = (Item) =>{
    navigate(`/List/View/${Item.row.id}`)
  }
  useEffect(() => {
   dispatch(GetProducts());
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ height: "80vh" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 6, md: 12 }}>
          <Grid item xs={12}>
            <div style={{ padding: 20,display: "flex",justifyContent: "space-between"}}>
              <Typography variant="h5">Add New</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 6, md: 12 }} >
          <Grid item xs={1}>
            <TextInput
              fullWidth
              required
              label={"id"}
              size="small"
              change={handler}
              value={state.id}
              error={formErrors.id ? true : false}
              helper={formErrors.id}
              name="id"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextInput
              fullWidth
              required
              size="small"
              change={handler}
              label={"Name"}
              value={state.Name}
              error={formErrors.Name ? true : false}
              helper={formErrors.Name}
              name="Name"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5}>
            <TextInput
              fullWidth
              required
              size="small"
              change={handler}
              label={"Description"}
              error={formErrors.Description ? true : false}
              helper={formErrors.Description}
              value={state.Description}
              name="Description"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextInput
              fullWidth
              required
              size="small"
              change={handler}
              label={"Price"}
              value={state.Price}
              error={formErrors.Price ? true : false}
              helper={formErrors.Price}
              name="Price"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1}>
            <CustomButton
              fullWidth
              text={"Add"}
              variant="contained"
              onClick={Add}
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 6, md: 12 }}>
          <Grid item xs={12}>
            <div style={{ padding: 20,display: "flex",justifyContent: "space-between"}}>
              <Typography variant="h5">Products</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} columns={{ xs: 6, md: 12 }}>
          <Table
            rows={reduxstate?.List}
            reduxstate={reduxstate}
            onDelete={Delete}
            onUpdate={Update}
            onView={View}
          />
        </Grid>
      </Box>
    </React.Fragment>
  );
};
export default List;
