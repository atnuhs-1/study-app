
import UserButton from "@/app/ui/UserButton";
import Nav from "./nav";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Header() {

  
  return (
    <header className="flex justify-between h-14 px-4 pt-2">
      <div>
        <Nav />
      </div>

      
        <input type="text" className="border text-zinc-600 px-2 w-2/5 h-8 rounded-full"/>


      <nav className="flex gap-4 items-center">
        <ModeToggle />
        <UserButton />
      </nav>
    </header>
  );
}
