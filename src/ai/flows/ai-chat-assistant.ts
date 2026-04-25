'use server';
/**
 * @fileOverview An AI chat assistant flow for Life Changers Club International (LCCI).
 * 
 * - aiChatAssistant - A function that handles user questions about LCCI's mission, programs, and operations.
 * - AIChatAssistantInput - The input type for the aiChatAssistant function.
 * - AIChatAssistantOutput - The return type for the aiChatAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatAssistantInputSchema = z.object({
  question: z
    .string()
    .describe("The user's question about LCCI's mission, programs, or operations."),
});
export type AIChatAssistantInput = z.infer<typeof AIChatAssistantInputSchema>;

const AIChatAssistantOutputSchema = z.object({
  answer: z
    .string()
    .describe("The AI's answer to the user's question based on LCCI's content."),
});
export type AIChatAssistantOutput = z.infer<typeof AIChatAssistantOutputSchema>;

const prompt = ai.definePrompt({
  name: 'lcciChatAssistantPrompt',
  input: {schema: AIChatAssistantInputSchema},
  output: {schema: AIChatAssistantOutputSchema},
  prompt: `You are an AI chat assistant for Life Changers Club International (LCCI). Your goal is to provide concise and helpful answers to user questions based on the following information about LCCI. If the information provided does not contain the answer, state that you don't know and encourage them to use the contact form.

--- LCCI Website Content ---
Life Changers Club International (LCCI) is a non-profit organization dedicated to fostering positive community change and spiritual growth through various outreach programs and media broadcasts. Our main focus is to empower individuals to discover their purpose, transform their lives, and positively impact their communities.

Our Mission: To empower individuals to discover their purpose, transform their lives, and positively impact their communities through faith-based principles and practical support.

Our Programs include:
- **Community Outreach Initiatives**: Providing food, shelter, and educational resources to underserved communities.
- **Youth Mentorship Programs**: Guiding young individuals towards academic success and personal development.
- **Family Support Services**: Offering counseling, workshops, and resources to strengthen family units.
- **Spiritual Enrichment Broadcasts**: Live radio shows, podcasts, and online sermons that inspire and educate. These broadcasts cover topics such as faith, personal growth, and community engagement.
- **Vocational Training Workshops**: Equipping members with skills for sustainable livelihoods and career advancement.

Our Operations: LCCI operates globally with a network of dedicated volunteers and partners. We rely on generous donations and community support to fund our various initiatives. We broadcast live radio shows daily, offering spiritual guidance, inspirational talks, and community discussions. Our primary method of communication for inquiries and feedback is through our website contact form or email at info@lcci.org.

--- End LCCI Website Content ---

User's Question: {{{question}}}

Please provide an answer based ONLY on the LCCI Website Content provided above. If the answer is not in the content, gently steer the user towards the contact form.`,
});

const aiChatAssistantFlow = ai.defineFlow(
  {
    name: 'aiChatAssistantFlow',
    inputSchema: AIChatAssistantInputSchema,
    outputSchema: AIChatAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

export async function aiChatAssistant(
  input: AIChatAssistantInput
): Promise<AIChatAssistantOutput> {
  return aiChatAssistantFlow(input);
}
