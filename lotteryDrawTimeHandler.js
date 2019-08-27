/**
 * Manages Lottery Draw Times
 */

class LotteryDrawTimeHandler {
  isValidDate(d) {
    if (d instanceof Date && !isNaN(d)) {
      return true;
    }
    throw new Error('Not Valid Date');
  }

  /**
   * Given the input, gets the number of
   * milliseconds from the start of the week
   * @param {Date} date
   * @returns {Number}
   */
  getMsThisWeek(date) {
    if (this.isValidDate(date)) {
      return (date.getDay() * oneDayInMs)
      + ( date.getHours() * oneHourInMs)
      + (date.getMinutes() * oneMinuteInMs)
      + (date.getSeconds() * oneSecondInMs)
      + date.getMilliseconds();
    }
  };

  /**
   * Given the input, get the next Wednesday or Saturday at 8pm
   * @param {Date} date
   * @returns {Date} nextDrawDate
   */
  getNextDrawDate(date) {
    if (this.isValidDate(date)) {
      /**
       * We don't deal with timezones here
       */
      const nextDrawDate = new Date(date.getTime());
      const msThisWeek = this.getMsThisWeek(nextDrawDate);
      const offset = (msThisWeek > wed8pmInMS && msThisWeek <= sat8pmInMs) ?
        SATURDAY_OFFSET : WEDNESDAY_OFFSET;
      nextDrawDate.setDate(nextDrawDate.getDate() + (offset + 7 - nextDrawDate.getDay()) % 7);
      nextDrawDate.setHours(20,0,0,0);
      return nextDrawDate;
    }
  };

  /**
   * Given the input, parses local using tz-offsets
   * @param {Date} date
   * @param {Numbers} Optional: number of hardcoded minutes of offset
   * (for unit-testing purposes)
   * @returns {Date} localNextDrawDate
   */
  getLocalNextDrawDate(customDate, tzOffset) {
    /**
     * We deal with timezones here
     */
    if (this.isValidDate(customDate)) {
      const localTzOffset = tzOffset || customDate.getTimezoneOffset();
      const tzOffsetToIreland = localTzOffset - IRELAND_OFFSET; // minutes
      const tzOffsetToIrelandInMs = tzOffsetToIreland * oneMinuteInMs;
      const customDateInIrelandTz = customDate.getTime() + tzOffsetToIrelandInMs;
      const nextDrawDateInIrelandTz = this.getNextDrawDate(new Date(customDateInIrelandTz));
      const nextLocalDrawDate = nextDrawDateInIrelandTz.getTime() - tzOffsetToIrelandInMs;
      return new Date(nextLocalDrawDate);
    }
  };
}