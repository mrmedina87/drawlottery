(function () {

  const timeHandler = new LotteryDrawTimeHandler;

  /**
   * SIMULATE ARGENTINA TZ (OFFSET 180)
   */

  // SATURDAY 24th EDGE TESTS

  test('Next Draw for 24-8-2019 15:59:59:999 in Argentina time should be 24-08-2019 16:00', () => {

    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,24,15,59,59,999), ARGENTINA_OFFSET),
      new Date(2019,07,24,16),
    );
  });

  test('Next Draw for 24-8-2019 16:00:00:000 in Argentina time should be 24-08-2019 16:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,24,16,00,00,000), ARGENTINA_OFFSET),
      new Date(2019,07,24,16),
    );
  });

  test('Next Draw for 24-8-2019 16:00:00:001 in Argentina time should be 28-08-2019 16:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,24,16,0,0,1), ARGENTINA_OFFSET),
      new Date(2019,07,28,16),
    );
  });

  // SATURDAY 31th EDGE TESTS - To Do

  test('Next Draw for 31-8-2019 15:59:59:999 in Argentina time should be 31-08-2019 16:00', () => {

    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,31,15,59,59,999), ARGENTINA_OFFSET),
      new Date(2019,07,31,16),
    );
  });

  test('Next Draw for 31-8-2019 16:00:00:000 in Argentina time should be 31-08-2019 16:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,31,16,00,00,000), ARGENTINA_OFFSET),
      new Date(2019,07,31,16),
    );
  });

  test('Next Draw for 31-8-2019 16:00:00:001 in Argentina time should be 4-09-2019 16:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,31,16,0,0,1), ARGENTINA_OFFSET),
      new Date(2019,08,4,16),
    );
  });

  /**
   * SIMULATE IRELAND TZ (OFFSET -60)
   */

  // SATURDAY 24th EDGE TESTS

  test('Next Draw for 24-8-2019 19:59:59:999 in Ireland time should be 24-08-2019 20:00', () => {

    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,24,19,59,59,999), IRELAND_OFFSET),
      new Date(2019,07,24,20),
    );
  });

  test('Next Draw for 24-8-2019 20:00:00:000 in Ireland time should be 24-08-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,24,20,00,00,000), IRELAND_OFFSET),
      new Date(2019,07,24,20),
    );
  });

  test('Next Draw for 24-8-2019 20:00:00:001 in Ireland time should be 28-08-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,24,20,0,0,1), IRELAND_OFFSET),
      new Date(2019,07,28,20),
    );
  });

  // SATURDAY 31th EDGE TESTS

  test('Next Draw for 31-8-2019 19:59:59:999 in Ireland time should be 31-08-2019 20:00', () => {

    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,31,19,59,59,999), IRELAND_OFFSET),
      new Date(2019,07,31,20),
    );
  });

  test('Next Draw for 31-8-2019 20:00:00:000 in Ireland time should be 31-08-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,31,20,00,00,000), IRELAND_OFFSET),
      new Date(2019,07,31,20),
    );
  });

  test('Next Draw for 31-8-2019 20:00:00:001 in Ireland time should be 4-09-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,31,20,0,0,1), IRELAND_OFFSET),
      new Date(2019,08,4,20),
    );
  });

  /**
   * SIMULATE KENYA TZ (OFFSET -180)
   */

  // SATURDAY 24th EDGE TESTS

  test('Next Draw for 24-8-2019 21:59:59:999 in Kenya time should be 24-08-2019 22:00', () => {

    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,24,21,59,59,999), KENYA_OFFSET),
      new Date(2019,07,24,22),
    );
  });

  test('Next Draw for 24-8-2019 22:00:00:000 in Kenya time should be 24-08-2019 22:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,24,22,00,00,000), KENYA_OFFSET),
      new Date(2019,07,24,22),
    );
  });

  test('Next Draw for 24-8-2019 22:00:00:001 in Kenya time should be 28-08-2019 22:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,24,22,0,0,1), KENYA_OFFSET),
      new Date(2019,07,28,22),
    );
  });

  // SATURDAY 31th EDGE TESTS

  test('Next Draw for 31-8-2019 21:59:59:999 in Kenya time should be 31-08-2019 22:00', () => {

    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,31,21,59,59,999), KENYA_OFFSET),
      new Date(2019,07,31,22),
    );
  });

  test('Next Draw for 31-8-2019 22:00:00:000 in Kenya time should be 31-08-2019 22:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,31,22,00,00,000), KENYA_OFFSET),
      new Date(2019,07,31,22),
    );
  });

  test('Next Draw for 31-8-2019 22:00:00:001 in Kenya time should be 4-09-2019 22:00', () => {
    areDatesEqual(
      timeHandler.getLocalNextDrawDate(
        new Date(2019,07,31,22,0,0,1), KENYA_OFFSET),
      new Date(2019,08,4,22),
    );
  });

})();