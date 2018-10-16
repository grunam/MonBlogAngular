export class Post {
  content: string;
  loveIts: number;
  constructor(public id: number, public title: string, public created_at: Date) {
  }
}