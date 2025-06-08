export default async function handler(req, res) {
  const url = "https://api.bybit.com/v2/public/tickers?symbol=BTCUSDT";

  try {
    const response = await fetch(url);
    const result = await response.json();

    res.status(200).json({
      symbol: result.result[0].symbol,
      last_price: result.result[0].last_price,
      price_24h_pcnt: result.result[0].price_24h_pcnt
    });
  } catch (error) {
    res.status(500).json({ error: "Bybit TEST API request failed" });
  }
}
