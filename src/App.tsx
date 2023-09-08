import './App.css';
import React, {useEffect, useState} from 'react';

type Employee = {
	name: string;
	salary: number;
}

function App() {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [lastEmploye, setlastEmployee] = useState<Employee>({name: "Not defined", salary: 0});

	useEffect(() => {
		const outputNumberOfEmployees = parseInt(prompt("Numero de empleados", "0")!)

		const newEmployees = getNewEmployees(outputNumberOfEmployees);

		const sortedEmployees = newEmployees.sort((a: Employee,b: Employee) => a.salary - b.salary)

		const newLastEmployee = sortedEmployees.slice(-1)[0];

		setEmployees(sortedEmployees);
		setlastEmployee(newLastEmployee)
	}, []);



  return (
    <div >
			<h2>Lista de empleados en orden</h2>
      <table>
				<tr>
					<th>Nombre</th>
					<th>Salario</th>
				</tr>
				{employees.map(employee => <tr key={`${employee.name}${employee.salary}`}><td>{employee.name}</td><td>{employee.salary}</td></tr>)}
			</table>
			
			<br />

			<h2>El empleado que más gana es:</h2>
			<h3>Nombre: {lastEmploye.name} - Salario: {lastEmploye.salary} {lastEmploye.salary > 5_000_000 && `después de descuento de retención en la fuene le quedan ${lastEmploye.salary * 0.9}`}</h3>
    
			<br />

			<h2>Total Nomina</h2>
			<h3>{employees.reduce((acummulator, currentValue) => acummulator + currentValue.salary, 0 )}</h3>
		</div>
  );
}

function getNewEmployees(outputNumberOfEmployees: number): Employee[] {
	let newEmployees:Employee[] = [];

	for(let i=0; i < outputNumberOfEmployees; i++) {
		const name = prompt("Ingrese el nombre:", "No definido")!;
		const salary = parseInt(prompt("Ingrese salario", "0")!);

		const tempEmployee = { name, salary};
		newEmployees.push(tempEmployee);
	}

	return newEmployees;
}

export default App;
