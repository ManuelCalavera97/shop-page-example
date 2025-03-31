import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import WishlistProducts from "./wishlistProducts";

const WishlistSidebar = () => {
  return (
    <Sidebar side="right" variant="floating" collapsible="offcanvas">
      <SidebarHeader className="flex flex-row items-center justify-between">
        <h2 className="text-md font-medium">Wishlisted products</h2>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <WishlistProducts />
      </SidebarContent>
    </Sidebar>
  );
};

export default WishlistSidebar;
