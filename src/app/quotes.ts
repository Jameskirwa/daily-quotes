export class Quotes {
  public showDescription: boolean;
  public showBtn: boolean;
  constructor(
    public id: number,
    public author: string,
    public description: string,
    public submittedBy: string,
    public setDate: Date,
    public upVote: number,
    public dnVote: number
    ) {
      this.showDescription = false;
      this.showBtn = true;
  }

}
