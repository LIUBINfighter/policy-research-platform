'use client'

import { useState } from 'react'
import SearchResults from '@/components/SearchResults'
import Editor from '@/components/Editor'
import AISummary from '@/components/AISummary'
import PolicyStructure from '@/components/PolicyStructure'

export default function ResultsPage() {
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="grid grid-cols-12 gap-4">
        {/* 左侧导航和搜索结果 */}
        <div className="col-span-2 space-y-4">
          <nav className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="mb-3 font-medium text-gray-700">导航目录</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer text-blue-600">监管许可</li>
              <li className="cursor-pointer hover:text-blue-600">政策支持</li>
              <li className="cursor-pointer hover:text-blue-600">民事利益</li>
              <li className="cursor-pointer hover:text-blue-600">行政干预</li>
              <li className="cursor-pointer hover:text-blue-600">刑事定罪</li>
            </ul>
          </nav>
          <SearchResults onPolicySelect={setSelectedPolicy} />
        </div>

        {/* 中间政策结构展示区域 */}
        <div className="col-span-6">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 border-b pb-4">
              <h2 className="text-xl font-bold">数据合规相关治理实况 综述</h2>
            </div>
            <PolicyStructure />
          </div>
        </div>

        {/* 右侧 AI 解读区域 */}
        <div className="col-span-4">
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">知识图谱</h3>
              <div className="prose max-w-none">
                <ul>
                  <li>监管许可相关要求</li>
                  <li>政策支持措施</li>
                  <li>民事权益保护</li>
                </ul>
              </div>
            </div>
            <AISummary policyContent={selectedPolicy} />
          </div>
        </div>
      </div>
    </div>
  )
} 