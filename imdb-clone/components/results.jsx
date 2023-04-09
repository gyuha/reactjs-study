import Card from "./card";

export default function Results({ data }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {data.map((d) => <Card key={d.id} data={d}></Card>)}
    </div>
  );
}
