import { Policy, SearchResult } from '@/types/policy'

export async function searchPolicies(query: string): Promise<SearchResult[]> {
  // TODO: 实现实际的 API 调用
  return [
    { id: 1, title: '关于促进人工智能发展的指导意见', date: '2023-12-01' },
    { id: 2, title: '数字经济发展规划', date: '2023-11-15' },
  ]
}

export async function getPolicyById(id: number): Promise<Policy | null> {
  // TODO: 实现实际的 API 调用
  return null
}

export async function getAISummary(content: string): Promise<string> {
  // TODO: 实现 AI 接口调用
  return '这是一个示例 AI 总结...'
} 