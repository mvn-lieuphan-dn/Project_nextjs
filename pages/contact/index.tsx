import MainLayout from "@app/components/layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <div className="orbit page-demo">
        <ul className="items item-fade">
          <li className="item item1">
            <i className="bi-file-bar-graph" />
            <p>Analytics & Reporting</p>
          </li>
          <li className="item item2">
            <i className="bi-calendar" />
            <p>Time & Attendance</p>
          </li>
          <li className="item item3">
            <i className="bi-person" />
            <p>Onboarding</p>
          </li>
          <li className="item item4">
            <i className="bi-fingerprint" />
            <p>HR Information System</p>
          </li>
          <li className="item item5">
            <i className="bi-boombox" />
            <p>Leaves & Holidays</p>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
}
