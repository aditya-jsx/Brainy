import Image from "next/image";


export const Heroes = () => {
    return(
        <>
            <div className="flex flex-col items-center justify-center max-w-5xl">
                <div className="flex items-center gap-20">
                    <div className="relative w-[100px] h-[200px] sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[300px]">
                        <Image
                         src="/boy_light.png"
                         fill
                         className="objects-contain"
                         alt="boy_dark"
                        /> 
                    </div>
                    <div className="relative w-[100px] h-[200px]">
                        <Image
                         src="/girl_light.png"
                         fill
                         className="objects-contain"
                         alt="boy_dark"
                        /> 
                    </div>
                </div>
            </div>
        </>
    )
}