// src/types/category.ts
export type Category = {
  category_id: number
  category_name: string
  children: Category[]
}
