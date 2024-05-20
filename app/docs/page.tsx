import { auth } from '@/auth'
import React from 'react'
import ReactMarkdown from "react-markdown";


export default async function DocsPage() {
    const session = await auth();
  return (
    <div>
        
    </div>
  )
}
