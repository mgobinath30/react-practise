import InvestmentInput from "./InvestmentInput";
import InvestmentResult from "./InvestmentResult";
import "./InvestmentCalculatorMain.css";
import { useState } from "react";

import { Invetment } from "./Interface";
const INITIAL_VALUE = {
  initial: 0,
  annual: 0,
  interest: 0,
  duration: 0,
};

export default function InvestmentCalculatorMain() {
  const [userInvestment, setuserInvestment] =
    useState<Invetment>(INITIAL_VALUE);

  const updateInvestment = (field: string, val: number) => {
    setuserInvestment((prev) => ({ ...prev, [field]: val }));
  };

  return (
    <>
      <h1>InvestmentCalculator</h1>
      <InvestmentInput onUpdate={updateInvestment} />
      <InvestmentResult investment={userInvestment} />
    </>
  );
}
