import { Menu } from "@/components/menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export function Default() {
    return (
        <div className="flex h-screen">
            <div className="w-56 bg-gray-200">
                <SidebarProvider>
                    <Menu />
                </SidebarProvider>
            </div>
            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    );
}