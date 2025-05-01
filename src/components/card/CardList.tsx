import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { Badge } from '../ui/badge';

const popularContent = [
    {
        id: 1,
        title: "JavaScript Tutorial",
        badge: "Coding",
        image:
            "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 4300,
    },
    {
        id: 2,
        title: "Tech Trends 2025",
        badge: "Tech",
        image:
            "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 3200,
    },
    {
        id: 3,
        title: "The Future of AI",
        badge: "AI",
        image:
            "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 2400,
    },
    {
        id: 4,
        title: "React Hooks Explained",
        badge: "Coding",
        image:
            "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1500,
    },
    {
        id: 5,
        title: "Image Generation with AI",
        badge: "AI",
        image:
            "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1200,
    },
];

const latestTransactions = [
    {
        id: 1,
        title: "Subscription Renewal",
        badge: "John Doe",
        image:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1400,
    },
    {
        id: 2,
        title: "Payment for Services",
        badge: "Jane Smith",
        image:
            "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 2100,
    },
    {
        id: 3,
        title: "Subscription Renewal",
        badge: "Michael Johnson",
        image:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1300,
    },
    {
        id: 4,
        title: "Payment for Services",
        badge: "Lily Adams",
        image:
            "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 2500,
    },
    {
        id: 5,
        title: "Subscription Renewal",
        badge: "Sam Brown",
        image:
            "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1400,
    },
];

const CardList = ({ title }: { title: "latestTransactions" | "popularContent" }) => {
    const list = title === "popularContent" ? popularContent : latestTransactions;
    return (
        <div>
            <p className='font-medium mb-2'>{title === "latestTransactions" ? "Latest Transactions" : "Popular Content"}</p>
            <div className='flex flex-col gap-2'>
                {list.map(i => (
                    <Card key={i.id} className='flex-row items-center justify-between py-2 px-2'>
                        <div className='flex items-center gap-2'>
                            <div className='w-10 h-10 rounded-sm relative overflow-hidden'>
                                <Image src={i.image} alt='' fill className='object-cover' />
                            </div>
                            <CardContent className='p-0'>
                                <CardTitle className='text-[10px] font-medium'>{i.title}</CardTitle>
                                <Badge variant="secondary" className='text-[10px]'>{i.badge}</Badge>
                            </CardContent>
                        </div>
                        <CardFooter className='p-0 text-sm'>
                            <p>{i.count / 1000}k</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CardList