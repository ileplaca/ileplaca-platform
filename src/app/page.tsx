'use client'
import SearchForm from "@/features/components/search-form";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main animate={{ y: [200, 0] }} className="flex justify-center items-center py-48 mb-8">
      <SearchForm />
    </motion.main>
  );
}
