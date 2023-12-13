export async function getProducts() {
  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/products`, { cache: 'default' });

    if (res.ok) return res.json();
  } catch (err) {
    throw new Error('Could not retrieve data', { cause: err });
  }
}
