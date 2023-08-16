export interface Owner {
  id: number
  login: string
  url: string
  html_url: string
  avatar_url: string
}

export interface Fork {
  id: number
  name: string
  description: string | null
  html_url: string
  owner: Owner
  created_at: string
  updated_at: string
  pushed_at: string
}
