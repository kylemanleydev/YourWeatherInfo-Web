export interface WeatherData {
    location: Location
    current: Current
}

export interface Location {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
}

export interface Current {
    temp_f: number
    condition: Condition
    wind_mph: number
    wind_dir: string
    humidity: number
    cloud: number
    uv: number
}

export interface Condition {}