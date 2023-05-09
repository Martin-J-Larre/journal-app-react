import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { CheckingAuth } from "../ui/";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  console.log(status);
  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
