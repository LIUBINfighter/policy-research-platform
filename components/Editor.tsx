interface EditorProps {
  policyContent: string | null
}

export default function Editor({ policyContent }: EditorProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">政策文本编辑</h2>
      <textarea
        className="h-[calc(100vh-200px)] w-full rounded-lg border p-4"
        value={policyContent || ''}
        placeholder="在此编辑政策文本..."
        onChange={() => {}}
      />
    </div>
  )
} 