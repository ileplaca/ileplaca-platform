import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Ileplaca
      </h1>
      <section>
        <input type="text" placeholder="Stanowisko, nazwa firmy" />
        <button> <FontAwesomeIcon icon={faSearchengin} /> Szukaj</button>
      </section>
    </main>
  );
}
