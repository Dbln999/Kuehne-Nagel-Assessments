import { IShipments } from "../interfaces/IShipments";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type shipmentsState = {
  shipments: IShipments[];
  loading: boolean;
};

const initialState: shipmentsState = {
  shipments: [],
  loading: false,
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
    builder.addCase(fetchShipments.pending.type, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchShipments.fulfilled.type,
      (state, action: PayloadAction<IShipments[]>) => {
        state.loading = false;
        state.shipments = action.payload;
        console.log(state.shipments);
      }
    );
  },
});

export default shipmentsSlice.reducer;
export const { removeShipment } = shipmentsSlice.actions;
