import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { BlogPost } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'src/app/blog')

export function getAllPosts(): BlogPost[] {
  const folders = fs.readdirSync(postsDirectory)

  return folders
    .filter((folder) => {
      const filePath = path.join(postsDirectory, folder, 'page.mdx')
      return fs.existsSync(filePath)
    })
    .map((folder) => {
      const slug = folder
      const filePath = path.join(postsDirectory, folder, 'page.mdx')
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)

      return {
        title: data.title,
        description: data.description,
        date: data.date,
        image: data.image ?? null,
        slug,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Optional: sort by date
}
