import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogListing = () => {
    return (
        <section className="min-h-screen py-32 px-6 md:px-20 lg:px-40">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-500"
            >
                Writing
            </motion.h1>

            <div className="grid grid-cols-1 gap-8">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={`/blog/${post.id}`} className="group block">
                            <article className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                    <div className="flex-1">
                                        <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-2 block">
                                            {post.date} — {post.readTime}
                                        </span>
                                        <h2 className="text-2xl font-bold mb-3 group-hover:text-black dark:group-hover:text-white transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    <div className="flex items-center text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                                        <span className="mr-2 text-sm font-medium">Read Post</span>
                                        <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BlogListing;
