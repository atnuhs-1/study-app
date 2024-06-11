export async function GET() {
    const data = await fetch("http://127.0.0.1:5000/").then((res) => res.json());
    return Response.json(data);
  }