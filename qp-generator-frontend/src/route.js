import QPGenerate from "./Views/qp-generator";
import QP from "./Views/QP";
import BloomLogic from "./Views/BloomLogic";
import Help from "./Views/Help";

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
