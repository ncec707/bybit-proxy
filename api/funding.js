export default async function handler(req, res) {
  const url = "https://api.bybit.com/v5/market/funding/prev-funding-rate?symbol=BTCUSDT";

  try {
    const response = await fetch(url);
    const result = await response.json();

    const data = {
      symbol: result.result.symbol,
      fundingRate: result.result.fundingRate,
      fundingTime: result.result.fundingRateTimestamp
    };

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Bybit API request failed" });
  }
}
