import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/formatDate";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  getAllUsers,
  updateUserAccountStatus,
} from "@/services/authentication";
import { toast } from "sonner";

export function UsersTable() {
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  // const updateUserStatus = (userId: number, newStatus: string) => {
  //   setUsers((prevUsers: typeof mockUsers) =>
  //     prevUsers.map((user: (typeof mockUsers)[number]) =>
  //       user.id === userId ? { ...user, status: newStatus } : user
  //     )
  //   );
  // };

  const fetchAllQuestions = async () => {
    try {
      const response = await getAllUsers();

      if (response.status === 200) {
        setUsers(response.data.users.reverse());
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllQuestions();
  }, []);

  const handleUserAccountTypeUpdate = async (id: number, status: string) => {
    try {
      setIsLoading(true);
      // setIsSubmitting(true);

      const response = await updateUserAccountStatus(id, status);

      if (response.status === 200) {
        // Assuming the API returns the updated user object
        toast.success(response.data.message);

        // Update UI if needed
        setUsers((prevUsers: any) =>
          prevUsers.map((user: any) =>
            user.id === id ? { ...user, account_status: status } : user
          )
        );
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
      // setIsSubmitting(false);
      // setApproveModalOpen(false);
    }
  };

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
          {users.map((user: any, index: any) => (
            <TableRow key={user.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge
                  className={
                    user.account_status === "active"
                      ? "bg-green-500"
                      : user.account_status === "inactive"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }
                >
                  {user?.account_status?.charAt(0)?.toUpperCase() +
                    user?.account_status?.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{formatDate(new Date(user.created_at))}</TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {user.status !== "active" && (
                    <DropdownMenuItem
                      onClick={() =>
                        handleUserAccountTypeUpdate(user.id, "active")
                      }
                    >
                      Activate User
                    </DropdownMenuItem>
                  )}
                  {user.status !== "suspended" && (
                    <DropdownMenuItem
                      onClick={() =>
                        handleUserAccountTypeUpdate(user.id, "suspended")
                      }
                    >
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
  );
}
