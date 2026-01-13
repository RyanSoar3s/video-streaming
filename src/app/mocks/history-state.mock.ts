import { TContent } from "@models/videoStreaming.model";
import { vi } from "vitest";

const historyStateCatalogMock = (content: { params: string, info: TContent }) =>
  vi.spyOn(history, "state", "get").mockReturnValue({
    fromSearch: true,
    mode: "search",
    catalog: [
      content

    ]

  } satisfies {
      fromSearch?: boolean;
      mode?: "full" | "search";
      catalog?: Array<{ params: string, info: TContent }>;

  });

const historyStateContentPageMock = (content: { params: string, info: TContent["items"] }) =>
  vi.spyOn(history, "state", "get").mockReturnValue({
    access: true,
    content: [
      content

    ]

  } satisfies {
      access?: boolean;
      content: Array<{ params: string, info: TContent["items"] }>;

  });

export {
  historyStateCatalogMock,
  historyStateContentPageMock

};
