import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { GetProduct } from '../../../Store/Slicers/ProductSlice/ProductSlice';
import {Paper,Typography} from '@mui/material';
const View = () => {
  const Params = useParams();
  const dispatch = useDispatch();
  const reduxstate = useSelector((state) => state.product);
  console.log(reduxstate.Product)
  const { id , Name , Description , Price} = reduxstate.Product;
  useEffect(()=>{
    dispatch(GetProduct(Params.id))
  },[])
  return (
    <Paper className="paper" 
    style={{color: "green",display:'flex', padding:50,margin:10,justifyContent:"space-between"}}
    elevation={4}>
      <div>
      <Typography variant="span">Product Id: {id} </Typography> 
      <br></br>
      <Typography variant="span">Product name: {Name} </Typography> 
      </div>
    <div>
      <Typography variant="span">Product Description: {Description} </Typography>
      <br></br> 
      <Typography variant="span">Product Price: {Price} </Typography> 
    </div>
    </Paper>
  )
}

export default View;
