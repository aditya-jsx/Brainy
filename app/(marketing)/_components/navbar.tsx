// // "use client";

// // import { useScrollTop } from "@/hooks/use-scroll-top";
// // import { cn } from "@/lib/utils";
// // import { Logo } from "./logo";
// // import { ModeToggle } from "@/components/mode-toggle";
// // import { useConvexAuth } from "convex/react";
// // import { SignInButton, UserButton } from "@clerk/nextjs";
// // import { Button } from "@/components/ui/button";
// // import { Spinner } from "@/components/spinner";
// // import Link from "next/link";

// // export const Navbar = () => {

// //   const {isAuthenticated, isLoading} = useConvexAuth();
// //   const scrolled = useScrollTop();
// //     return(
// //         <div className={cn(
// //           "z-50 bg-background fixed dark:bg-[#1F1F1F] top-0 flex items-center w-full p-6",
// //           scrolled && "border-b shadow-sm"
// //         )}>
// //           <Logo />
// //           <div className="flex lg:justify-end md:justify-end justify-between w-full items-center gap-x-2">
// //             {isLoading && (
// //               <Spinner />

// //             )}
// //             {!isAuthenticated && !isLoading && (
// //               <>
// //                 <SignInButton mode="modal">
// //                   <Button variant="ghost" size="sm">
// //                     Log In
// //                   </Button>
// //                 </SignInButton>
// //                 <SignInButton mode="modal">
// //                   <Button size="sm">
// //                     Get Brainy Free
// //                   </Button>
// //                 </SignInButton>
// //               </>
// //             )}
// //             {isAuthenticated && !isLoading && (
// //               <>
// //                 <Button variant="ghost" size="sm" asChild>
// //                   <Link href="/documents">
// //                     Enter Brainy
// //                   </Link>
// //                 </Button>
// //                 <UserButton
// //                   afterSignOutUrl="/"
// //                 />
// //               </>
// //             )}
// //             <ModeToggle />
// //           </div>
// //         </div>
// //     )
// // }

// "use client";

// import { useState } from "react";
// import { useScrollTop } from "@/hooks/use-scroll-top";
// import { useConvexAuth } from "convex/react";
// import { SignInButton, UserButton } from "@clerk/nextjs";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";

// import { cn } from "@/lib/utils";
// import { Logo } from "./logo";
// import { ModeToggle } from "@/components/mode-toggle";
// import { Button } from "@/components/ui/button";
// import { Spinner } from "@/components/spinner";

// export const Navbar = () => {
//   const { isAuthenticated, isLoading } = useConvexAuth();
//   const scrolled = useScrollTop();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Close mobile menu when a link is clicked
//   const handleLinkClick = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const navContent = (
//     <>
//       {isLoading && <Spinner />}
//       {!isAuthenticated && !isLoading && (
//         <>
//           <SignInButton mode="modal">
//             <Button variant="ghost" size="sm" onClick={handleLinkClick}>
//               Log In
//             </Button>
//           </SignInButton>
//           <SignInButton mode="modal">
//             <Button size="sm" onClick={handleLinkClick}>
//               Get Brainy Free
//             </Button>
//           </SignInButton>
//         </>
//       )}
//       {isAuthenticated && !isLoading && (
//         <>
//           <Button variant="ghost" size="sm" asChild>
//             <Link href="/documents" onClick={handleLinkClick}>
//               Enter Brainy
//             </Link>
//           </Button>
//           <UserButton afterSignOutUrl="/" />
//         </>
//       )}
//       <ModeToggle />
//     </>
//   );

//   return (
//     <nav
//       className={cn(
//         "fixed top-4 left-0 right-0 z-50 rounded-full transition-all duration-300",
//         isMobileMenuOpen ? "bg-background dark:bg-[#1F1F1F]" : "bg-background/80 dark:bg-[#1F1F1F]/80 backdrop-blur-sm",
//         scrolled && "border-b shadow-sm",
//       )}
//     >
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* <Logo /> */}
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center gap-20">
//               <span className="text-black font-bold text-lg">B</span>
//           </div>
//           <h1 className="text-2xl font-medium">Brainy</h1>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-x-4">
//           {navContent}
//         </div>

//         {/* Mobile Menu Button */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="md:hidden"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </Button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden p-4 pt-0">
//           <div className="flex flex-col items-center space-y-4 pt-4 border-t">
//             {navContent}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

"use client";

import { useState } from "react";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navContent = (
    <>
      {isLoading && <Spinner />}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm" onClick={handleLinkClick}>
              Log In
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button size="sm" onClick={handleLinkClick}>
              Get Brainy Free
            </Button>
          </SignInButton>
        </>
      )}
      {isAuthenticated && !isLoading && (
        <>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/documents" onClick={handleLinkClick}>
              Enter Brainy
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </>
      )}
      {/* <ModeToggle /> */}
    </>
  );

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300",
        "bg-background/80 dark:bg-[#1F1F1F]/80 backdrop-blur-sm border border-transparent",
        scrolled && "border-neutral-200 dark:border-neutral-800 shadow-sm",
        isMobileMenuOpen
          ? "w-[70%] rounded-2xl bg-background dark:bg-[#1F1F1F] bg-white"
          : "w-auto rounded-full"
      )}
    >
      <div className="flex items-center lg:w-[30rem] lg:h-[4rem] justify-between p-2 px-4 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">B</span>
          </div>
          <h1
            className={cn(
              "text-xl font-medium",
              isMobileMenuOpen && "hidden xs:block"
            )}
          >
            Brainy
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-x-4">{navContent}</div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-600 ease-in-out", // <-- Added
          isMobileMenuOpen
            ? "max-h-96 opacity-100" // use max-h instead of h-full for smoother animation
            : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pb-4 pt-2">
          <div className="flex flex-col h-full w-full items-start space-y-4 pt-4 border-t">
            {navContent}
          </div>
        </div>
      </div>
    </nav>
  );
};
