// "use client";

// import { cn } from "@/lib/utils";
// import { ChevronsLeft, MenuIcon, Plus, PlusCircle, Search, Settings, Trash } from "lucide-react";
// import { useParams, usePathname, useRouter } from "next/navigation";
// import { ElementRef, useEffect, useRef, useState } from "react";

// import { useMediaQuery } from "usehooks-ts";
// import UserItem from "./user-item";
// import { useMutation } from "convex/react";

// import { api } from "@/convex/_generated/api";
// import { Item } from "./item";
// import { toast } from "sonner";
// import { Documentlist } from "./document-list";
// import { Popover, PopoverTrigger } from "@/components/ui/popover";
// import { PopoverContent } from "@radix-ui/react-popover";
// import { TrashBox } from "./trash-box";

// import { useSearch } from "@/hooks/use-search";
// import { useSettings } from "@/hooks/use-settings";
// import { Navbar } from "./navbar";

// const Navigation = () => {
//     const router = useRouter();
//     const settings = useSettings();
//     const search = useSearch();
//     const params = useParams();
//     const pathName = usePathname();
//     const isMobile = useMediaQuery("(max-width: 768px)");
//     const create = useMutation(api.documents.create);

//     const isResizingRef = useRef(false);
//     const sideBarRef = useRef<ElementRef<"aside">>(null);
//     const navBarRef = useRef<ElementRef<"div">>(null);
//     const [isResetting, setIsResetting] = useState(false);
//     const [isCollapsed, setIsCollapsed] = useState(isMobile);


//     useEffect(() => {
//         if (isMobile) {
//             collapse();
//         } else {
//             resetWidth();
//         }
//     }, [isMobile]);

//     useEffect(() => {
//         if (isMobile) {
//             collapse();
//         }
//     }, [pathName, isMobile]);

//     const handleMouseDown = (
//         event: React.MouseEvent<HTMLDivElement, MouseEvent>
//     ) => {
//         event.preventDefault();
//         event.stopPropagation();

//         isResizingRef.current = true;
//         document.addEventListener("mousemove", handleMouseMove);
//         document.addEventListener("mouseup", handleMouseUp);
//     };

//     const handleMouseMove = (event: MouseEvent) => {
//         if (!isResizingRef.current) return;
//         let newWidth = event.clientX;

//         if (newWidth < 240) newWidth = 240;
//         if (newWidth > 480) newWidth = 480;

//         if (sideBarRef.current && navBarRef.current) {
//             sideBarRef.current.style.width = `${newWidth}px`;
//             navBarRef.current.style.setProperty("left", `${newWidth}px`);
//             navBarRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`);
//         }
//     };

//     const handleMouseUp = () => {
//         isResizingRef.current = false;
//         document.removeEventListener("mousemove", handleMouseMove);
//         document.removeEventListener("mouseup", handleMouseUp);
//     };

//     const resetWidth = () => {
//         if (sideBarRef.current && navBarRef.current) {
//             setIsCollapsed(false);
//             setIsResetting(true);

//             // MOBILE FIX: On mobile, open the sidebar to a fixed width (240px).
//             // It will act as an overlay and not push the main content.
//             // On desktop, it will reset to 240px and push the main content.
//             sideBarRef.current.style.width = isMobile ? "240px" : "240px";
//             navBarRef.current.style.setProperty(
//                 "width",
//                 isMobile ? "100%" : "calc(100% - 240px)"
//             );
//             navBarRef.current.style.setProperty(
//                 "left",
//                 isMobile ? "0" : "240px"
//             );
//             setTimeout(() => setIsResetting(false), 300);
//         }
//     };

//     const collapse = () => {
//         if (sideBarRef.current && navBarRef.current) {
//             setIsCollapsed(true);
//             setIsResetting(true);

//             sideBarRef.current.style.width = "0";
//             navBarRef.current.style.setProperty("width", "100%");
//             navBarRef.current.style.setProperty("left", "0");
//             setTimeout(() => setIsResetting(false), 300);
//         }
//     };

//     const handleCreate = () => {
//         const promise = create({ title: "Untitled" })
//         .then((documentId)=>router.push(`/documents/${documentId}`))

//         toast.promise(promise, {
//             loading: "Creating a new note...",
//             success: "New note created!",
//             error: "Failed to create a new note"
//         })
//     }

//     return (
//         <>
//             <aside
//                 ref={sideBarRef}
//                 className={cn(
//                     "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
//                     isResetting && "transition-all ease-in-out duration-300",
//                     isMobile && "w-0"
//                 )}
//             >
//                 <div
//                     onClick={collapse}
//                     role="button"
//                     className={cn(
//                         "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-100  transition",
//                         isMobile && "opacity-100"
//                     )}
//                 >
//                     <ChevronsLeft className="h-6 w-6 hover:cursor-pointer" />
//                 </div>
//                 <div>
//                     <UserItem />
//                     <Item 
//                         label="Search"
//                         icon={Search}
//                         isSearch
//                         onClick={search.onOpen}    
//                     />
//                     {/* <Item 
//                         label="Settings"
//                         icon={Settings}
//                         onClick={settings.onOpen}    
//                     /> */}
//                     <Item
//                         onClick={handleCreate}
//                         label="New Page"
//                         icon={PlusCircle}
//                     />
//                 </div>
//                 <div className="mt-4">
//                     <Item 
//                      onClick={handleCreate}
//                      icon={Plus}
//                      label="New page"
//                     />
//                     <Documentlist />
//                     <Popover>
//                         <PopoverTrigger className="w-full mt-4">
//                             <Item 
//                             label="Trash"
//                             icon={Trash}
//                             />
//                         </PopoverTrigger>
//                         <PopoverContent 
//                         side={isMobile ? "bottom" : "right"}
//                         className="p-0 w-72"
//                         >
//                             <TrashBox />
//                         </PopoverContent>
//                     </Popover>
//                 </div>
//                 <div
//                     onMouseDown={handleMouseDown}
//                     onClick={resetWidth}
//                     className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"/>
//             </aside>
//             <div
//                 ref={navBarRef}
//                 className={cn(
//                     "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
//                     isResetting && "transition-all ease-in-out duration-300",
//                     isMobile && "left-0 w-full"
//                 )}
//             >   
//                 {!!params.documentId? (
//                     <Navbar
//                     isCollapsed={isCollapsed}
//                     onResetWidth={resetWidth}
//                     / >
//                 ) : (
//                     <nav className="bg-transparent px-3 py-2 w-full">
//                         {isCollapsed && <MenuIcon onClick={resetWidth} role="button" className="h-6 w-6 text-muted-foreground hover:cursor-pointer hover:bg-primary/10 rounded-sm" />}
//                     </nav>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Navigation;


"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon, Plus, PlusCircle, Search, Settings, Trash } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";

import { useMediaQuery } from "usehooks-ts";
import UserItem from "./user-item";
import { useMutation } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Item } from "./item";
import { toast } from "sonner";
import { Documentlist } from "./document-list";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { TrashBox } from "./trash-box";

import { useSearch } from "@/hooks/use-search";
import { useSettings } from "@/hooks/use-settings";
import { Navbar } from "./navbar";

const Navigation = () => {
    const router = useRouter();
    const settings = useSettings();
    const search = useSearch();
    const params = useParams();
    const pathName = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const create = useMutation(api.documents.create);

    const isResizingRef = useRef(false);
    const sideBarRef = useRef<ElementRef<"aside">>(null);
    const navBarRef = useRef<ElementRef<"div">>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isMobile);


    useEffect(() => {
        if (isMobile) {
            collapse();
        } else {
            resetWidth();
        }
    }, [isMobile]);

    useEffect(() => {
        if (isMobile) {
            collapse();
        }
    }, [pathName, isMobile]);

    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.preventDefault();
        event.stopPropagation();

        isResizingRef.current = true;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (!isResizingRef.current) return;
        let newWidth = event.clientX;

        if (newWidth < 240) newWidth = 240;
        if (newWidth > 480) newWidth = 480;

        if (sideBarRef.current && navBarRef.current) {
            sideBarRef.current.style.width = `${newWidth}px`;
            navBarRef.current.style.setProperty("left", `${newWidth}px`);
            navBarRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`);
        }
    };

    const handleMouseUp = () => {
        isResizingRef.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    const resetWidth = () => {
        if (sideBarRef.current && navBarRef.current) {
            setIsCollapsed(false);
            setIsResetting(true);

            sideBarRef.current.style.width = "240px";
            
            // CORRECTED LOGIC
            navBarRef.current.style.setProperty(
                "width",
                "calc(100% - 240px)"
            );
            navBarRef.current.style.setProperty(
                "left",
                "240px"
            );

            setTimeout(() => setIsResetting(false), 300);
        }
    };

    const collapse = () => {
        if (sideBarRef.current && navBarRef.current) {
            setIsCollapsed(true);
            setIsResetting(true);

            sideBarRef.current.style.width = "0";
            navBarRef.current.style.setProperty("width", "100%");
            navBarRef.current.style.setProperty("left", "0");
            setTimeout(() => setIsResetting(false), 300);
        }
    };

    const handleCreate = () => {
        const promise = create({ title: "Untitled" })
        .then((documentId)=>router.push(`/documents/${documentId}`))

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note"
        })
    }

    return (
        <>
            <aside
                ref={sideBarRef}
                className={cn(
                    "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
                    isResetting && "transition-all ease-in-out duration-300",
                    isMobile && "w-0"
                )}
            >
                <div
                    onClick={collapse}
                    role="button"
                    className={cn(
                        "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-100  transition",
                        isMobile && "opacity-100"
                    )}
                >
                    <ChevronsLeft className="h-6 w-6 hover:cursor-pointer" />
                </div>
                <div>
                    <UserItem />
                    <Item 
                        label="Search"
                        icon={Search}
                        isSearch
                        onClick={search.onOpen}    
                    />
                    {/* <Item 
                        label="Settings"
                        icon={Settings}
                        onClick={settings.onOpen}    
                    /> */}
                    <Item
                        onClick={handleCreate}
                        label="New Page"
                        icon={PlusCircle}
                    />
                </div>
                <div className="mt-4">
                    <Item 
                     onClick={handleCreate}
                     icon={Plus}
                     label="New page"
                    />
                    <Documentlist />
                    <Popover>
                        <PopoverTrigger className="w-full mt-4">
                            <Item 
                            label="Trash"
                            icon={Trash}
                            />
                        </PopoverTrigger>
                        <PopoverContent 
                        side={isMobile ? "bottom" : "right"}
                        className="p-0 w-72"
                        >
                            <TrashBox />
                        </PopoverContent>
                    </Popover>
                </div>
                <div
                    onMouseDown={handleMouseDown}
                    onClick={resetWidth}
                    className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"/>
            </aside>
            <div
                ref={navBarRef}
                className={cn(
                    "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
                    isResetting && "transition-all ease-in-out duration-300",
                    isMobile && "left-0 w-full"
                )}
            >   
                {!!params.documentId? (
                    <Navbar
                    isCollapsed={isCollapsed}
                    onResetWidth={resetWidth}
                    / >
                ) : (
                    <nav className="bg-transparent px-3 py-2 w-full">
                        {isCollapsed && <MenuIcon onClick={resetWidth} role="button" className="h-6 w-6 text-muted-foreground hover:cursor-pointer hover:bg-primary/10 rounded-sm" />}
                    </nav>
                )}
            </div>
        </>
    );
};

export default Navigation;