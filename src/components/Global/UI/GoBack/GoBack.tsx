import { useNavigate } from "react-router-dom";
import Button from "@/components/Global/UI/Buttons/Button/Button";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-3">
      <Button
        label="Go Back"
        type="button"
        variant="default"
        disabled={false}
        onClick={() => navigate(-1)}
        border="rounded"
      />
    </div>
  );
};

export default GoBack;
