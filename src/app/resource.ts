export class Resource {
  id: number;
  type: string;
  subtype: string;
  name: string;
  description: string | null;
  comment: string | null;
  user: string | null;
  date: Date | null;
}