import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/formatDate"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { MoreHorizontal } from "lucide-react"

// Mock data for users
const mockUsers = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  username: `user${i + 1}`,
  email: `user${i + 1}@example.com`,
  status: ["active", "inactive", "suspended"][Math.floor(Math.random() * 3)],
  createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
}))

export function UsersTable() {
  const initialUsers = mockUsers;
  const [users, setUsers] = useState<typeof mockUsers>(initialUsers);

  const updateUserStatus = (userId: number, newStatus: string) => {
    setUsers((prevUsers: typeof mockUsers) =>
      prevUsers.map((user: typeof mockUsers[number]) =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">S.No</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
              <Badge
                  className={
                    user.status === "active"
                      ? "bg-green-500"
                      : user.status === "inactive"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }
                >
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{formatDate(new Date(user.createdAt))}</TableCell>
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {/* {user.status !== "active" && (
                      <DropdownMenuItem onClick={() => updateUserStatus(user.id, "active")}>
                        Activate User
                      </DropdownMenuItem>
                    )} */}
                    {user.status !== "suspended" && (
                      <DropdownMenuItem onClick={() => updateUserStatus(user.id, "suspended")}>
                        Suspend User
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

