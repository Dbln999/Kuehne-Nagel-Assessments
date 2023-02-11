import { IShipments } from "../interfaces/IShipments";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type shipmentsState = {
  shipments: IShipments[];
};

const initialState: shipmentsState = {
  shipments: [],
};

export const fetchShipments = createAsyncThunk("shipments/fetch", async () => {
  const res = await axios.get<IShipments[]>("https://nagel.dbln999.repl.co/");
  return res.data;
});

export const shipmentsSlice = createSlice({
  name: "shipmentsSlice",
  initialState,
  reducers: {
    removeShipment(state, action: PayloadAction<string>) {
      state.shipments = state.shipments.filter(
        (shipment) => shipment.orderNo !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchShipments.fulfilled.type,
      (state, action: PayloadAction<IShipments[]>) => {
        state.shipments = action.payload;
        console.log(state.shipments);
      }
    );
  },
});

export default shipmentsSlice.reducer;
export const {removeShipment} = shipmentsSlice.actions;
