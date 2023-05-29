import { Users } from "@app/model/Users.model";
import { Form, Radio, Input, Button } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "fb/clientApp";
import BlankLayout from "@layouts/BlankLayout";
import { addData } from "@fb/connectFb";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ChangeEvent, useState } from "react";
import avatar from "../../assets/images/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { Image as Image1 } from "antd";

const position = [
  {
    id: 1,
    value: "Admin",
    label: "Admin",
  },
  {
    id: 2,
    value: "User",
    label: "User",
  },
];

export default function SignupPage(): JSX.Element {
  const [imageAvatar, setImageAvatar] = useState("");
  console.log(imageAvatar);

  const handleSubmit = (values: Users) => {
    console.log(values);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const router = useRouter();
    if (typeof window !== "undefined") {
      createUserWithEmailAndPassword(auth, values.username, values.password)
        .then((userCredential) => {
          console.log(userCredential);
          // Signed in
          addData(
            { ...values, avatar: imageAvatar },
            "Accounts",
            userCredential.user.uid
          );
          // router.push("/");
        })
        .catch((error) => {
          const errorCode = error;
          const errorMessage = error.message;
          console.log("errorCode", errorCode);
          console.log("errorMessage", errorMessage);
          // ..
        });
    }
  };
  const storage = getStorage();
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event) {
      return;
    }

    const inputElement = event.target as HTMLInputElement;
    if (!inputElement.files || inputElement.files.length === 0) {
      return;
    }

    const file = inputElement.files[0];
    console.log(file);

    try {
      const storageRef = ref(storage, "profile/" + file.name);
      uploadBytes(storageRef, file);
      console.log("File uploaded successfully.");
      getDownloadURL(storageRef)
        .then((url) => {
          setImageAvatar(url);
        })
        .catch((error) => {
          console.error("Error getting image URL:", error);
        });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <BlankLayout>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <h1 className="title-form">Signup</h1>
        <Form.Item>
          <div className="flex justify-content">
            <div className="flex flex-direction wrapper-avatar">
              <input
                type="file"
                className="input-file"
                onChange={handleFileUpload}
              />
              {imageAvatar ? (
                <Image1 src={imageAvatar} className="img-avatar" alt="avatar" />
              ) : (
                <Image src={avatar} alt="ava" width={200} height={200} />
              )}
            </div>
          </div>
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Position"
          name="position"
          rules={[
            {
              required: true,
              message: "Please input your position!",
            },
          ]}
        >
          <Radio.Group options={position} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Link className="text-center" href="/login">
          Move to login page!
        </Link>
      </Form>
    </BlankLayout>
  );
}
