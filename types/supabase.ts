export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          claimed: boolean
          created_at: string | null
          id: number
          size: string
          title: string
        }
        Insert: {
          claimed?: boolean
          created_at?: string | null
          id?: number
          size?: string
          title?: string
        }
        Update: {
          claimed?: boolean
          created_at?: string | null
          id?: number
          size?: string
          title?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
