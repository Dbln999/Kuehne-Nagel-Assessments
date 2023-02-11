import React from "react";
import { IShipments } from "../interfaces/IShipments";
import { useAppDispatch } from "../hooks/redux.hooks";
import { removeShipment } from "../reducers/shipments";
import {Link} from "react-router-dom";

type props = {
  shipment: IShipments;
};

const Row = ({ shipment }: props) => {
  const dispatch = useAppDispatch();
  return (
    <tr>
      <td className="p-6">{shipment.orderNo}</td>
      <td className="p-6">{shipment.date}</td>
      <td className="p-6">{shipment.customer}</td>
      <td className="p-6">{shipment.trackingNo}</td>
      <td className="p-6">{shipment.status}</td>
      <td className="p-6">{shipment.consignee}</td>
      <td className="flex justify-around items-center h-20 w-36">
        <Link to={shipment.orderNo}>
          <button className="text-xl bg-cyan-300 w-16 h-12 rounded">📅</button>
        </Link>
        <button
          className="text-xl bg-red-500 w-16 h-12 rounded text-white text-xl"
          onClick={() => dispatch(removeShipment(shipment.orderNo))}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default Row;
