import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface InteractionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const InteractionPopup: React.FC<InteractionPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (!isOpen) return null;

  const onSubmit = (data: any) => {
    console.log("Form Submitted", data);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-200/20 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white p-6 rounded-2xl shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-gray-800 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center text-sm mt-1">
          Login to continue
        </p>

        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full mt-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <button
            type="submit"
            className="w-full mt-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-500">
          or sign in with
        </div>
        <div className="flex justify-center gap-4 mt-3">
          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-xl" />
          </button>
          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <FontAwesomeIcon icon={faApple} className="text-black text-xl" />
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          By signing in, you agree to our{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default InteractionPopup;
