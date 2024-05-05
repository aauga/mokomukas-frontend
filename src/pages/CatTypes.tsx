import { useCatFacts } from "../api/facts";

export function CatTypesPage() {
  const { data, isLoading, isError } = useCatFacts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching cat facts</div>;
  }

  return <div>{data && data.data[0]}</div>;
}
