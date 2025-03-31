// components/Navbar.js
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 top-0 backdrop-blur z-10 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Monika Profile</div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white">
            Blog
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <div className="flex items-center">
            <Button className="mx-1" variant="outline">
              Signup
            </Button>
            <Button className="mx-1" variant="outline">
              Login
            </Button>
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger ><svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ><path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path></svg>
               </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
