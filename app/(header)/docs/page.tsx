
import { auth } from '@/auth'
import React from 'react'

export default async function DocsPage() {
    const session = await auth();
  return (
    <div>
      docs
    </div>
  )
}
