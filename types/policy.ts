export interface Policy {
  id: number
  title: string
  content: string
  date: string
  summary?: string
}

export interface SearchResult {
  id: number
  title: string
  date: string
  excerpt?: string
} 