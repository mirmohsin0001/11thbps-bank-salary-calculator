import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

function SalaryBreakdown({ basicSalary, daRate }) {
  // Salary calculations
  const DA = isNaN(basicSalary) ? 0 : basicSalary * daRate;
  const TA = 0.04 * basicSalary;
  const specialGradeAllowance = (16.4 / 100) * basicSalary * (1 + daRate);
  const HRA = (10.25 / 100) * basicSalary;
  const lunch = 480;
  const risk = 400;

  const grossSalary =
    basicSalary + DA + HRA + specialGradeAllowance + TA + lunch + risk;

  const nps = (10 / 100) * (basicSalary + DA);
  const netSalary = grossSalary - nps;

  // Chart data
  const chartData = [
    { name: "Basic Salary", value: basicSalary, color: "#0088FE" },
    { name: "DA", value: DA, color: "#9966FF" },
    { name: "SGA", value: specialGradeAllowance, color: "#00C49F" },
    { name: "HRA", value: HRA, color: "#FF8042" },
    { name: "TA", value: TA, color: "#FFBB28" },
    { name: "Lunch", value: lunch, color: "#66FFCC" },
    { name: "Risk", value: risk, color: "#FFD700" },
  ];

  return (
    <>
      <div className="mt-3">
        <div className="mt-3">
          <p className="mb-0">
            Basic Salary:
            <span className="float-end"> {basicSalary.toFixed(0)}</span>
          </p>

          <p className="mb-0">
            Dearness Allowance:
            <span className="float-end"> {DA.toFixed(0)}</span>
          </p>

          <p className="mb-0">
            Hill & Fuel Allowance:{" "}
            <span className="float-end">{TA.toFixed(0)}</span>
          </p>

          <p className="mb-0">
            Special Grade Allowance:{" "}
            <span className="float-end">
              {specialGradeAllowance.toFixed(0)}
            </span>
          </p>

          <p className="mb-0">
            House Rent Allowance:{" "}
            <span className="float-end">{HRA.toFixed(0)}</span>
          </p>

          <p className="mb-0">
            Lunch Allowance:{" "}
            <span className="float-end">{lunch.toFixed(0)}</span>
          </p>

          <p className="mb-0">
            Risk Allowance: <span className="float-end">{risk.toFixed(0)}</span>
          </p>

          <p className="mb-3 fw-bold">
            Gross Pay:{" "}
            <span className="float-end">{grossSalary.toFixed(0)}</span>
          </p>

          <p className="mb-0">
            NPS: <span className="float-end">{nps.toFixed(0)}</span>
          </p>
          <p className="mb-0 fw-bold">
            Net Pay:<span className="float-end"> {netSalary.toFixed(0)}</span>
          </p>
        </div>
      </div>

      <div className="my-5 ">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              // labelLine={false}
              paddingAngle={5}
              innerRadius={50}
              label={(entry) => entry.value.toFixed(0)}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip formatter={(value) => value.toFixed(0)} />

            <Legend
              align="center"
              verticalAlign="bottom"
              layout="horizontal"
              iconSize={10}
              wrapperStyle={{ fontSize: "10px" }}
              formatter={(value) => (
                <span style={{ color: "black" }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-0 pb-1">
        <p className="text-muted fst-italic pb-5">
          DA calculated @ {(daRate * 100).toFixed(2)}%, HRA @ 10.25%, SGA @
          16.4% (plus DA thereon), Lunch Allowance @ 20/day (24 days taken for ref) and NPS @ 10% of (Basic + DA)
        </p>
      </div>
    </>
  );
}

export default SalaryBreakdown;
