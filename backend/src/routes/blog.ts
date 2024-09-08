import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: { userId: string };
}>();

blogRouter.use(async (c, next) => {
  const jwt = c.req.header("Authorization") || "";
  if (!jwt) {
    c.status(401);
    return c.json({ message: "Please send the token" });
  }
  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);

  if (!payload) {
    c.status(401);
    return c.json({ message: "Unauthorized" });
  }

  c.set("userId", payload.id as string);
  await next();
});

blogRouter.post("", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const authorId = c.get("userId");

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId,
      },
    });

    return c.json({ id: post.id });
  } catch (error) {
    c.status(411);
    return c.text("Invalid");
  }
});

blogRouter.put("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();

    const postId = c.req.param("id");

    const post = await prisma.post.update({
      where: {
        id: postId,
        authorId: c.get("userId"),
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({ updatedPost: post });
  } catch (error) {
    console.log(error);
    c.status(411);
    return c.text("Invalid");
  }
});

blogRouter.get("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const posts = await prisma.post.findMany();

    return c.json({ allPosts: posts });
  } catch (error) {
    c.status(411);
    return c.text("Invalid");
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const id = c.req.param("id");

    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    return c.json(post);
  } catch (error) {
    console.log(error);
    c.status(411);
    return c.text("Invalid");
  }
});
