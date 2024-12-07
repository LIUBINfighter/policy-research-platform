'use client'

interface SearchResultsProps {
  onPolicySelect: (policy: string) => void
}

export default function SearchResults({ onPolicySelect }: SearchResultsProps) {
  // 模拟搜索结果数据
  const mockResults = [
    { id: 1, title: '关于促进人工智能发展的指导意见', date: '2023-12-01' },
    { id: 2, title: '数字经济发展规划', date: '2023-11-15' },
  ]

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">搜索结果</h2>
      <div className="space-y-4">
        {mockResults.map((result) => (
          <div
            key={result.id}
            onClick={() => onPolicySelect(result.title)}
            className="cursor-pointer rounded-lg border p-3 hover:bg-gray-50"
          >
            <h3 className="font-medium">{result.title}</h3>
            <p className="text-sm text-gray-500">{result.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 