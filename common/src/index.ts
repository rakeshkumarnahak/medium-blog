import z from "zod";

export const signupInput = z.object({
  email: z.string().email({ message: "email must be of email type" }),
  password: z
    .string()
    .min(6, { message: "password must be of minimun 6 characters" }),
  name: z.string().optional(),
});

export type SignupInput = z.infer<typeof signupInput>;

export const signinInput = z.object({
  email: z.string().email({ message: "email must be of email type" }),
  password: z
    .string()
    .min(6, { message: "password must be of minimun 6 characters" }),
});

export type SigninInput = z.infer<typeof signinInput>;

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number().optional(),
});

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
