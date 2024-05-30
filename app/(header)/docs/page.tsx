"use client"
import { auth } from '@/auth'
import React from 'react'
import ReactPlayer from 'react-player/youtube';

export default async function DocsPage() {
    const session = await auth();
  return (
    <div>
        <ReactPlayer width="100%" height="100%" url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </div>
  )
}
