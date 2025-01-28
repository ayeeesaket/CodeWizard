import model from "../libs/gemini.lib.js";

const generateContent = async (prompt) => {
    const result = await model.generateContent(prompt);
    return JSON.parse(result.response.text());
};

export default generateContent;