import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { HttpAbstract } from '@/abstract/HttpAbstract'

export class AxiosAdapter extends HttpAbstract {
  private readonly _instance: AxiosInstance

  constructor(baseURL: string) {
    super(baseURL)
    this._instance = axios.create({
      baseURL,
      timeout: 5000,
    })

    this._instance.defaults.headers.post['Content-Type'] = 'application/json'
  }

  async get(url: string, params: AxiosRequestConfig['params']) {
    try {
      const response = await this._instance.get(url, { params })
      return response.data
    } catch (error: any) {
      throw new Error(`Error while fetching data: ${error.message}`)
    }
  }

  async post(url: string, data: any) {
    try {
      const response = await this._instance.post(url, data)
      return response.data
    } catch (error: any) {
      throw new Error(`Error while posting data: ${error.message}`)
    }
  }

  async put(url: string, data: any) {
    try {
      const response = await this._instance.put(url, data)
      return response.data
    } catch (error: any) {
      throw new Error(`Error while putting data: ${error.message}`)
    }
  }

  async patch(url: string, data: any) {
    try {
      const response = await this._instance.put(url, data)
      return response.data
    } catch (error: any) {
      throw new Error(`Error while putting data: ${error.message}`)
    }
  }

  async delete(url: string) {
    try {
      const response = await this._instance.delete(url)
      return response.data
    } catch (error: any) {
      throw new Error(`Error while deleting data: ${error.message}`)
    }
  }
}
