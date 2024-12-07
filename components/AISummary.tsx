interface AISummaryProps {
  policyContent: string | null
}

export default function AISummary({ policyContent }: AISummaryProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">AI 政策解读</h2>
      <div className="prose max-w-none">
        {policyContent ? (
          <div className="space-y-4">
            <h3>政策要点</h3>
            <ul>
              <li>这是示例政策要点 1</li>
              <li>这是示例政策要点 2</li>
            </ul>
            <h3>政策解读</h3>
            <p>这里是 AI 生成的政策解读内容...</p>
          </div>
        ) : (
          <p className="text-gray-500">请选择政策文件查看 AI 解读</p>
        )}
      </div>
    </div>
  )
} 