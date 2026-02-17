import { BellIcon } from 'lucide-react'

function Header() {
    return (
        <header className="flex shadow items-center justify-between px-10 py-6 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
            <div className="flex items-center gap-6">
                <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2.5 rounded-full bg-sidebar-accent hover:bg-primary/10 transition-colors">
                    <BellIcon className="w-5 h-5 text-foreground hover:text-primary" />
                </button>
                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right lg:block hidden">
                        <p className="text-sm font-bold leading-none">Alex Rivers</p>
                        <p className="text-xs text-[#8a7c60] mt-1">Manager</p>
                    </div>
                    <div className="size-11 rounded-full bg-cover bg-center ring-2 ring-primary/20" data-alt="Profile picture of cafe manager Alex" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXs3pqw-ysrR3lTEWhL4ah60ZabHz0prenab-qgScmaji9O-DKMbv5KGkAa6DuboUoOY543uNc9XO8uB6m3GPMfcFbr4leBXdZKSCskz6948jNuTRJyMcoAFkMcoxvMpf5g4ym0vmnSn2CNDDD7pNB8V1uUPJjwOmlzGJpQ4Cv24gFu-Rw4hExedi_Guv5x2Ad3uA-bOnrEWGRWtLz9dWWqiZdLQVluq3rtfxZ0JUqa8yTcGrIO-aW9yV0psgToX2cCObFfCT8R5M')" }}></div>
                </div>
            </div>
        </header>
    );
}

export default Header