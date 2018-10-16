export class Post {
  content: string;
  loveIts: boolean;
  constructor(public id: number, public title: string, public created_at: Date) {
  }
}