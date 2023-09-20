import { IHomeParams } from '../types'
import http from '../utils/http'

export const getHomeData = () => http.get<IHomeParams[]>('home')
