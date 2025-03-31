import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const WishlistSidebar = () => {
  return (
    <Sidebar side="right" variant="floating" collapsible="offcanvas">
      <SidebarTrigger />
      <SidebarHeader />
      <SidebarContent></SidebarContent>
    </Sidebar>
  );
};

export default WishlistSidebar;
