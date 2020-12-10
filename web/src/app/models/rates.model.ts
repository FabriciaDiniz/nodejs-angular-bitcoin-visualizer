export class CoinDeskResponse {
  constructor(
    public time: {
      updated: string,
      updatedISO: string,
      updateduk: string
    },
    public disclaimer: string,
    public bpi: RatesObject,
  ) {}
}

export class RatesObject {
  constructor(
    public USD: Rate,
    public BTC: Rate,
    public BRL: Rate,
    public CAD: Rate,
    public EUR: Rate,
  ) {}
}

export class Rate {
  constructor(
    public code: string,
    public rate: string,
    public description: string,
    public rate_float: number,
  ) {}
}
