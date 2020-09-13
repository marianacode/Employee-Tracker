const connection = require("./connect")

class Database {
    constructor(connection) {
        this.connection = connection;
    }
    allEmplFunc() {
        return this.connection.query(
            "SELECT employee.id AS Employee_id, employee.first_name AS First_Name, employee.last_name AS Last_Name, role.title AS Role_Title, department.name AS Department, role.salary AS Salary, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager FROM employees_DB.employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
            );
    }
    allDptFunc() {
        return this.connection.query(
            "SELECT department.id AS Dpt_id, department.name AS Department, SUM(role.salary) AS Aggregate_Salary FROM employees_DB.department LEFT JOIN role on role.department_id = department.id LEFT JOIN employee on employee.role_id = role.id GROUP BY department.id, department.name;"
            );
    }
    allRolesFunc(){
        return this.connection.query(
            "SELECT department.id AS Dpt_id, department.name AS Department, role.id AS Role_id, role.title AS Role_title, role.salary AS Salary FROM role LEFT JOIN department on role.department_id = department.id ORDER by department;"
            );
    }
    newDptFunc(dpt){
        return this.connection.query("INSERT INTO department SET ?", dpt);
    }
    newEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    }
    newRoleFunc(newRole) {
        return this.connection.query("INSERT INTO role SET ?", newRole);
    }
    deleteRole(role_id) {
        return this.connection.query("DELETE FROM role WHERE id = ?", role_id);
    }
    deleteDpt(dptId) {
        return this.connection.query("DELETE FROM department WHERE id = ?", dptId);
    }
    deleteEmployee(empId){
        return this.connection.query("DELETE FROM employee WHERE id = ?", empId);
    }
    updtEmpRole(updtRoleId, updtManId, emplId) {
        return this.connection.query("UPDATE employee SET role_id = ?, manager_id = ? WHERE id = ?;", [updtRoleId, updtManId, emplId]);
    }
    updtManager(updtManId, emplId){
        return this.connection.query("UPDATE employee SET manager_id = ? WHERE id = ?;", [updtManId, emplId]);
    }
}
module.exports = new Database(connection);