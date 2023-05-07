// import type { NextApiRequest, NextApiResponse } from "next";

// // Fake users data
// const users: { id: number }[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

// export default function handler(
//   _req: NextApiRequest,
//   res: NextApiResponse<{ id: number }[]>
// ) {
//   console.log("test");
//   // Get data from your database
//   res.status(200).json(users);
// }
export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}
