// ReactChartJSで使うカラーをrandomに生成
export const randomColors = (count: number): string[] => {
  const colors: string[] = [];
  for (let i = 0; i < count; i++) {
    const color = Math.floor((360 / count) * i);
    colors.push(`hsl(${color},70%,50%)`);
  }
  return colors;
};
