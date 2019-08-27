(function () {

  // WEDNESDAY EDGE TESTS

  const timeHandler = new LotteryDrawTimeHandler;

  test('Next Draw for 4-9-2019 19:59:59:999 should be 04-09-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getNextDrawDate(new Date(2019,08,04,19,59,59,999)),
      new Date(2019,08,04,20),
    );
  });

  test('Next Draw for 4-9-2019 20:00 should be 04-09-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getNextDrawDate(new Date(2019,08,04,20)),
      new Date(2019,08,04,20),
    );
  });

  test('Next Draw for 4-9-2019 20:00:00:001 should be 07-09-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getNextDrawDate(new Date(2019,08,04,20,0,0,1)),
      new Date(2019,08,7,20),
    );
  });

  // SATURDAY EDGE TESTS

  test('Next Draw for 7-9-2019 19:59:59:999 should be 04-09-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getNextDrawDate(new Date(2019,08,07,19,59,59,999)),
      new Date(2019,08,07,20),
    );
  });

  test('Next Draw for 7-9-2019 20:00 should be 07-09-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getNextDrawDate(new Date(2019,08,07,20)),
      new Date(2019,08,07,20),
    );
  });

  test('Next Draw for 7-9-2019 20:00:00:001 should be 11-09-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getNextDrawDate(new Date(2019,08,07,20,0,0,1)),
      new Date(2019,08,11,20),
    );
  });

  //
  // EDGE MONTH TESTS
  //

  // SATURDAY

  test('Next Draw for 31-8-2019 19:59:59:999 should be 31-08-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getNextDrawDate(new Date(2019,07,31,19,59,59,999)),
      new Date(2019,07,31,20),
    );
  });

  test('Next Draw for 31-8-2019 20:00 should be 07-09-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getNextDrawDate(new Date(2019,07,31,20)),
      new Date(2019,07,31,20),
    );
  });

  test('Next Draw for 31-8-2019 20:00:00:001 should be 4-09-2019 20:00', () => {
    areDatesEqual(
      timeHandler.getNextDrawDate(new Date(2019,07,31,20,0,0,1)),
      new Date(2019,08,4,20),
    );
  });

})();
