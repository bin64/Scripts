# 更改天气 AQI 信息源

hostname = weather-data.apple.com

^https://weather-data.apple.com/v1/weather/[\w-]+/[0-9]+\.[0-9]+/[0-9]+\.[0-9]+\? url script-requires-body iOS_Weather_AQI_Standard.js

