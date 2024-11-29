import { getAllSongs } from "@/lib/md";
import type { Metadata } from "next";

import { ViewToggle } from "@/components/view-toggle";
import { SongsList } from "@/components/songs-list";

const metadata: Metadata = {
  title: "Barnvisor",
  description: "Sångtexter till svenska barn-/vaggvisor",
  openGraph: {
    images: [
      {
        url: "http://localhost:3000/api/og?title=Barnvisor&description=Sångtexter till svenska barn-/vaggvisor",
        width: 1200,
        height: 630,
        alt: "Sångtexter till svenska barn-/vaggvisor",
      },
    ],
  },
};

export { metadata };

export default function Home() {
  const songs = getAllSongs();

  return (
    <>
      <div className="col-start-2 col-end-5">
        <h1 className="mb-1 font-medium">Barnvisor</h1>
        <p className="mb-12 text-muted-foreground">
          Sångtexter till svenska barn-/vaggvisor
        </p>

        <div className="mb-4 flex gap-4">
          <ViewToggle /> {/* Use the new component */}
          <h2 className="text-sm text-muted-foreground">Sångtexter</h2>
        </div>

        <SongsList songs={songs} />
      </div>
      <div />
    </>
  );
}
