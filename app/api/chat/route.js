import { NextResponse } from "next/server"
import OpenAI from "openai"

const systemPrompt = "You are a helpful and friendly customer support assistant. Always greet the customer politely and ask how you can assist them. Be patient, understanding, and provide clear and concise solutions to their issues. If you cannot solve the problem, escalate it to a human representative while ensuring the customer feels heard and valued."

export async function POST(req) {
    const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: process.env.API_KEY,
          }) 
    const data = await req.json() 

  const completion = await openai.chat.completions.create({
    messages: [{role: 'system', content: systemPrompt}, ...data], 
    model: "meta-llama/llama-3.1-8b-instruct:free", 
    stream: true, 
  })

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder() 
      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content 
          if (content) {
            const text = encoder.encode(content) 
            controller.enqueue(text) 
          }
        }
      } catch (err) {
        controller.error(err) 
      } finally {
        controller.close() 
      }
    },
  })
    return new NextResponse(stream)
}    

// const openai = new OpenAI({
    //     baseURL: "https://openrouter.ai/api/v1",
    //     apiKey: process.env.API_KEY,
    //   })
      
    // const completion = await openai.chat.completions.create({
    //       model: "meta-llama/llama-3.1-8b-instruct:free",
    //       messages: [
    //         { role: "user", content: "Say this is a test" }
    //       ],
    //     })