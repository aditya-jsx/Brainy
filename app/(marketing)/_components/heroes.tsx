// import Image from "next/image";


// export const Heroes = () => {
//     return(
//         <>
//             <div className="flex flex-col items-center justify-center max-w-5xl">
//                 <div className="flex items-center gap-20">
//                     <div className="relative w-[100px] h-[200px] sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[300px]">
//                         <Image
//                          src="/boy_light.png"
//                          fill
//                          className="objects-contain dark:hidden"
//                          alt="boy_dark"
//                         /> 
//                         <Image
//                          src="/boy_dark.png"
//                          fill
//                          className="objects-contain hidden dark:block"
//                          alt="boy_dark"
//                         /> 
//                     </div>
//                     <div className="relative w-[100px] h-[200px] sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[300px]">
//                         <Image
//                          src="/girl_light.png"
//                          fill
//                          className="objects-contain dark:hidden"
//                          alt="boy_dark"
//                         /> 
//                         <Image
//                          src="/girl_dark.png"
//                          fill
//                          className="objects-contain hidden dark:block"
//                          alt="boy_dark"
//                         /> 
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export function Heroes() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-black">
      {/* Background with dramatic lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Your Ideas, Unified.</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform
            <br />
            Your Note-Taking?
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands who have revolutionized their workflow with Brainy. Start capturing,
            organizing, and sharing your ideas like never before.
          </p>

          {/* Conditional UI based on Authentication State */}
          {isLoading && (
            <div className="w-full flex items-center justify-center">
              <Spinner size="lg" />
            </div>
          )}

          {isAuthenticated && !isLoading && (
            <Button asChild size="lg" className="rounded-2xl">
              <Link href="/documents">
                Enter Brainy
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          )}

          {!isAuthenticated && !isLoading && (
            <>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <SignInButton mode="modal">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3"
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </SignInButton>
              </div>
              <p className="text-gray-500 text-sm mt-6">No credit card required • Start for free</p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}