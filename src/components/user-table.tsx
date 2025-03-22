import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/formatDate"

// Mock data for users
const mockUsers = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  username: `user${i + 1}`,
  email: `user${i + 1}@example.com`,
  status: ["active", "inactive", "suspended"][Math.floor(Math.random() * 3)],
  createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
}))

export function UsersTable() {
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

