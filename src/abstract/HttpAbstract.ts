export abstract class HttpAbstract {
  private readonly baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }
  abstract get(url: string, params?: any): Promise<any>
  abstract post(url: string, data?: any): Promise<any>
  abstract put(url: string, data?: any): Promise<any>
  abstract patch(url: string, data?: any): Promise<any>
  abstract delete(url: string): Promise<any>
}
