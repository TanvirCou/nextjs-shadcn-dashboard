import CardList from "@/components/card/CardList"
import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import { Fan, Shield, Verified } from "lucide-react"
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet"
import EditUser from "@/components/single-user/EditUser"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AppLineChart from "@/components/charts/AppLineChart"




const page = () => {
    return (
        <div className='p-2'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>username</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col lg:flex-row gap-4 mt-2">
                <div className="w-full lg:w-[40%] xl:w-1/3 flex flex-col gap-2">
                    <div className="p-4 rounded-md bg-primary-foreground">
                        <p className="text-lg font-semibold">User Badge</p>
                        <div className="flex items-center gap-4 mt-2">
                            <HoverCard>
                                <HoverCardTrigger className="rounded-full p-2 bg-blue-500/30 border-1 border-blue-500/50"><Verified size={20} /></HoverCardTrigger>
                                <HoverCardContent>
                                    <p className="font-semibold">Verified</p>
                                    <p className="text-xs text-muted-foreground">This user is verified by admin</p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger className="rounded-full p-2 bg-green-500/30 border-1 border-green-500/50"><Shield size={20} /></HoverCardTrigger>
                                <HoverCardContent>
                                    <p className="font-semibold">Admin</p>
                                    <p className="text-xs text-muted-foreground">This user is admin</p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger className="rounded-full p-2 bg-orange-500/30 border-1 border-orange-500/50"><Fan size={20} /></HoverCardTrigger>
                                <HoverCardContent>
                                    <p className="font-semibold">Top Fan</p>
                                    <p className="text-xs text-muted-foreground">This user is top fan by admin</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>

                    <div className="p-4 rounded-md bg-primary-foreground flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold">User Info</p>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="default" className="cursor-pointer text-xs h-6 px-2">Edit Uesr</Button>
                                </SheetTrigger>
                                <EditUser />
                            </Sheet>

                        </div>
                        <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Profile Configuration</p>
                            <Progress value={70} />
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <p className="font-semibold">Username:</p>
                            <p>tanvir999</p>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <p className="font-semibold">Enmail:</p>
                            <p>tanvir999@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <p className="font-semibold">Phone:</p>
                            <p>01859594373</p>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <p className="font-semibold">Location:</p>
                            <p>Chittagong, Bangladesh</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <p className="font-semibold">Role:</p>
                            <Badge variant="default">Admin</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Joined on 25/01/25</p>
                    </div>

                    <div className="p-4 rounded-md bg-primary-foreground">
                        <CardList title="latestTransactions" />
                    </div>
                </div>

                <div className="w-full lg:w-[60%] xl:w-2/3 flex flex-col gap-2">
                    <div className="p-4 rounded-md bg-primary-foreground space-y-2">
                        <div className="flex items-center gap-2">
                            <Avatar className="size-10">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p className="text-lg font-medium">Joe Hendry</p>
                        </div>
                        <p className="text-xs text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dignissimos neque quia aperiam. Unde quod officiis quibusdam dolor esse autem repellendus id maiores repudiandae vero reprehenderit laudantium, ea sint vel.</p>
                    </div>
                    <div className="p-4 rounded-md bg-primary-foreground">
                        <AppLineChart />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page