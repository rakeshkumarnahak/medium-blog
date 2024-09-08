import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      return c.json({ message: "User already exists" });
    }

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    const accessToken = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ accessToken });
  } catch (error) {
    console.log(error);
    c.status(411);
    return c.text("Invalid");
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();

    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!existingUser) {
      c.status(404);
      return c.json({ message: "Incorrect credentials" });
    }

    const accessToken = await sign({ id: existingUser.id }, c.env.JWT_SECRET);

    return c.json({ accessToken });
  } catch (error) {
    console.log(error);
    c.status(411);
    return c.text("Invalid");
  }
});
