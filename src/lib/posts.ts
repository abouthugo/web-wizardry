import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

const CONTENT_DIR = 'src/content'
export async function getPostData(id: string) {
  const fullPath = path.join(CONTENT_DIR, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHTML = processedContent.toString()

  return {
    id,
    contentHTML,
    data: matterResult.data
  }
}

export async function getAllPosts() {
  // first read the file system to get all md files
  const files = fs.readdirSync(CONTENT_DIR)
  const markdownFiles = []
  for (const i in files) {
    if (files[i].includes('.md')) {
      const content = await getPostData(files[i].replace('.md', ''))
      markdownFiles.push(content)
    }
  }

  return markdownFiles
}
