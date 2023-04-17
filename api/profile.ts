import { api } from "@api/api";
import { Employees } from "@app/model/Employees.model";
export function getEmployees() {
  return api
    .get("/employees")
    .then((res) => res.data.data)
    .catch((err) => console.error(err));
}

export function createEmployees(employee: Employees) {
  return api
    .post("/employees", employee)
    .then((res) => res.data.data)
    .catch((err) => console.error(err));
}

export function updateEmployees(id: string, employee: Employees) {
  return api
    .put(id, employee)
    .then((res) => res.data.data)
    .catch((err) => console.error(err));
}

export function deleteEmployee(id: string) {
  return api.delete(`/employees/${id}`).catch((err) => console.log(err));
}
