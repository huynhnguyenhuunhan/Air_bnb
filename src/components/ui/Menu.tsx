import { Menu as MenuA, MenuProps } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
type MenuOject = {
  (props: MenuProps): JSX.Element;
  Item: typeof MenuItem;
  //   Submenu: React.FC<SubMenuProps>;
};
export const Menu: MenuOject = (props) => {
  return <MenuA {...props} />;
};
Menu.Item = MenuA.Item;
// Menu.SubMenu = MenuA.SubMenu;

export default Menu;
