export default function createIteratorObject(report) {
  const employeeId = [];
  for (const value of Object.values(report.allEmployees)) {
    employeeId.push(...value);
  }
  return employeeId;
}
