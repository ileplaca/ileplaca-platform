'use client'
import SearchForm from "@/features/components/search-form";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch('https://www.sofascore.com/api/v1/unique-tournament/11317/season/52867/standings/total')
    .then(async (res: any) => {
      const { tournament, rows } = (await res.json()).standings[0]
      const tournamentName = tournament.name;

      rows.forEach((row: any) => {
        const {
          draws,
          losses,
          matches,
          points,
          position,
          scoresAgainst,
          scoresFor
        } = row;
        const wins = matches - losses;
        const {
          name,
          nameCode,
          shortName,
          id
        } = row.team
      })
    })
  })
  return (
    <main className="flex justify-center items-center py-48 mb-8">
      <SearchForm />
    </main>
  );
}
