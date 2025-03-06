import { authService } from "../api/auth/auth.service.js";
import { asyncLocalStorage } from "../services/als.service.js";

export async function setupAsyncLocalStorage(req, res, next) {
  const storage = {};

  asyncLocalStorage.run(storage, () => {
    if (!req.cookies?.loginToken) return next();
    const loggedinUser = authService.validateToken(req.cookies.loginToken);
    console.log("loggedinUser test", loggedinUser);

    if (loggedinUser) {
      const alsStore = asyncLocalStorage.getStore();
      console.log(
        "AsyncLocalStorage after setup:",
        asyncLocalStorage.getStore()
      );

      alsStore.loggedinUser = loggedinUser;
    }
    next();
  });
}
