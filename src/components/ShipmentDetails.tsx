import React from "react";
import {Link, useParams} from "react-router-dom";
import { useAppSelector } from "../hooks/redux.hooks";

const ShipmentDetails = () => {
  const { orderNo } = useParams();
  const shipments = useAppSelector((state) => state.shipments.shipments);

  return (
    <div>
      <div className="bg-cyan-300 w-full h-32">
        <Link to='/' className='p-3 rounded bg-gray-100 relative top-5 left-5'>Back</Link>
      </div>
      {shipments
        .filter((shipment) => shipment.orderNo === orderNo)
        .map((shipment) => {
          return (
            <div
              key={shipment.orderNo}
              className="mx-auto bg-white rounded relative bottom-20 w-4/5 p-3 h-96"
            >
              <p className="my-16 mx-5 font-color font-mono">SHIPMENT DETAILS</p>
              <div className="flex gap-5 flex-wrap-reverse infoContainer">
                {Object.entries(shipment).map((s) => {
                  return (
                    <div key={s[0]} className='ml-10'>
                      <p className="font-sans p-3 text-gray-600 font-semibold">{s[0]}</p>
                      <div
                        id="orderInfo"
                        className="p-4 bg-gray-200 font-color rounded w-3/4"
                      >
                        {s[1]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ShipmentDetails;
