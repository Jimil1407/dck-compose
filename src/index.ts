import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express()
const prismaclient = new PrismaClient()

app.get("/", async (req,res) => {
    const data = await prismaclient.user.findMany({
    })

    res.json({
        data,
        "message": "get endpoint"
    })
})


app.post("/",async (req,res) => {
    await prismaclient.user.create({
        data: {
        username: Math.random().toString(),
        password: Math.random().toString()
        }
    })
    res.json({
        "message": "post endpoint"
    })
})

app.listen(3000)