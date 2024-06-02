"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="w-8 h-8">
                |||
            </Button>
          </SheetTrigger>
          <SheetContent className="w-36 sm:w-60 md:w-80" side={side}>
            <SheetHeader>
              <SheetTitle>title</SheetTitle>
              <SheetDescription>
                description
              </SheetDescription>
            </SheetHeader>

          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
