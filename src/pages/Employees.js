import { Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Table from "../components/Table";
import { getEmployees } from "../utils/API";
export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const reminder = useToast();

  useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(data.results);
      reminder({
        title: "Employees Loaded!",
        description: `Successfully Loaded ${data.results.length} Employees 🥂!`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    });
  }, [reminder]);

  return (
    <>
      <Text textAlign={"center"} size="30px" fontFamily={"sans-serif"}>
        YOUR EMPLOYEES
      </Text>
      <Table employees={employees} />
    </>
  );
}
