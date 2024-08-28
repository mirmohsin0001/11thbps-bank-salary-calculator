import React from "react";

function SalaryInput({ onSalaryChange, basicSalary, onDaRateChange, daRate }) {
  const handleSelectChange = (event) => {
    onSalaryChange(parseFloat(event.target.value));
  };

  return (
    <div className="form-group">
      <label htmlFor="basic-salary" className="fw-bold mb-2">
        Select Stage:
      </label>

      <select
        id="basic-salary"
        className="form-control form-select"
        onChange={handleSelectChange}
        value={basicSalary} // Set initial selected value
      >
        <option value="17900">Stage 1 (₹17,900)</option>
        <option value="18900">Stage 2 (₹18,900)</option>
        <option value="19900">Stage 3 (₹19,900)</option>
        <option value="20900">Stage 4 (₹20,900)</option>
        <option value="22130">Stage 5 (₹22,130)</option>
        <option value="23360">Stage 6 (₹23,360)</option>
        <option value="24590">Stage 7 (₹24,590)</option>
        <option value="26080">Stage 8 (₹26,080)</option>
        <option value="27570">Stage 9 (₹27,570)</option>
        <option value="29060">Stage 10 (₹29,060)</option>
        <option value="30550">Stage 11 (₹30,550)</option>
        <option value="32280">Stage 12 (₹32,280)</option>
        <option value="34010">Stage 13 (₹34,010)</option>
        <option value="35740">Stage 14 (₹35,740)</option>
        <option value="37470">Stage 15 (₹37,470)</option>
        <option value="39200">Stage 16 (₹39,200)</option>
        <option value="40930">Stage 17 (₹40,930)</option>
        <option value="42660">Stage 18 (₹42,660)</option>
        <option value="45930">Stage 19 (₹45,930)</option>
        <option value="47920">Stage 20 (₹47,920)</option>
        
      </select>
      
      <label htmlFor="da-rate" className="fw-bold mt-3 mb-2">
        DA Rate (in %):
      </label>{" "}
      {/* Label change */}
      <input
        type="number" // Ensure type is "number"
        step="0.01" // Allow decimal values
        id="da-rate"
        placeholder="Enter DA Rate (e.g., 15.73)"
        onChange={onDaRateChange}
        className="form-control"
        value={daRate} // Display DA rate as percentage
      />
    </div>
  );
}

export default SalaryInput;
