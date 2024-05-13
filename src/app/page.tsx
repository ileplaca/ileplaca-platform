'use client'
import SearchForm from "@/features/components/search-form";
import { CreateSalaryForm } from "@/features/salaries";
import Modal from "@/features/ui/modal/modal";
import { useEffect, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <main className="flex justify-center items-center py-48 mb-8">
      <SearchForm />

      { isModalOpen && (
        <Modal>
          <div className='flex justify-center h-screen p-4 z-40'>
            <CreateSalaryForm setIsModalOpen={setIsModalOpen} />
          </div>
        </Modal>
      )}
    </main>
  );
}
