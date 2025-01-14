import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar
} from "@/components/ui/sidebar";
import {
    ChevronRight,
    Folder,
    Forward,
    LucideProps,
    MoreHorizontal,
    Search,
    SquareTerminal,
    Trash2
} from "lucide-react";
import PokemonLogo from '../assets/Pokemonlogo.png';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "./ui/collapsible";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu";

type item = {
    title: string,
    url: string
}

type navMain = {
    title: string,
    url: string,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    isActive: boolean,
    items: item[]
}

type projects = {
    name: string,
    url: string,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

type menuData = {
    navMain: navMain[],
    projects: projects[]
}

const data: menuData = {
    navMain: [
        {
            title: "Games",
            url: "/",
            icon: SquareTerminal,
            isActive: false,
            items: [
                { title: "Fire Red/Leaf Green", url: "/#" },
                { title: "Heart Gold/Soul Silver", url: "/#" },
                { title: "Diamond/Pearl/Emerald", url: "/#" },
            ],
        },
    ],
    projects: [
        {
            name: "Search Pokemon",
            url: "/search",
            icon: Search,
        },
    ],
};

export function Menu() {
    const { isMobile } = useSidebar();

    return (
        <Sidebar collapsible="icon">
            {/* Header */}
            <SidebarHeader className="bg-green-600">
                <a href="/">
                    <img src={PokemonLogo} alt="Pokemon Logo" className="w-48 h-auto mx-auto" />
                </a>
            </SidebarHeader>

            {/* Main Navigation */}
            <SidebarContent className="bg-green-600">
                <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarMenu>
                        {data.navMain.map((item) => (
                            <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={item.isActive}
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title}>
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild>
                                                        <a href={subItem.url}>{subItem.title}</a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>

                {/* Projects */}
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarMenu>
                        {data.projects.map((project) => (
                            <SidebarMenuItem key={project.name}>
                                <SidebarMenuButton asChild>
                                    <a href={project.url}>
                                        <project.icon />
                                        <span>{project.name}</span>
                                    </a>
                                </SidebarMenuButton>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <SidebarMenuAction showOnHover>
                                            <MoreHorizontal />
                                            <span className="sr-only">More</span>
                                        </SidebarMenuAction>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-48 rounded-lg"
                                        side={isMobile ? "bottom" : "right"}
                                        align={isMobile ? "end" : "start"}
                                    >
                                        <DropdownMenuItem>
                                            <Folder className="text-muted-foreground" />
                                            <span>View Project</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Forward className="text-muted-foreground" />
                                            <span>Share Project</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <Trash2 className="text-muted-foreground" />
                                            <span>Delete Project</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
