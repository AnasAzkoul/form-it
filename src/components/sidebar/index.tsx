'use client';
import React from 'react';
import Header from './Header';
import { Separator } from '@/components/ui/separator';
import WidgetsMenu from './widgets-menu';

const Sidebar = () => {
  return (
    <aside className='col-span-3 p-4 border-r border-r-gray-600'>
      <Header />
      <Separator className='my-4 bg-gray-600' />
      <WidgetsMenu />
    </aside>
  );
};

export default Sidebar;
