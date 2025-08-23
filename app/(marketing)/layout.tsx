import { Navbar } from "./_components/navbar"

const marketingLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="h-full">
        <Navbar />
        <main className="h-full pt-15 dark:bg-black">
            {children}
        </main>
    </div>
  )
}

export default marketingLayout
