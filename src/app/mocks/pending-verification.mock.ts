import { PendingVerification } from "@core/services/pending-verification";
import { vi } from "vitest";

const getExpiresAt = (pendingVerification: PendingVerification) => {
  vi.spyOn(pendingVerification, "getExpiresAt").mockReturnValue(11111);

};

const getEmail = (pendingVerification: PendingVerification) => {
  vi.spyOn(pendingVerification, "getEmail").mockReturnValue("example@email.com");

};

export {
  getExpiresAt,
  getEmail

};
