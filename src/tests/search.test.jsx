import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MantineProvider } from "@mantine/core";
import userEvent from "@testing-library/user-event";

import Search from "../components/Search/Search.jsx";

describe("Search", () => {
  it("should display a text input with placeholder text", () => {
    render(
      <MantineProvider>
        <Search setSearchInput={vi.fn()} />
      </MantineProvider>
    );

    const inputElement = screen.getByPlaceholderText("Search");

    expect(inputElement).toBeInTheDocument();
  });

  describe("when user types a word and presses enter", () => {
    it("should call setSearchInput callback with input text", async () => {
      const user = userEvent.setup();

      const mockSetInputText = vi.fn();

      render(
        <MantineProvider>
          <Search setSearchInput={mockSetInputText} />
        </MantineProvider>
      );

      const inputElement = screen.getByPlaceholderText("Search");

      await user.type(inputElement, "book[Enter]");

      expect(mockSetInputText).toHaveBeenCalledOnce();
      expect(mockSetInputText).toHaveBeenCalledWith("book");
    });

    it("should clear text input", async () => {
      const user = userEvent.setup();
      const mockSetInputText = vi.fn();

      render(
        <MantineProvider>
          <Search setSearchInput={mockSetInputText} />
        </MantineProvider>
      );

      const inputElement = screen.getByPlaceholderText("Search");

      await user.type(inputElement, "book[Enter]");

      expect(inputElement).toHaveValue("");
    });
  });
});
