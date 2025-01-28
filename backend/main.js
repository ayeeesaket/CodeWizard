// AIzaSyB7vEfjw8ZZU0ocWbCLzM8h4i_LsDT6ed8

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI("AIzaSyB7vEfjw8ZZU0ocWbCLzM8h4i_LsDT6ed8");

const model = genAi.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
        responseMimeType: "application/json",
    },
});

const result = await model.generateContent("Hello, world!");

console.log(JSON.parse(result.response.text()));

