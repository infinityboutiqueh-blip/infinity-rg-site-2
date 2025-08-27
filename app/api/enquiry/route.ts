import mysql from "mysql2/promise";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Engl@nd_0401?",   // ✅ Your confirmed password
      database: "infinityrg",
    });

    await connection.execute(
      "INSERT INTO enquiries (name, email, message) VALUES (?, ?, ?)",
      [body.name, body.email, body.message]
    );

    await connection.end();

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error("❌ DB Insert Error:", error.message);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
