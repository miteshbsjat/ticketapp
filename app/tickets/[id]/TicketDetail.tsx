import { Ticket } from "@prisma/client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TicketStatusBadge from "@/components/TicketStatusBadge";
import TicketPriority from "@/components/TicketPriority";

interface Props {
  ticket: Ticket;
}

const TicketDetail = ({ ticket }: Props) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between mb-3">
          <TicketStatusBadge status={ticket.status} />
          <TicketPriority priority={ticket.priority} />
        </div>
        <CardTitle>{ticket.title}</CardTitle>
        <CardDescription>
          Created:{" "}
          {ticket.createdAt.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </CardDescription>
      </CardHeader>
      <CardContent>{ticket.description}</CardContent>
      <CardFooter>
        Updated:{" "}
        {ticket.updatedAt.toLocaleDateString("en-US", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </CardFooter>
    </Card>
  );
};

export default TicketDetail;
