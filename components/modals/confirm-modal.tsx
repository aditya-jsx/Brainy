"use client";

import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";


interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
};

export const ConfirmModalProps = ({children, onConfirm}:ConfirmModalProps) => {

    const handleConfirm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event?.stopPropagation();
        onConfirm();
    };  

    return(
        <AlertDialog>
            <AlertDialogTrigger onClick={(e)=>e.stopPropagation()} asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolute;y sure????
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This aciton can not be undone
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={e => e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction>
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
)
}