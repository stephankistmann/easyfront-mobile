interface IConvertPerncentageDateRequest {
  text: string;
  min: string;
  max: string;
}

const formatNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

const getTime = (value: string): number => {
  const hour = parseInt(value.split(":")[0]);

  const bareMinute = parseInt(value.split(":")[1]);

  const minute = bareMinute / 60;

  return hour + minute;
};

export const convertPercentageDate = ({
  text,
  min,
  max,
}: IConvertPerncentageDateRequest): string => {
  const num = parseInt(text);

  if (num < 1) return min;

  const minTime = getTime(min);

  const maxTime = getTime(max);

  const range = maxTime - minTime;

  const time = (range * num) / 100 + minTime;

  const hour = Math.floor(time);

  const minutes = Math.floor((time - hour) * 60);

  const minutesRoundeds = Math.floor(minutes / 10) * 10;

  return `${formatNumber(hour)}:${formatNumber(minutesRoundeds)}`;
};
