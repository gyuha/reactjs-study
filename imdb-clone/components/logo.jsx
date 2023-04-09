import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
        <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
                IMDb
            </span>
            <span className="text-xl hidden sm:inline">
                Clone
            </span>
        </h2>
    </Link>
  )
}
