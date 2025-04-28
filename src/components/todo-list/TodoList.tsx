"use client"
import React, { useState } from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { Card } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { format } from 'date-fns'
import { Button } from '../ui/button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '../ui/calendar'

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false)
    return (
        <div className='flex flex-col gap-2'>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className='text-sm w-full'>
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Select a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='p-0 w-auto'>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false)
                        }}
                    />
                </PopoverContent>
            </Popover>

            <ScrollArea className='max-h-[300px]  overflow-y-auto p-1'>
                <div className='flex flex-col gap-2'>

                    <Card className='py-3 px-2 rounded-sm'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms1" />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </Card>

                    <Card className='py-3 px-2 rounded-sm'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms1" />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </Card>

                    <Card className='py-3 px-2 rounded-sm'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms1" />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </Card>

                    <Card className='py-3 px-2 rounded-sm'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms1" />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </Card>

                    <Card className='py-3 px-2 rounded-sm'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms1" />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </Card>

                    <Card className='py-3 px-2 rounded-sm'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms1" />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </Card>

                    <Card className='py-3 px-2 rounded-sm'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms1" />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </Card>

                    <Card className='py-3 px-2 rounded-sm'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms1" />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </Card>

                    <Card className='py-3 px-2 rounded-sm'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms1" />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </Card>

                    <Card className='py-3 px-2 rounded-sm'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms1" />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </Card>

                    <Card className='py-3 px-2 rounded-sm'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms1" />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </Card>

                </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList