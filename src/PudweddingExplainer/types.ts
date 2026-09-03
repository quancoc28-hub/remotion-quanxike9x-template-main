import { z } from "zod";

export const pudweddingExplainerSchema = z.object({
  title: z.string().default("Thiệp Cưới Online Pudwedding"),
  subtitle: z.string().default("Hiện đại - Tiện lợi - Tiết kiệm"),
});

export type PudweddingExplainerProps = z.infer<typeof pudweddingExplainerSchema>;
