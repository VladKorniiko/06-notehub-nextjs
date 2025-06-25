import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "./NoteDetailsClient";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function NoteDetailsPage({ params }: PageProps) {
  const id = Number(params.id);
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
