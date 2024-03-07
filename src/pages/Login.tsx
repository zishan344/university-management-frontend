import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { Button, Row } from "antd";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { TUser, setUser } from "../redux/feature/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import verifyToken from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  /*   const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "admin123",
    },
  }); */
  const defaultValues = {
    userId: "A-0002",
    password: "admin123",
  };
  const [login] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in", { duration: 2000 });
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      //! console.log1(data);
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user?.role}/dashboard`);
    } catch (err) {
      toast.error(`something is wrong Error:${err}`, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type={"text"} name={"userId"} label={"ID "} />
        <PHInput type={"password"} name={"password"} label={"password "} />
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
