/**
 * The Irish lottery draw takes place twice weekly on a Wednesday and a Saturday at 8pm.
 * Write a function that calculates and returns the next valid draw date based on the
 * current date and time and also on an optional supplied date time parameter.
 */

class Main {
  constructor() {
    this.domHandler = new DomHandler();
    this.timesHandler = new LotteryDrawTimeHandler();

    this.customDateElem = this.domHandler.getElement('.next-custom-draw__date');
    this.customTimeElem = this.domHandler.getElement('.next-custom-draw__time');
    this.submitBtn = this.domHandler.getElement('.next-custom-draw__submit');
    this.customDrawDateValueElem = this.domHandler.getElement('.next-draw-custom__value');
    this.errorElem = this.domHandler.getElement('.next-custom-draw__error');

    this.submitBtn.addEventListener('click', this.clickCustomNextLotteryHandler.bind(this));
    /**
     * It is possible to avoid manually binding the this in the handler by using an arrow method
     * but that way of creating methods is not fully supported in FF, even in new versions
     * (like it is shown in the first line below this)
     */
  }

  // clickCustomNextLotteryHandler = (event) => {
  clickCustomNextLotteryHandler (event) {
    event.preventDefault();
    const [yyyy,mm,dd] = this.customDateElem.value.split('-');
    const [hours,mins] = this.customTimeElem.value.split(':');
    let errorMsg;
    if (yyyy >= VALID_YEAR && mm && dd && hours && mins) {
      errorMsg = '';
      const customDate = new Date(yyyy, mm - 1, dd, hours, mins);

      const nextDrawDate = this.timesHandler.getLocalNextDrawDate(customDate);

      this.domHandler.replaceInnerText(this.customDrawDateValueElem, nextDrawDate);
    } else {
      errorMsg = 'Wrong input';
    }
    this.domHandler.replaceInnerText(this.errorElem, errorMsg);
  }

  setImmediateNextDraw() {
    const fromNowElem = this.domHandler.getElement('.next-draw-from-now__value');
    const val = this.timesHandler.getLocalNextDrawDate(new Date());
    this.domHandler.replaceInnerText(fromNowElem, val);
  }

  init() {
    this.setImmediateNextDraw();
  }
}

(function() {
  const main = new Main();
  main.init();
})();