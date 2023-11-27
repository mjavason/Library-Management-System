import { z } from 'zod';
import { objectIdValidator } from './object_id.validation';

export const bookValidator = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  publicationDate: z.date(),
  ISBN: z.string(),
  availableCopies: z.number(),
  totalCopies: z.number(),
});

export const bookValidation = {
  create: { body: bookValidator },
  update: { body: bookValidator.partial() },
  find: {
    query: z.object({
      _id: objectIdValidator.optional(),
      title: z.string().optional(),
      author: z.string().optional(),
      genre: z.string().optional(),
      publicationDate: z.date().optional(),
      ISBN: z.string().optional(),
      availableCopies: z.number().optional(),
      totalCopies: z.number().optional(),
    }),
  },
};
