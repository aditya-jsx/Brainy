import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return(
        <>
            <div className="flex items-center w-full p-6 bg-background z-50">
                <Logo />
                <div className="md:m-auto w-full justify-between lg:justify-end md:justify-end flex items-center gap-x-2 text-muted-foreground">
                    <Button variant="ghost" size="sm">
                        Privacy Policy
                    </Button>
                    <Button variant="ghost" size="sm">
                        Terms and Conditions
                    </Button>
                </div>
            </div>
        </>
    )
}