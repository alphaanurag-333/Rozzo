import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../components/ui/table/index";
import Badge from "../components/ui/badge/Badge";

// Define the TypeScript interface for users
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    joinedDate: string;
    status: "Active" | "Inactive" | "Blocked";
    avatar: string;
}

// Static table data
const userData: User[] = [
    {
        id: 1,
        name: "Anurag Sharma",
        email: "anurag@gmail.com",
        role: "Admin",
        joinedDate: "12 Jan 2025",
        status: "Active",
        avatar: "/images/user/user-01.jpg",
    },
    {
        id: 2,
        name: "Rohit Verma",
        email: "rohit@gmail.com",
        role: "Manager",
        joinedDate: "05 Feb 2025",
        status: "Inactive",
        avatar: "/images/user/user-02.jpg",
    },
    {
        id: 3,
        name: "Neha Singh",
        email: "neha@gmail.com",
        role: "User",
        joinedDate: "22 Mar 2025",
        status: "Active",
        avatar: "/images/user/user-03.jpg",
    },
    {
        id: 4,
        name: "Amit Patel",
        email: "amit@gmail.com",
        role: "User",
        joinedDate: "14 Apr 2025",
        status: "Blocked",
        avatar: "/images/user/user-04.jpg",
    },
    {
        id: 5,
        name: "Pooja Mehta",
        email: "pooja@gmail.com",
        role: "User",
        joinedDate: "01 May 2025",
        status: "Active",
        avatar: "/images/user/user-05.jpg",
    },
];

export default function UserLists() {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            {/* Header */}
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Users List
                </h3>
            </div>

            {/* Table */}
            <div className="max-w-full overflow-x-auto">
                <Table>
                    <TableHeader className="border-y border-gray-100 dark:border-gray-800">
                        <TableRow>
                            <TableCell
                                isHeader
                                className="py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                            >
                                User
                            </TableCell>
                            <TableCell
                                isHeader
                                className="py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                            >
                                Role
                            </TableCell>
                            <TableCell
                                isHeader
                                className="py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                            >
                                Joined
                            </TableCell>
                            <TableCell
                                isHeader
                                className="py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                            >
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {userData.map((user) => (
                            <TableRow key={user.id}>
                                {/* User Info */}
                                <TableCell className="py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[45px] w-[45px] overflow-hidden rounded-full">
                                            <img
                                                src={user.avatar}
                                                alt={user.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                                                {user.name}
                                            </p>
                                            <span className="text-theme-xs text-gray-500 dark:text-gray-400">
                                                {user.email}
                                            </span>
                                        </div>
                                    </div>
                                </TableCell>

                                {/* Role */}
                                <TableCell className="py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                                    {user.role}
                                </TableCell>

                                {/* Joined Date */}
                                <TableCell className="py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                                    {user.joinedDate}
                                </TableCell>

                                {/* Status */}
                                <TableCell className="py-3">
                                    <Badge
                                        size="sm"
                                        color={
                                            user.status === "Active"
                                                ? "success"
                                                : user.status === "Inactive"
                                                    ? "warning"
                                                    : "error"
                                        }
                                    >
                                        {user.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
