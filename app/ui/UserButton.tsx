import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import React from "react";

async function UserButton() {
  const session = await auth();
  if (!session?.user) return <SignIn />;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative w-10 h-10 rounded-full">
            <Avatar>
              {session.user.image && (
                <AvatarImage
                  src={session.user.image}
                  alt={session.user.name ?? ""}
                />
              )}
              {/* <AvatarFallback>{session.user.email}</AvatarFallback> */}
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{session.user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">{session.user.email}</p>
              </div>
          </DropdownMenuLabel>
          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </>
  );
}

export default UserButton;
