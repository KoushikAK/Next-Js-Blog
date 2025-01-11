import React from 'react';
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';


const dirContent = fs.readdirSync("content");
const blogs = dirContent.map((file) => {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(fileContent);
    return {
        title: data.title || "Untitled",
        description: data.description || "No description available.",
        slug: data.slug || "no-slug",
        date: data.date || "1970-01-01",
        author: data.author || "Unknown",
        image: data.image || "/default-image.jpg", // Provide a default image path
    };
});


// const blogs = dirContent.map(file => {
//     const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
//     const { data } = matter(fileContent)
//     return data
// })
// const blogs = [
//     {
//         title: 'First Blog',
//         description: 'This is the first blog description.',
//         slug: 'first-blog',
//         date: '2023-10-01',
//         author: 'John Doe',
//         image: './blog1.jpg',
//     },
//     {
//         title: 'Second Blog',
//         description: 'This is the second blog description.',
//         slug: 'second-blog',
//         date: '2023-10-02',
//         author: 'Jane Smith',
//         image: './blog2.jpg',
//     },
//     {
//         title: 'Third Blog',
//         description: 'This is the third blog description.',
//         slug: 'third-blog',
//         date: '2023-10-03',
//         author: 'Alice Johnson',
//         image: './blog3.jpg',
//     },
//     {
//         title: 'Fourth Blog',
//         description: 'This is the fourth blog description.',
//         slug: 'fourth-blog',
//         date: '2023-10-04',
//         author: 'Bob Brown',
//         image: './blog4.jpg',
//     },
//     {
//         title: 'Fifth Blog',
//         description: 'This is the fifth blog description.',
//         slug: 'fifth-blog',
//         date: '2023-10-05',
//         author: 'Charlie Davis',
//         image: './blog5.jpg',
//     },
//     // Add more blog objects as needed
// ];
const Blog = () => {
    return (
        <div className="flex flex-wrap justify-center p-5">
            {blogs.map((blog, index) => (
                <div
                    key={index}
                    className="border border-gray-300 rounded-lg shadow-lg m-2 w-full sm:w-80 h-96 overflow-hidden transform transition-transform duration-200 hover:scale-105"
                >
                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                    <div className="p-3">
                        <h2 className="text-2xl mb-3">{blog.title}</h2>
                        <p className="mx-auto">{blog.description}</p>
                        <p className="text-sm">
                            By {blog.author} on {new Date(blog.date).toLocaleDateString()}
                        </p>
                        <Link href={`/blogpost/${blog.slug}`} className={`${buttonVariants({ variant: "outline" })} mt-4 inline-block text-center w-full sm:w-auto`}>
                            Read more
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;