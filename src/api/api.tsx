const baseUrl = import.meta.env.VITE_BASE_URL;

export async function fetchTransactions() {
  try {
    const response = await fetch(`${baseUrl}/api/v2/transactions`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchPots() {
  try {
    const response = await fetch(`${baseUrl}/api/v2/pots`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
