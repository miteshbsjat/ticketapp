import { Ticket } from "@prisma/client";
import React from "react";

interface Props {
  tickets: Ticket[];
}

const DataTable = ({ tickets }: Props) => {
  //   console.log(tickets);
  return <div>DataTable</div>;
};

export default DataTable;
