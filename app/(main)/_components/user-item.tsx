"use client";

import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsLeftRight, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
const UserItem = () => {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center justify-between text-sm p-3 w-full hover:bg-primary/5"
        >
          <div className="gap-x-2 items-center flex max-w-[150px">
            <Avatar className="h-6 w-6 rounded-full overflow-hidden">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {user?.fullName}&apos;s Minipad
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="start" alignOffset={11}>
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {user?.emailAddresses[0].emailAddress}
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  className="w-8 h-8 rounded-full overflow-hidden"
                  src={user?.imageUrl}
                />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1 font-semibold">
                {user?.fullName}&apos;s Minipad
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="w-full cursor-pointer text-muted-foreground"
        >
          <SignOutButton>
            <Button variant="ghost" className="hover:border-none hover:outline-none">
              <LogOut className="h-4 w-4 mr-2" />
              Log out
            </Button>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserItem;
