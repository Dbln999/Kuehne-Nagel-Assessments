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
            <th className="headers-style font-semibold">ORDERNO</th>
            <th className="headers-style font-semibold">DELIVERYDATE</th>
            <th className="headers-style font-semibold">CUSTOMER</th>
            <th className="headers-style font-semibold">TRACKINGNO</th>
            <th className="headers-style font-semibold">STATUS</th>
            <th className="headers-style font-semibold">CONSIGNEE</th>
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
