"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const documentsPage = () => {

    const router = useRouter();
    const {user} = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" })
        .then((documentId) => router.push(`/documents/${documentId}`))

        toast.promise(promise, {
            loading: "Creating a new Nte...",
            success: "New Note Created!",
            error: "Failed to create a new Note"
        });
    };
 

    return(
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/empty-dark.png"
                height="300"
                width="300"
                alt="empty"
                className="hidden dark:block"
            />
            <Image
                src="/empty.png"
                height="300"
                width="300"
                alt="empty"
                className="dark:hidden"
            />
            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos;s Brainy
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>


        </div>
    )
}

export default documentsPage;