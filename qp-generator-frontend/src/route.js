import QPGenerate from "./Views/qp-generator";
import QP from "./Components/QP";
import BloomLogic from "./Components/BloomLogic";
import Help from "./Components/Help";

const Routes = [
  {
    path: "/questionPaper",
    name: "QP",
    component: QP,
  },
  {
    path: "/bloomLogic",
    name: "bloomLogic",
    component: BloomLogic,
  },
  {
    path: "/help",
    name: "help",
    component: Help,
  },
  {
    path: "/",
    name: "createQP",
    component: QPGenerate,
  },
];

export default Routes;
