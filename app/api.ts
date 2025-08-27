import { connectDB } from "@/lib/db";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const db = await connectDB();

    await db.execute(
      "INSERT INTO enquiries (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
