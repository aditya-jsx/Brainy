"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {

  const {isAuthenticated, isLoading} = useConvexAuth();

  return (
    <>
      <div className="max-w-3xl space-y-4">
        <h1 className="lg:text-5xl text-3xl md:text-6xl font-bold">
            Your Ideas, Documents, & Plans, Unified. Welcome to <span className="underline">Brainy</span>
        </h1>
        <h3 className="text-base text-xl md:text-2xl font-medium">
            Brainy is the connected workspace where <br />
            better, faster work happens
        </h3>
        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <Button asChild>
              <Link href="/documents">
                Enter Brainy
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
          </Button>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button>
              Get Brainy Free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        )}
      </div>
    </>
  );
};
