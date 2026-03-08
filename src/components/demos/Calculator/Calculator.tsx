"use client";
import Big from "big.js";
import { useEffect, useState } from "react";
import { FaBackspace } from "react-icons/fa";
import {
  FaDivide,
  FaEquals,
  FaMinus,
  FaPercent,
  FaPlus,
  FaPlusMinus,
  FaXmark,
} from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

import isNumber from "@/utils/isNumber";
import Button from "./Button";

function Calculator() {
  const t = useTranslations("calculator");

  const [result, setResult] = useState<any>({
    currentValue: "0",
    previousValue: null,
    operation: null,
    overwrite: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const numbers = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
        "%",
        "C",
        "c",
        "+",
        "-",
        "x",
        "X",
        "=",
      ];

      if (numbers.includes(e.key)) {
        setResult(calculate(result, e.key));
      } else if (e.key === "/") {
        setResult(calculate(result, "÷"));
      } else if (e.key === "*") {
        setResult(calculate(result, "x"));
      } else if (e.key === "Backspace") {
        setResult(calculate(result, "<="));
      } else if (e.key === "Escape") {
        setResult(calculate(result, "C"));
      } else if (e.key === "Delete") {
        setResult(calculate(result, "CE"));
      } else if (e.key === "Enter") {
        setResult(calculate(result, "="));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [result]);

  function operate(numberOne: string, numberTwo: string, operation: string) {
    const one = Big(numberOne || "0");
    const two: any = Big(
      numberTwo || (operation === "÷" || operation === "x" ? "1" : "0"),
    );

    if (operation === "+") {
      return parseFloat(one.plus(two).toFixed(2)).toString();
    }

    if (operation === "-") {
      return parseFloat(one.minus(two).toFixed(2)).toString();
    }

    if (operation.toLowerCase() === "x") {
      return parseFloat(one.times(two).toFixed(2)).toString();
    }

    if (operation === "÷") {
      if (two.eq(0)) {
        toast.error(t("divideByZero"));
        return "0";
      } else {
        return parseFloat(one.div(two).toFixed(2)).toString();
      }
    }

    throw Error(`Unknown operation '${operation}'`);
  }

  function calculate(result: any, buttonName: string) {
    let { currentValue, previousValue, operation, overwrite } = result;

    const num = parseFloat(currentValue);

    // ½   - nghịch đảo
    if (buttonName === "½ ") {
      if (num === 0) {
        toast.error(t("divideByZero"));
        return { ...result, currentValue: "0" };
      }
      return {
        ...result,
        currentValue: parseFloat((1 / num).toFixed(2)).toString(),
        overwrite: true,
      };
    }

    // x² - x bình phương
    if (buttonName === "x²") {
      return {
        ...result,
        currentValue: parseFloat(Math.pow(num, 2).toFixed(2)).toString(),
        overwrite: true,
      };
    }

    // √x - căn bậc 2
    if (buttonName === "√x") {
      if (num < 0) {
        toast.error(t("invalidInput"));
        return { ...result, currentValue: "0" };
      }
      return {
        ...result,
        currentValue: parseFloat(Math.sqrt(num).toFixed(2)).toString(),
        overwrite: true,
      };
    }

    // 1. "C" - Clear All
    if (buttonName.toUpperCase() === "C") {
      return {
        currentValue: "0",
        previousValue: null,
        operation: null,
        overwrite: false,
      };
    }

    // 2. "CE" - Clear Entry (chỉ currentValue)
    if (buttonName === "CE") {
      return {
        ...result,
        currentValue: "0",
        overwrite: false,
      };
    }

    // 3. Backspace "<="
    if (buttonName === "<=") {
      if (overwrite || currentValue === "0") {
        return {
          ...result,
          currentValue: "0",
          overwrite: false,
        };
      }
      return {
        ...result,
        currentValue: currentValue.length > 1 ? currentValue.slice(0, -1) : "0",
      };
    }

    // 4. Dấu +/- đổi dấu
    if (buttonName === "+/-") {
      return {
        ...result,
        currentValue:
          currentValue.charAt(0) === "-"
            ? currentValue.slice(1)
            : "-" + currentValue,
      };
    }

    // 5. Dấu % - tính phần trăm
    if (buttonName === "%") {
      const num = parseFloat(currentValue);
      return {
        ...result,
        currentValue: parseFloat((num / 100).toFixed(2)).toString(),
      };
    }

    // 6. Dấu chấm .
    if (buttonName === ".") {
      if (overwrite) {
        return {
          ...result,
          currentValue: "0.",
          overwrite: false,
        };
      }
      if (currentValue.includes(".")) return result;
      return {
        ...result,
        currentValue: currentValue + ".",
      };
    }

    // 7. Nhập số
    if (isNumber(buttonName)) {
      if (overwrite || currentValue === "0") {
        return {
          ...result,
          currentValue: buttonName,
          overwrite: false,
        };
      }
      return {
        ...result,
        currentValue: currentValue + buttonName,
      };
    }

    // 8. Phép toán (+ - x ÷)
    if (["+", "-", "x", "÷"].includes(buttonName.toLowerCase())) {
      if (previousValue !== null && operation && !overwrite) {
        const computed = operate(previousValue, currentValue, operation);
        return {
          currentValue: computed,
          previousValue: computed,
          operation: buttonName.toLowerCase(),
          overwrite: true,
        };
      }

      return {
        ...result,
        operation: buttonName.toLowerCase(),
        previousValue: previousValue ?? currentValue,
        overwrite: true,
      };
    }

    // 9. "=" - thực hiện phép tính
    if (buttonName === "=") {
      if (!operation || previousValue === null) return result;

      const computed = operate(previousValue, currentValue, operation);
      return {
        currentValue: computed,
        previousValue: null,
        operation: null,
        overwrite: true,
      };
    }

    // 10. Mặc định: không thay đổi
    return result;
  }

  return (
    <section className="min-h-screen flex items-start justify-center pt-20">
      <div className="max-w-100 w-[95%] flex gap-4 flex-col bg-black/50 p-6 rounded-xl border-4 border-[theme(--primary-light)] shadow-[1px_1px_1px_rgba(255,255,255,0.5)]">
        <h1 className="uppercase text-xl font-black">{t("title")}</h1>
        <div className="w-full aspect-3/1 p-4 bg-black/50 border-2 border-white/50 rounded flex flex-col">
          <div className="h-2/5 flex items-center">
            <p className="w-full overflow-x-auto text-right text-base font-light text-gray-400">
              {result.previousValue &&
                Number(result.previousValue).toLocaleString("en-US")}{" "}
              {result.operation}
            </p>
          </div>
          <div className="h-3/5 flex items-center">
            <p className="w-full text-4xl font-bold text-white overflow-x-auto text-right">
              {/* {Number(result.currentValue).toLocaleString("en-US")} */}
              {result.currentValue}
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-2">
          <Button
            type={2}
            content={<FaPercent />}
            onClick={() => setResult(calculate(result, "%"))}
          />
          <Button
            type={2}
            content={"CE"}
            onClick={() => setResult(calculate(result, "CE"))}
          />
          <Button
            type={2}
            content={"C"}
            onClick={() => setResult(calculate(result, "C"))}
          />
          <Button
            type={2}
            content={<FaBackspace />}
            onClick={() => setResult(calculate(result, "<="))}
          />
          <Button
            type={2}
            content={"½ "}
            onClick={() => setResult(calculate(result, "½ "))}
          />
          <Button
            type={2}
            content={"x²"}
            onClick={() => setResult(calculate(result, "x²"))}
          />
          <Button
            type={2}
            content={"√x"}
            onClick={() => setResult(calculate(result, "√x"))}
          />
          <Button
            type={2}
            content={<FaDivide />}
            onClick={() => setResult(calculate(result, "÷"))}
          />
          <Button
            type={1}
            content={"7"}
            onClick={() => setResult(calculate(result, "7"))}
          />
          <Button
            type={1}
            content={"8"}
            onClick={() => setResult(calculate(result, "8"))}
          />
          <Button
            type={1}
            content={"9"}
            onClick={() => setResult(calculate(result, "9"))}
          />
          <Button
            type={2}
            content={<FaXmark />}
            onClick={() => setResult(calculate(result, "x"))}
          />

          <Button
            type={1}
            content={"4"}
            onClick={() => setResult(calculate(result, "4"))}
          />
          <Button
            type={1}
            content={"5"}
            onClick={() => setResult(calculate(result, "5"))}
          />
          <Button
            type={1}
            content={"6"}
            onClick={() => setResult(calculate(result, "6"))}
          />
          <Button
            type={2}
            content={<FaMinus />}
            onClick={() => setResult(calculate(result, "-"))}
          />
          <Button
            type={1}
            content={"1"}
            onClick={() => setResult(calculate(result, "1"))}
          />
          <Button
            type={1}
            content={"2"}
            onClick={() => setResult(calculate(result, "2"))}
          />
          <Button
            type={1}
            content={"3"}
            onClick={() => setResult(calculate(result, "3"))}
          />
          <Button
            type={2}
            content={<FaPlus />}
            onClick={() => setResult(calculate(result, "+"))}
          />
          <Button
            type={1}
            content={<FaPlusMinus />}
            onClick={() => setResult(calculate(result, "+/-"))}
          />
          <Button
            type={1}
            content={"0"}
            onClick={() => setResult(calculate(result, "0"))}
          />
          <Button
            type={1}
            content={"."}
            onClick={() => setResult(calculate(result, "."))}
          />
          <Button
            type={3}
            content={<FaEquals />}
            onClick={() => setResult(calculate(result, "="))}
          />
        </div>
      </div>
    </section>
  );
}

export default Calculator;
