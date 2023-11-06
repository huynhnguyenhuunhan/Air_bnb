import { Footer, Header } from "components/ui";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ViTri } from "types";
interface ParentProps {
  LocationHeader: ViTri[];
  type: string;
}
export const MainLayout: React.FC<ParentProps> = ({ LocationHeader, type }) => {
  return (
    <>
      <MainLayoutX>
        <Header LocationHeader={LocationHeader} type={type} />
        <Outlet />
        <Footer />
      </MainLayoutX>
    </>
  );
};

export default MainLayout;

const MainLayoutX = styled.div`
  .section_heading {
    color: #000;
    font-size: 30px;
    font-weight: 700;
  }
  .section_container {
    font-family: "Montserrat", sans-serif;
    max-width: 1300px;
    margin: auto;
  }
  .button_underline {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: inherit;
    }
  }
`;
