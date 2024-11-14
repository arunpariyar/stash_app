const baseUrl = "http://localhost:3000";

export async function fetchTransactions() {
  try {
    const response = await fetch(`${baseUrl}/api/v1/transactions`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
