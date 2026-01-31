import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                <Link to="/blog" className="text-blue-500 hover:underline">Back to Blogs</Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen py-32 px-6 md:px-20 lg:px-40 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
            >
                <Link to="/blog" className="inline-flex items-center text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Writing
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md"
            >
                <header className="mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-8">
                    <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-4 block">
                        {post.date} • {post.readTime}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-500 leading-tight">
                        {post.title}
                    </h1>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {post.content.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-6">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </motion.div>
        </article>
    );
};

export default BlogPost;
