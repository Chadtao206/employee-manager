import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Table from "../components/Table";
import { getEmployees } from "../utils/API";
export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then((data) => setEmployees(data.results));
  }, []);

  return (
    <>
      <Text textAlign={"center"} size="30px" fontFamily={"sans-serif"}>
        YOUR EMPLOYEES
      </Text>
      <Table employees={employees} />
    </>
  );
}
