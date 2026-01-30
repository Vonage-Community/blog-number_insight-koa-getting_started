# Getting Started with Vonage's Number Insight APIs on Koa.js

This project introduces the [Vonage Number Insight API](https://developer.vonage.com/en/number-insight/overview) and demonstrates how to retrieve information about a phone number via a web interface using [Koa.js](https://koajs.com/).

## Features

- Query phone numbers using three levels of insight:
  - **Basic**: Country and number formatting information
  - **Standard**: Adds carrier, porting, and line type information
  - **Advanced**: Adds validity, reachability, and roaming status
- Clean, modern web interface
- Built with Koa.js and the Vonage Node.js SDK

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- A [Vonage API account](https://developer.vonage.com/sign-up)

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Vonage-Community/blog-number_insight-koa-getting_started
   cd blog-number_insight-koa-getting_started
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the example environment file and add your Vonage credentials:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your API key and secret from the [Vonage Dashboard](https://dashboard.nexmo.com):
   ```
   VONAGE_API_KEY='your_api_key_here'
   VONAGE_API_SECRET='your_api_secret_here'
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter a phone number in the input field (without leading `+` or `00`)
2. Select the insight level (Basic, Standard, or Advanced)
3. Click "Get Insights" to retrieve information about the number

**Tip:** Use the format `14155550100` for US numbers (country code + number).

## API Levels

| Level | Information Provided |
|-------|---------------------|
| **Basic** | Country, number formatting (national/international) |
| **Standard** | Basic + carrier, line type, porting status, CNAM (US) |
| **Advanced** | Standard + validity, reachability, roaming status |

## What About Identity Insights?

For advanced fraud detection capabilities including SIM Swap detection and fraud scoring, check out the [Vonage Identity Insights API](https://developer.vonage.com/en/identity-insights/overview).

## Resources

- [Number Insight API Documentation](https://developer.vonage.com/en/number-insight/overview)
- [Number Insight API Reference](https://developer.vonage.com/en/api/number-insight)
- [Vonage Node.js SDK](https://github.com/Vonage/vonage-node-sdk)
- [Identity Insights API](https://developer.vonage.com/en/identity-insights/overview)

## Support

- [Vonage Community Slack](https://developer.vonage.com/community/slack)
- [@VonageDev on Twitter](https://x.com/vonagedev)

## License

MIT
