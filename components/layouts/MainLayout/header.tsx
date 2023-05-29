import { Menu, Col, Row } from "antd";
import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  HomeOutlined,
  ContactsOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useAuth from "@app/hooks/useAuth";
import Link from "next/link";
import Logo from "@app/assets/images/logo.png";
import Image from "next/image";

export default function Header() {
  const { isLogged, logout } = useAuth();

  const items: MenuProps["items"] = [
    {
      label: <Link href="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link href="/profile">Profile</Link>,
      key: "profile",
      icon: <ProfileOutlined />,
    },
    {
      label: <Link href="/contact">Contact</Link>,
      key: "SubMenu",
      icon: <ContactsOutlined />,
    },
    {
      label: isLogged ? (
        <a target="_blank" onClick={() => logout()}>
          Logout
        </a>
      ) : (
        <Link href="/login">Login</Link>
      ),
      key: "Logout",
      icon: isLogged ? <LogoutOutlined /> : <UserOutlined />,
    },
  ];
  return (
    <header className="container d-flex">
      <Row>
        <Col span={16}>
          <Link href="/">
            <Image src={Logo} className="img-logo" alt="logo" />
          </Link>
        </Col>
        <Col span={8}>
          <Menu
            mode="horizontal"
            items={items}
            className="justify-content-end"
          />
        </Col>
      </Row>
    </header>
  );
}
