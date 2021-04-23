import { Table } from "components/Table";
import { Avatar } from "components/Avatar";
import { Badge } from "components/Badge";
import { Button } from "components/Button";
import { Cell } from "react-table";
import { User } from "./types";

const data = [
  {
    id: 1,
    name: "Jane sdsdsd",
    type: "Coach",
    university: "Chicago",
    status: "Active",
    role: "Admin",
    email: "jane.cooper@example.com",
    phone_number: "80505555555",
    attachments: "picture.jpeg",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 2,
    name: "Jane Cooper",
    type: "Coach",
    university: "KHNADY",
    status: "Active",
    role: "Admin",
    email: "jane.cooper@example.com",
    phone_number: "80505555555",
    attachments: "picture.jpeg",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 3,
    name: "Jsdsdane Cooper",
    type: "Coach",
    university: "Chicago ds",
    department: "Optimization",
    status: "Active",
    role: "Admin",
    email: "jane.cooper@example.com",
    phone_number: "80505555555",
    attachments: "picture.jpeg",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 4,
    name: "Jane  sd sd Cooper",
    type: "Coach",
    university: "Optimization",
    status: "Active",
    role: "Admin",
    email: "jane.cooper@example.com",
    phone_number: "80505555555",
    attachments: "picture.jpeg",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

type CellType = {
  cell: Cell<User>;
};

export const UsersTable = () => {
  const COLUMNS = [
    {
      Header: "Name",
      Cell: ({ cell }: CellType) => {
        console.log("cell", cell);
        return (
          <div className="flex items-center">
            <Avatar src={cell.row.original.image} className="flex-shrink-0" />
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {cell.row.original.name}
              </div>
              <div className="text-sm text-gray-500">
                {cell.row.original.email}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      Header: "User type",
      accessor: "type",
      Cell: ({ cell }: CellType) => {
        return (
          <>
            <div>{cell.value}</div>
            <Badge>
              {cell.row.original.approved ? "approved" : "not approved"}
            </Badge>
          </>
        );
      },
    },
    { Header: "Phone number", accessor: "phone_number" },
    { Header: "University", accessor: "university" },
    { Header: "Attachments", accessor: "attachments" },
    {
      accessor: "id",
      Cell: ({ cell }: CellType) => {
        return (
          <div className="flex space-x-1">
            <Button className="bg-green-500">x</Button>
            <Button>x</Button>
            <Button>x</Button>
          </div>
        );
      },
    },
  ];

  return <Table columns={COLUMNS} data={data} />;
};
