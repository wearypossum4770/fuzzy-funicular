class Unemployment {
  filing_limits = new Map([[2021, 150_000]]);
  constructor() {
    this.taxYear = tax_year;
    this.adjustedGrossIncome = adjusted_gross_income;
    this.filingForm = filing_form;
  }
  adjustedGrossIncomeEligibile() {
    return this.adjustedGrossIncome < filing_limits.get(this.taxYear);
  }
  americanRescuePlanEligible({
    start_date = None,
    spouse = False,
    unemployment_insurance_income = 0,
    tax_year = None,
    end_date = None,
    instance = None,
    adjusted_gross_income = 0,
    ...args
  }) {
    EXLCUDABLE_LIMIT = 10_200;
    if (adjusted_gross_income_eligibility(args)) {
      return false;
    }
    if (spouse && this.filingForm === "form_1040_NR") {
      return false;
    }
  }
}
