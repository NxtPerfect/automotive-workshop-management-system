import { callProducts } from "@/app/db";

export async function GET(req: Request, res: Response) {
  let status, body;
  try {
    await callProducts("SELECT * FROM jobs;")
      .then((res) => {
        status = 200;
        body = res;
      })
      .catch((err: Error) => {
        status = 400;
        body = { error: err };
      });
    return Response.json(body, {
      status,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error }, { status: 400 });
  }
}
