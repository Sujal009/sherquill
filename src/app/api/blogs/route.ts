import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const blogDir = path.join(process.cwd(), 'src/app/blog');
  const posts = fs.readdirSync(blogDir)
    .filter((name) => fs.existsSync(path.join(blogDir, name, 'page.mdx')))
    .map((folderName) => {
      const filePath = path.join(blogDir, folderName, 'page.mdx');
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        title: data.title,
        date: data.date,
        slug: folderName,
        description: data.description,
        image: data.image,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' },
  });
}
