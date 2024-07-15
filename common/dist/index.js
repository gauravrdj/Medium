"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.createBlogSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
//Signup
exports.signupSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
    name: zod_1.default.string().optional()
});
//Signin
exports.signinSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8)
});
//create Blog
exports.createBlogSchema = zod_1.default.object({
    title: zod_1.default.string().min(5),
    content: zod_1.default.string().min(50)
});
//Update Blog
exports.updateBlogSchema = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.string()
});
