import MainLayout from "@app/components/layouts/MainLayout";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect } from "react";

export default function Profile() {
  const getFacts = async () => {
    const db = await axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.data.data);
    console.log(db);

    return db;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getFacts,
  });
  console.log(data);

  return (
    <MainLayout>
      {error && <div>Request Failed</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <div>
          <h1>Random Fact:</h1>
        </div>
      )}
    </MainLayout>
  );
}
