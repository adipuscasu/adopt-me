async function fetchSearch(queryKey) {
  const { animal, location, breed } = queryKey[0] ?? null;

  const rest = await fetch(
    `http://pets-v2.dev-apis/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!rest.ok) {
    throw new Error(`pet search not OK ${animal}, ${location}, ${breed}`);
  }

  return rest.json();
}

export default fetchSearch;
