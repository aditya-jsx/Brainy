// "use client";

// import {
//     Dialog,
//     DialogContent,
//     DialogHeader
// } from "@/components/ui/dialog";
// import { useCoverImage } from "@/hooks/use-cover-image";
// import { SingleImageDropzone } from "../upload/single-image";
// import { useState } from "react";
// import { useEdgeStore } from "@/lib/edgestore";
// import { useMutation } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import { useParams } from "next/navigation";
// import { Id } from "@/convex/_generated/dataModel";

// export const CoverImageModal = () => {
//     const params = useParams();
//     const update = useMutation(api.documents.update);
//     const [file, setFile] = useState<File>();
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const coverImage = useCoverImage();
//     const { edgestore } = useEdgeStore();

//     const onClose = () => {
//         setFile(undefined);
//         setIsSubmitting(false);
//         coverImage.onClose();
//     }

//     const onChange = async (file?: File) => {
//         if(file){
//             setIsSubmitting(true);
//             setFile(file);

//             const res = await edgestore.publicFiles.upload({
//                 file
//             });

//             await update({
//                 id: params.documentId as Id<"documents">,
//                 coverImage: res.url
//             });

//             onClose();
//         }
//     }

//     return(
//         <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
//             <DialogContent>
//                 <DialogHeader>
//                     <h2 className="text-center text-lg font-semibold">
//                         Cover Image
//                     </h2>
//                 </DialogHeader>
//                 <SingleImageDropzone 
//                 className="w-full outline-none" 
//                 disabled={isSubmitting}
//                 value={file}
//                 onChange={onChange}
//                 />
//             </DialogContent>
//         </Dialog>
//     );
// };


"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "../upload/single-image";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { UploaderProvider, type UploadFn } from "@/components/upload/uploader-provider";

export const CoverImageModal = () => {
    const params = useParams();
    const update = useMutation(api.documents.update);
    const [file, setFile] = useState<File>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const coverImage = useCoverImage();
    const { edgestore } = useEdgeStore();

    const onClose = () => {
        setFile(undefined);
        setIsSubmitting(false);
        coverImage.onClose();
    }

    const uploadFn: UploadFn = async ({ file, onProgressChange, signal }) => {
        setIsSubmitting(true);
        const res = await edgestore.publicFiles.upload({
            file,
            signal,
            onProgressChange,
        });

        await update({
            id: params.documentId as Id<"documents">,
            coverImage: res.url
        });

        onClose();
        return res;
    };


    return(
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <h2 className="text-center text-lg font-semibold">
                        Cover Image
                    </h2>
                </DialogHeader>
                <UploaderProvider uploadFn={uploadFn} autoUpload>
                    <SingleImageDropzone
                        className="w-full outline-none"
                        disabled={isSubmitting}
                        value={file}
                        dropzoneOptions={{
                            maxSize: 1024 * 1024 * 1, // 1 MB
                        }}
                    />
                </UploaderProvider>
            </DialogContent>
        </Dialog>
    );
};