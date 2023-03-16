export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      housing: {
        Row: {
          address: Json | null
          created_at: string | null
          description: string | null
          id: number
          name: string
          owner_id: string | null
          photos: string[]
          price: number
          services: number[] | null
          status: string | null
        }
        Insert: {
          address?: Json | null
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          owner_id?: string | null
          photos: string[]
          price: number
          services?: number[] | null
          status?: string | null
        }
        Update: {
          address?: Json | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          owner_id?: string | null
          photos?: string[]
          price?: number
          services?: number[] | null
          status?: string | null
        }
      }
      service: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
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
