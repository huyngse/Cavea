export function formatCurrency(number) {
  return number
    ? number.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
    : 0;
}
