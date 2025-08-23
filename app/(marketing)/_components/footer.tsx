// import { Button } from "@/components/ui/button"
// import { Logo } from "./logo"

// export const Footer = () => {
//     return(
//         <>
//             <div className="flex items-center w-full p-6 bg-background dark:bg-[#1F1F1F] z-50">
//                 <Logo />
//                 <div className="md:m-auto w-full justify-between lg:justify-end md:justify-end flex items-center gap-x-2 text-muted-foreground">
//                     <Button variant="ghost" size="sm">
//                         Privacy Policy
//                     </Button>
//                     <Button variant="ghost" size="sm">
//                         Terms and Conditions
//                     </Button>
//                 </div>
//             </div>
//         </>
//     )
// }


import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">B</span>
              </div>
              <span className="text-white font-bold text-xl font-sans">Brainy</span>
            </div>
            <p className="text-white/70 font-manrope">
              The future of note-taking. Organize your thoughts with style and intelligence.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-white font-bold font-sans">Product</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                Features
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                Pricing
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                Templates
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                Integrations
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-bold font-sans">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                About
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                Blog
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                Careers
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                Contact
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-bold font-sans">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                Help Center
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                Documentation
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                API Reference
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors font-manrope">
                Community
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold font-sans text-white">Stay Updated</h3>
            <p className="text-white/70 font-manrope">
              Get the latest updates, tips, and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button className="bg-white text-black hover:bg-white/90 px-6">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/50 font-manrope text-sm">© 2024 Brainy. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors font-manrope">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors font-manrope">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors font-manrope">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
