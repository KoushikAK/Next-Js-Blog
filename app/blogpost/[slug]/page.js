import fs from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

import rehypePrettyCode from "rehype-pretty-code";

import { transformerCopyButton } from '@rehype-pretty/transformers'

import OnThisPage from '@/components/onthispage';

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'


export default async function Page({ params }) {

    // const blog = {
    //     title: "NextJs tutoial",
    //     author: "John Doe",
    //     description: "This is the first blog description.",
    //     content: "This is the first blog content. It can include <strong>HTML</strong> tags and other elements.",
    //     date: "2023-10-01",
    // }


    const filepath = `content/${params.slug}.md`
    
    if(!fs.existsSync(filepath)){ 
        notFound() 
        return 
    } 
    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { data, content } = matter(fileContent);

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)

        .use(rehypePrettyCode, {
            theme: {
                dark: "github-dark-dimmed",
                light: "github-light",
            },
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ]
        })

        .use(rehypeAutolinkHeadings)
        .use(rehypeSlug)

    const htmlContent = (await processor.process(content)).toString()

    return (
        <div className="max-w-6xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg mb-2 border-l-4 border-gray-100 pl-4 italic">&quot;{data.description}&quot;</p>
            <div className="flex gap-2">
                <p className="text-sm text-gray-500 mb-2 italic">{data.author}</p>
                <p className="text-sm text-gray-500 mb-4">{data.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>
            <OnThisPage htmlContent={htmlContent} />
        </div>
    )
}