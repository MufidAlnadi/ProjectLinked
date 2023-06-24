import prisma from "../../libs/prismadb";
interface RequestBody {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const contact = await prisma.contactMessage.create({
    data: {
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
    },
  });
  const { message, ...result } = contact;
  return new Response(JSON.stringify(result));
}
