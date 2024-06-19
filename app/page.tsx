import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between p-4">
      <div className="flex items-center mb-4 md:mb-0">
        <Link href="/">
            <Image src="/ci-logo.webp" alt="Care Indeed" width={150} height={50} />
        </Link>
      </div>
      <nav className="flex items-center">
        <Link href="/inquiry"className="text-xl font-medium">Inquiry</Link>
      </nav>
    </main>
  );
}
