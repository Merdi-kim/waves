export default function formatNumber(num: number): string {
  const suffixes = ['', 'K', 'M', 'B'];
  const magnitude = Math.floor(Math.log10(num) / 3);

  const scaledNum = num / 10 ** (magnitude * 3);

  const isZeroFirstDigitInFloorNumber = Math.floor(scaledNum * 10) % 10 === 0;
  // Avoiding 20.0K type of numbers
  const formattedNum = isZeroFirstDigitInFloorNumber
    ? scaledNum
    : scaledNum.toFixed(1);

  return formattedNum + suffixes[magnitude];
}
