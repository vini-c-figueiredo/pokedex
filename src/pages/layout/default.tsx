import { Menu } from "@/components/menu";
import { Outlet } from "react-router-dom";

export function Default() {
    return (
        <div className="flex h-screen">
            <div className="w-56 bg-gray-200">
                <Menu />
            </div>
            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    );
}