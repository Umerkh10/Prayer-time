import React, { useEffect, useState } from "react";
import { Avatar } from "./ui/avatar";

const UserAvatar = ({ userName }: any) => {
  // const [avatar, setAvatar] = useState<any>(null)

  const userFullname = userName?.split(" ");
  const userAvatar = userFullname ? `${userFullname[0]?.charAt(0)}` : "";

  return (
    <div>
      <Avatar className="flex items-center justify-center h-8 w-8 border border-primary/20 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
        <p className="font-bold">{userAvatar?.toUpperCase()}</p>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
