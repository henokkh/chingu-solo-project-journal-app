import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

import { deleteSessionFromDb } from "../../data-layer/session";
import { getAuthenticatedUser } from "../../utils/auth-helpers";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    switch (req.method) {
      case "DELETE":
        const cookies = new Cookies(req, res);

        const sessionId = cookies.get("sessionId");

        // check the user is signed in
        const { authenticated } = await getAuthenticatedUser(sessionId);
        if (!authenticated) {
          return res.status(401).json({ message: "You are not signed in" });
        }

        // @ts-ignore
        // previous method call checks that sessionId is not falsy
        await deleteSessionFromDb(sessionId);

        cookies.set("sessionId");
        res.status(200).json({ message: "Successfully signed out" });
        break;
      default:
        return res.status(405).json({ message: "Method not supported" });
    }
  } catch (e) {
    console.log("Error in sign out handler", e);
    return res.status(500).json({ message: "Internal server error" });
  }
}
