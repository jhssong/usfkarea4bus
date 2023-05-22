export default function getNowTime() {
  const now = new Date();
  const UTC = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const nowTime = new Date(UTC + KR_TIME_DIFF);

  return nowTime;
}
