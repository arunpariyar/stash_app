const baseUrl = import.meta.env.VITE_BASE_URL;
import { Pot } from "../models/pot";

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

    return newPot;
  } catch (error) {
    throw error;
  }
}
