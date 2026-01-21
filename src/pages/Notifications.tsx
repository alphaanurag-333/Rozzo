import Badge from "../components/ui/badge/Badge";

interface Notification {
    id: number;
    user: string;
    message: string;
    project: string;
    time: string;
    status: "read" | "unread";
    avatar: string;
}

const notifications: Notification[] = [
    {
        id: 1,
        user: "Testing User 1",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        project: "Alphawizz App",
        time: "5 min ago",
        status: "unread",
        avatar: "/images/user/user-02.jpg",
    },
    {
        id: 2,
        user: "Testing User 2",
        message: "Requested permission to change",
        project: "Alphawizz App",
        time: "10 min ago",
        status: "read",
        avatar: "/images/user/user-03.jpg",
    },
    {
        id: 3,
        user: "Testing User 3",
        message: "Requested permission to change",
        project: "Alphawizz App",
        time: "30 min ago",
        status: "unread",
        avatar: "/images/user/user-04.jpg",
    },
    {
        id: 4,
        user: "Testing User 4",
        message: "Requested permission to change",
        project: "Alphawizz App",
        time: "1 hr ago",
        status: "read",
        avatar: "/images/user/user-05.jpg",
    },
];

export default function Notifications() {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-dark">
            {/* Page Header */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
                    All Notifications
                </h2>

                {/* <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/5">
                    Mark all as read
                </button> */}
            </div>

            {/* Notifications List */}
            <div className="space-y-3">
                {notifications.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-start gap-4 rounded-xl border border-gray-100 p-4 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-white/5"
                    >
                        {/* Avatar */}
                        <img
                            src={item.avatar}
                            alt={item.user}
                            className="h-11 w-11 rounded-full object-cover"
                        />

                        {/* Content */}
                        <div className="flex-1">
                            <p className="text-theme-sm text-gray-700 dark:text-gray-300">
                                <span className="font-medium text-gray-800 dark:text-white/90">
                                    {item.user}
                                </span>{" "}
                                {item.message}{" "}
                                <span className="font-medium text-gray-800 dark:text-white/90">
                                    Project - {item.project}
                                </span>
                            </p>

                            <div className="mt-1 flex items-center gap-3 text-theme-xs text-gray-500 dark:text-gray-400">
                                <span>{item.time}</span>
                                {item.status === "unread" && (
                                    <Badge size="sm" color="warning">
                                        New
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
