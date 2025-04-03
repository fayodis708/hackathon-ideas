// A simple example to demonstrate how to use T-SQL for a basic data manipulation task.
// This example shows how to select data from a table and perform some basic operations like filtering.

using System;
using System.Collections.Generic;

class Program {
    static void Main(string[] args) {
        // Define the name of the table
        string tableName = "Employees";
        
        // Create a list to store the selected rows
        List<Employee> selectedRows = new List<Employee>();
        
        // Select data from the specified table
        using (var cmd = new SqlCommand($"SELECT * FROM {tableName}")) {
            using (var reader = cmd.ExecuteReader()) {
                while(reader.Read()) {
                    Employee employee = new Employee();
                    employee.Name = reader.GetString(0);
                    employee.Age = reader.GetInt32(1);
                    employee.Position = reader.GetString(2);

                    selectedRows.Add(employee);
                }
            }
        }

        // Display the first 5 rows of the result
        Console.WriteLine("Selected Employees:");
        foreach(var emp in selectedRows) {
            Console.WriteLine($"Name: {emp.Name}, Age: {emp.Age}, Position: {emp.Position}");
        }

        // Close the reader and command to free resources
    }
}

class Employee {
    public string Name { get; set; }
    public int Age { get; set; }
    public string Position { get; set; }
}
