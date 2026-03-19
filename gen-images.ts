import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage(prompt: string, filename: string) {
  try {
    console.log(`Generating image for: ${prompt}`);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }
        const filepath = path.join(publicDir, filename);
        fs.writeFileSync(filepath, buffer);
        console.log(`Saved ${filename}`);
        return;
      }
    }
    console.log(`No image data found for ${filename}`);
  } catch (e) {
    console.error(`Failed to generate ${filename}:`, e);
  }
}

async function main() {
  await generateImage("Realistic professional photography of a large agricultural drone flying over a green crop field spraying mist, mountains of Ecuador in the background, sunny day, 4k resolution", "gallery-1.jpg");
  await generateImage("Close up realistic photo of a modern agricultural drone hovering above corn fields, spraying water droplets, clear blue sky, highly detailed", "gallery-2.jpg");
  await generateImage("Cinematic shot of an agricultural drone spraying crops during golden hour sunset, beautiful lighting, Ecuador landscape, professional photography", "gallery-3.jpg");
}

main();
