'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/results?q=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-2xl px-4">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
          政策研究平台
        </h1>
        <form onSubmit={handleSearch} className="space-y-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="输入关键词搜索政策文件..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  )
} 