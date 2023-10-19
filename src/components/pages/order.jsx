import React from "react";
import { Stack, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import OrderInfo from "../order/order-info";
import OrderList from "../order/order-list";

export default function Order() {
  return (
    <Stack
      gap={2}
      bgcolor={grey[100]}
      component="main"
      minHeight="calc(100vh - 72px)"
    >
      <Container maxWidth="lg">
        <OrderInfo />
        <OrderList />
      </Container>
    </Stack>
  );
}
