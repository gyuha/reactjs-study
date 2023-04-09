"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavBarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre")
  return (
    <Link
      className={`m4 hover:text-amber-600 font-semibold p-2
      ${
        genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500"
      }
      `}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
}

export default NavBarItem;