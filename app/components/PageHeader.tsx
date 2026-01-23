'use client';

import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>

      <h1 className="text-gray-400 mb-4">{title}</h1>
      <p className="text-gray-300 max-w-3xl mb-16">
        {description}
      </p>
    </motion.div>
  );
}
