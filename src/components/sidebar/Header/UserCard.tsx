import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {};

const UserCard = (props: Props) => {
  return (
    <Card className='bg-slate-800 border-none py-6'>
      <CardContent className='flex justify-center flex-col items-center gap-3 text-gray-200'>
        <Avatar className='h-16 w-16'>
          <AvatarImage src='public/200px.jpeg' />
          <AvatarFallback className='text-slate-800'>AA</AvatarFallback>
        </Avatar>
        <span className='text-xl'>Anas Azkoul</span>
        <span className=''>English Teacher</span>
      </CardContent>
    </Card>
  );
};

export default UserCard;
