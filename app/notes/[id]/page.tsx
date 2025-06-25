type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  console.log("note id:", id);

  return <div>NoteDetails</div>;
};

export default NoteDetails;
