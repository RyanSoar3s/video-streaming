import { vi } from "vitest";

const mockGoogleGlobal = () => {
  (globalThis as any).google = {
    accounts: {
      id: {
        initialize: vi.fn(),
        renderButton: vi.fn(),

      }

    }

  }

}

export default mockGoogleGlobal;
