
import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import {  currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ListOrdered} from "lucide-react";
// import { getAllCategories, getMyOrders } from "@/sanity/helpers/queries";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="bg-white border-b border-b-gray-400 py-5 ">
      <Container className="flex items-center justify-between gap-7 text-black">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo className=" text-orange-500">Trendify</Logo>
        </div>

        <div className="w-auto md:w-1/3 flex items-center justify-center gap-5 lg:gap-6">
          <SearchBar />
          <CartIcon />

          <ClerkLoaded>
            <SignedIn>
              <Link href={"/orders"} className="group relative">
                <ListOrdered className="w-5 h-5 hover:text-orange-500 hoverEffect" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                  0
                </span>
              </Link>

<UserButton/>

            </SignedIn>

            {!user && (
              <SignInButton mode="modal">
                <button className="text-sm font-semibold hover:text-orange-500 hoverEffect">
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
