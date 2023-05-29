import MainLayout from "@app/components/layouts/MainLayout";
import { Table } from "antd";
import { getEmployees } from "@app/api/profile";
import { Carousel } from "antd";
export interface recordUser {
  id: string;
  name: string;
  pantone_value: string;
  year: string;
}

type EmployeeProps = {
  data: recordUser[];
};
const contentStyle: React.CSSProperties = {
  height: "260px",
  color: "#fff",
  lineHeight: "260px",
  textAlign: "center",
  background: "#364d79",
};

export default function Home(data: EmployeeProps): JSX.Element {
  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
      render: (_: unknown, record: recordUser) => <div>{record?.id}</div>,
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      render: (_: unknown, record: recordUser) => <div>{record?.name}</div>,
    },
    {
      title: "Salary",
      dataIndex: "Salary",
      key: "Salary",
      render: (_: unknown, record: recordUser) => (
        <div>{record?.pantone_value}</div>
      ),
    },
    {
      title: "Age",
      dataIndex: "Age",
      key: "Age",
      render: (_: unknown, record: recordUser) => <div>{record?.year}</div>,
    },
  ];

  return (
    <MainLayout>
      <Carousel autoplay dotPosition="bottom">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <Table
        columns={columns}
        key="tableEmployees"
        rowKey={(obj) => obj.id}
        dataSource={data.data}
      />
    </MainLayout>
  );
}

//
export async function getStaticProps() {
  const data = await getEmployees();

  return {
    props: { data },
  };
}
