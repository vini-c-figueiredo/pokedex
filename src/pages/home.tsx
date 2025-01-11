import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@/components/ui/sidebar";
import { Search } from "lucide-react";

export function HomePage() {
    const games = [
        {
            title: "Fire Red/Leaf Green",
            url: "#",
        },
        {
            title: "Heart Gold/Soul Silver",
            url: "#",
        },
        {
            title: "Diamond/Pearl/Emerald",
            url: "#",
        },
    ];

    return (
        <SidebarProvider>
            <Sidebar className="h-screen w-56 bg-green-500 text-gray-800 shadow-lg">
                <SidebarContent className="flex flex-col gap-6 p-4">
                    {/* Games Section */}
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-lg font-semibold text-black">
                            Games
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {games.map((game) => (
                                    <SidebarMenuItem
                                        key={game.title}
                                        className="rounded-lg transition hover:bg-green-400"
                                    >
                                        <SidebarMenuButton asChild className="w-full">
                                            <a
                                                href={game.url}
                                                className="flex items-center gap-2 px-3 py-2 text-gray-900 hover:text-green-900"
                                            >
                                                <span>{game.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                    {/* Search Section */}
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-lg font-semibold text-black">
                            Search
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem className="rounded-lg transition hover:bg-green-400">
                                    <SidebarMenuButton asChild className="w-full">
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 px-3 py-2 text-gray-900 hover:text-green-900"
                                        >
                                            <Search className="w-3 h-3" />
                                            <span>Search Pokémon</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    );
}
