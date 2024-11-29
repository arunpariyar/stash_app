const baseUrl = import.meta.env.VITE_BASE_URL;
import { Pot } from "../models/pot";

export async function fetchTransactions() {
  try {
    const response = await fetch(`${baseUrl}/api/v2/transactions`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const transactions = await response.json();
    return transactions.body;
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

    const pots = await response.json();
    return pots.body;
  } catch (error) {
    throw error;
  }
}

export async function createPot(pot: Partial<Pot>) {
  try {
    const response = await fetch(`${baseUrl}/api/v2/pots`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, //very important to have the headers here
      body: JSON.stringify({
        name: pot.name,
        target: pot.target,
        total: pot.total,
        theme: pot.theme,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const newPot = await response.json();

    return newPot.body;
  } catch (error) {
    throw error;
  }
}

export async function deletePot(id: string) {
  try {
    const response = await fetch(`${baseUrl}/api/v2/pots/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.body;
  } catch (error) {
    throw error;
  }
}
