import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hooks";
import Row from "./Row";

const Table = () => {

  const shipments = useAppSelector((state) => state.shipments.shipments);

  return (
    <div>
      <table className="w-full">
        <tbody>
          <tr>
            <th className="headers-style">ORDERNO</th>
            <th className="headers-style">DELIVERYDATE</th>
            <th className="headers-style">CUSTOMER</th>
            <th className="headers-style">TRACKINGNO</th>
            <th className="headers-style">STATUS</th>
            <th className="headers-style">CONSIGNEE</th>
          </tr>
          {shipments.map((shipment) => {
            return <Row key={shipment.orderNo} shipment={shipment}></Row>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
