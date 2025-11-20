import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const WAVE_IMG = "/shapes/wave.png";
const CIRCLE_IMG = "/shapes/circle.png";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="bg-primary h-[50vh] relative">
        <img src={CIRCLE_IMG} alt="" className="absolute top-0 right-0 " />
        <img src={WAVE_IMG} alt="" className="absolute -left-8 top-30" />
        <img src={WAVE_IMG} alt="" className="absolute right-0 bottom-10" />
      </div>

      <div className="flex flex-col gap-4 h-[50vh] py-6 max-w-2xl md:text-center mx-auto px-6">
        <h2 className="">Manage What To Do</h2>
        <p className="text-muted-foreground md:text-base">
          The best way to manage what you have to do, don't forget your plans
        </p>

        <Button className="mt-4 py-3" onClick={() => navigate("/main")}>
          Get Started
        </Button>
      </div>
    </div>
  );
}
