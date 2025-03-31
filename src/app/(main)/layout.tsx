import Header from "@/components/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
};

export default Layout;
