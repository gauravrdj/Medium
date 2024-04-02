import zod from 'zod'

//Signup
export const signupSchema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
    name:zod.string().optional()
})

//type inference of zod schema to use in frontend as well
export type SignupInput=zod.infer<typeof signupSchema>

//Signin

export const signinSchema=zod.object({
    email:zod.string().email(),
    password: zod.string().min(8)
})

export type SigninInput=zod.infer<typeof signinSchema>

//create Blog

export const createBlogSchema=zod.object({
    title:zod.string(),
    content: zod.string()
})

export type CreateBlogInput=zod.infer<typeof createBlogSchema>

//Update Blog

export const updateBlogSchema=zod.object({
    title:zod.string(),
    content: zod.string(),
    id: zod.string()
})

export type UpdateBlogInput=zod.infer<typeof updateBlogSchema>