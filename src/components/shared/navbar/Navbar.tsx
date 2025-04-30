import { LogOut, Moon, Settings, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeToggle from './ThemeToggle'
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'



const Navbar = () => {
    // const { toggleSidebar } = useSidebar()
    return (
        <div className='flex items-center justify-between p-3 sticky top-0 bg-background z-10'>
            {/* <Button variant="outline" onClick={toggleSidebar}>Side</Button> */}
            <SidebarTrigger />
            <div className='flex items-center gap-4'>
                <Link href="/">Dashboard</Link>
                <ThemeToggle />

                <DropdownMenu>
                    <DropdownMenuTrigger className='cursor-pointer'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='flex gap-3 cursor-pointer'>
                            <User size={16} />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className='flex gap-3 cursor-pointer'>
                            <Settings />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant='destructive' className='flex gap-3 cursor-pointer'>
                            <LogOut />
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}

export default Navbar