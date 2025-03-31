import Header from "@/components/header";
import WishlistSidebar from "@/components/wishilistSidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WishlistSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <Header />
        <main className="flex-grow p-6">{children}</main>
      </div>
    </>
  );
};

export default Layout;
