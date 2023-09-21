'use client'
import React from 'react';
import Sidebar from '@/components/sidebar';
import DroppableBox from '@/components/droppable-box';


export default function Home() {


  return (
    <main className='grid min-h-screen grid-cols-12 text-gray-200'>
      <Sidebar />
      <DroppableBox />
    </main>
  );
}
