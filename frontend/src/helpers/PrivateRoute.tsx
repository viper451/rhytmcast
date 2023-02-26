import { useKeycloak } from "@react-keycloak/web";
type BookProps = {
  children: any;
};

const PrivateRoute: React.FunctionComponent<BookProps> = (props) => {
  const { children } = props;
  const { keycloak } = useKeycloak();
  console.log(children);
  const isLoggedIn = keycloak.authenticated;
  console.log(isLoggedIn);

  return isLoggedIn ? children : null;
};

export default PrivateRoute;
