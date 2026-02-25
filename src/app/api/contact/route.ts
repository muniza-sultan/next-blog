export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  // Validate
  if (!name || !email || !message) {
    return Response.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  // In real life you'd send an email here (Resend, Nodemailer etc)
  // For now we just log it and return success
  console.log("New contact form submission:", { name, email, message });

  return Response.json({ success: true, message: "Message received!" });
}