"use client"
import { Add, Search } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import { Logout } from "@mui/icons-material";
import Link from 'next/link';
import Image from 'next/image';


const TopBar = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  return (
    <div className='flex justify-between items-center mt-6'>
      <div className='relative'>
        <input type='text' className='search-bar' placeholder='Search posts, people, ...' value={search} onChange={(e) => setSearch(e.target.value)} />
        <Search className='search-icon' onClick={() => { }} />
      </div>
      <button className='create-post-btn' onClick={() => router.push("/create-post")}>
        <Add /> <p>Create a post</p>
      </button>
      <div className='flex gap-3'>
        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer items-center md:hidden">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
            </div>
          </SignOutButton>
        </SignedIn>


        <Link href="/">
          <Image src="/assets/logo.png" alt='profile photo' width={50} height={50} className='rounded-full md:hidden' />
        </Link>

      </div>
    </div>
  )
}

export default TopBar
