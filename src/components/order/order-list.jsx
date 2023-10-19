import React from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import ProductTable from "../product-table";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import { useAppSelector } from "../../app/hooks";
import useProducts from "../../hooks/useProducts";

export default function OrderList() {
  const { isLoading } = useProducts();
  const products = useAppSelector((state) => state.product.product);

  function print() {
    window.print();
  }

  return (
    <Paper sx={{ p: 3 }} variant="outlined">
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        pb={3}
      >
        <TextField
          size="small"
          placeholder="Search..."
          color="success"
          sx={{ width: "100%", maxWidth: 500, borderRadius: "100%" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchRoundedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          gap={2}
        >
          <Button variant="outlined" color="success">
            Add Item
          </Button>
          <Tooltip title="Print">
            <IconButton color="success" onClick={print}>
              <PrintOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      <ProductTable isLoading={isLoading} products={products} />
    </Paper>
  );
}
