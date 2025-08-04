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
      numberTwo || (operation === "÷" || operation === "x" ? "1" : "0")
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

    // 1/x - nghịch đảo
    if (buttonName === "1/x") {
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
    <section className="min-h-screen center-flex pt-20">
      <div className="max-w-[400px] w-[95%] flex gap-4 flex-col bg-gray-950 p-6 rounded-xl border border-[theme(--primary-light)] shadow-[0_0_5px_theme(--primary-light)]">
        <h1 className="uppercase text-2xl font-bold ">{t("title")}</h1>
        <div className="w-full aspect-[3/1] p-4 bg-black border border-gray-700 rounded-lg flex flex-col">
          <div className="h-2/5 flex items-center">
            <p className="w-full overflow-x-auto text-right text-base font-light text-gray-400">
              {result.previousValue} {result.operation}
            </p>
          </div>
          <div className="h-3/5 flex items-center">
            <p className="w-full text-4xl font-bold text-white overflow-x-auto text-right">
              {result.currentValue}
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-2">
          <button
            onClick={() => setResult(calculate(result, "%"))}
            className="center-flex aspect-[1.5/1] bg-gray-800 hover:bg-gray-900 rounded-lg cursor-pointer select-none"
          >
            <FaPercent />
          </button>
          <button
            onClick={() => setResult(calculate(result, "CE"))}
            className="center-flex aspect-[1.5/1] bg-gray-800 hover:bg-gray-900 rounded-lg cursor-pointer select-none"
          >
            CE
          </button>
          <button
            onClick={() => setResult(calculate(result, "C"))}
            className="center-flex aspect-[1.5/1] bg-gray-800 hover:bg-gray-900 rounded-lg cursor-pointer select-none"
          >
            C
          </button>
          <button
            onClick={() => setResult(calculate(result, "<="))}
            className="center-flex aspect-[1.5/1] bg-gray-800 hover:bg-gray-900 rounded-lg cursor-pointer select-none"
          >
            <FaBackspace />
          </button>
          <button
            onClick={() => setResult(calculate(result, "1/x"))}
            className="center-flex aspect-[1.5/1] bg-gray-800 hover:bg-gray-900 rounded-lg cursor-pointer select-none"
          >
            1/x
          </button>
          <button
            onClick={() => setResult(calculate(result, "x²"))}
            className="center-flex aspect-[1.5/1] bg-gray-800 hover:bg-gray-900 rounded-lg cursor-pointer select-none"
          >
            x²
          </button>
          <button
            onClick={() => setResult(calculate(result, "√x"))}
            className="center-flex aspect-[1.5/1] bg-gray-800 hover:bg-gray-900 rounded-lg cursor-pointer select-none"
          >
            √x
          </button>
          <button
            onClick={() => setResult(calculate(result, "÷"))}
            className="center-flex aspect-[1.5/1] bg-gray-800 hover:bg-gray-900 rounded-lg cursor-pointer select-none"
          >
            <FaDivide />
          </button>
          <button
            onClick={() => setResult(calculate(result, "7"))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            7
          </button>
          <button
            onClick={() => setResult(calculate(result, "8"))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            8
          </button>
          <button
            onClick={() => setResult(calculate(result, "9"))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            9
          </button>
          <button
            onClick={() => setResult(calculate(result, "x"))}
            className="center-flex aspect-[1.5/1] bg-gray-800 hover:bg-gray-900 rounded-lg cursor-pointer select-none"
          >
            <FaXmark />
          </button>
          <button
            onClick={() => setResult(calculate(result, "4"))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            4
          </button>
          <button
            onClick={() => setResult(calculate(result, "5"))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            5
          </button>
          <button
            onClick={() => setResult(calculate(result, "6"))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            6
          </button>
          <button
            onClick={() => setResult(calculate(result, "-"))}
            className="center-flex aspect-[1.5/1] bg-gray-800 hover:bg-gray-900 rounded-lg cursor-pointer select-none"
          >
            <FaMinus />
          </button>
          <button
            onClick={() => setResult(calculate(result, "1"))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            1
          </button>
          <button
            onClick={() => setResult(calculate(result, "2"))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            2
          </button>
          <button
            onClick={() => setResult(calculate(result, "3"))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            3
          </button>
          <button
            onClick={() => setResult(calculate(result, "+"))}
            className="center-flex aspect-[1.5/1] bg-gray-800 hover:bg-gray-900 rounded-lg cursor-pointer select-none"
          >
            <FaPlus />
          </button>
          <button
            onClick={() => setResult(calculate(result, "+/-"))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            <FaPlusMinus />
          </button>
          <button
            onClick={() => setResult(calculate(result, "0"))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            0
          </button>
          <button
            onClick={() => setResult(calculate(result, "."))}
            className="center-flex aspect-[1.5/1] bg-gray-700 hover:bg-gray-800 rounded-lg cursor-pointer select-none"
          >
            .
          </button>
          <button
            onClick={() => setResult(calculate(result, "="))}
            className="center-flex aspect-[1.5/1] bg-blue-700 hover:bg-blue-800 rounded-lg cursor-pointer select-none"
          >
            <FaEquals />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
