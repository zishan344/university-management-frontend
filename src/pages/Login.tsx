import { FieldValues, useForm } from "react-hook-form";
import { Button } from "antd";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { TUser, setUser } from "../redux/feature/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import verifyToken from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">id</label>
          <input type="text" id="id" {...register("userId")} />
        </div>
        <div>
          <label htmlFor="pass">password</label>
          <input type="text" id="pass" {...register("password")} />
        </div>
        <Button htmlType="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
