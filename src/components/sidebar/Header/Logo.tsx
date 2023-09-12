import Link from 'next/link';
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div>
      <Link
        href='/'
        className='text-gray-200'
      >
        <p className='text-3xl'>Form IT</p>
      </Link>
    </div>
  );
}

export default Logo
