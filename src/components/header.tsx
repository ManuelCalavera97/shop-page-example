import Link from "next/link";
import Image from "next/image";
import CompanyLogo from "@/assets/CompanyLogo.jpg";
import WishlistBadge from "./wishlistBadge";

const Header = () => {
  return (
    <header className="bg-background-alt flex items-center justify-between px-6 py-4">
      <Link href="/" aria-label="Go home" className="flex items-center gap-2">
        <Image
          src={CompanyLogo}
          alt={"Company logo"}
          width={32}
          height={32}
          className="rounded-lg"
        />
        <h1 className="text-xl font-bold">Company name</h1>
      </Link>
      <div className="flex items-center gap-4">
        <WishlistBadge />
      </div>
    </header>
  );
};

export default Header;
