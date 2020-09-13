INSERT INTO department (name)
VALUES 
    ("Finance"), 
    ("SCM"), 
    ("Marketing"), 
    ("Engineering"), 
    ("Sales");

INSERT INTO role 
    (title, salary, department_id)
VALUES 
    ("Account Manager", 150000, 1),
    ("Accountant", 100000, 1),
    ("Head of SCM", 160000, 2),
    ("Import Specialist", 120000, 2),
    ("Logistic Specialist", 100000, 2),
    ("Director of Marketing", 145000, 3),
    ("Marketing Assistant", 105000, 3),
    ("Engineering Manager", 175000, 4),
    ("Engineering Intern", 95000, 4),
    ("Engineer", 125000, 4),
    ("Sales Manager", 185000, 5),
    ("Sales Person", 115000, 5);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES 
    ("Tom", "Smith", 1, null), 
    ("Chris", "Green", 2, 1), 
    ("Ann", "Rouling", 3, null), 
    ("Victoria", "Bram", 4, 3), 
    ("Alice", "Grey", 5, 3),
    ("Bill", "Mount", 6, null),
    ("Greg", "Pouk", 7, 6),
    ("Leo", "Goldin", 8, null),
    ("Lissete", "Bio", 9, 8),
    ("Eddie", "Wu", 10, 8),
    ("Robert", "Preston", 11, null),
    ("Neo", "Anderson", 12, 11);


SELECT 
employee.id,
employee.first_name,
employee.last_name,
role.title,
department.name AS department,
role.salary,
CONCAT(manager.first_name, ' ', manager.last_name) AS manager
FROM employees_DB.employee 
LEFT JOIN role on employee.role_id = role.id 
LEFT JOIN department on role.department_id = department.id
LEFT JOIN employee manager on manager.id = employee.manager_id;