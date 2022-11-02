export function numberWithCommas(x: number) {
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
