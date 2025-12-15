import { Router } from "@angular/router";
import { vi } from "vitest";

const navigateMock = (router: Router) => {
  return vi
      .spyOn(router, "navigate")
      .mockResolvedValue(true);

}

export default navigateMock;
