# 更改天气 AQI 信息源

hostname = weather-data.apple.com

AQI-US = type=http-response, pattern=https://weather-data.apple.com/v1/weather/[\w-]+/[0-9]+\.[0-9]+/[0-9]+\.[0-9]+\?, requires-body=true, script-path=/path/to/iOS_Weather_AQI_Standard.js

