import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import AmountDisplay from "../pages/Overview/AmountDisplay/AmountDisplay";

test("AmountDisplay renders with correct title and amount", async () => {
  const amountDisplay = render(
    <AmountDisplay title="testText" amount={1000}></AmountDisplay>
  );
  const title = await amountDisplay.findByTestId("test-title");
  const amount = await amountDisplay.findByTestId("test-amount");
  expect(title.textContent).toBe("testText");
  expect(amount.textContent).toBe("€1,000.00");
  amountDisplay.unmount();
});
