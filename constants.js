const VALID_YEAR = 1970;
const IRELAND_OFFSET = -60; // Minutes
const ARGENTINA_OFFSET = 180; // Minutes
const KENYA_OFFSET = -180; // Minutes
const WEDNESDAY_OFFSET = 3; // Days
const SATURDAY_OFFSET = 6; // Days
const oneSecondInMs = 1000;

const oneMinuteInMs = 60 * oneSecondInMs;
const oneHourInMs = 60 * oneMinuteInMs;
const oneDayInMs = 24 * oneHourInMs;
const twentyHoursInMs = 20 * oneHourInMs;
const wed8pmInMS = WEDNESDAY_OFFSET * oneDayInMs + twentyHoursInMs;
const sat8pmInMs = SATURDAY_OFFSET * oneDayInMs + twentyHoursInMs;
