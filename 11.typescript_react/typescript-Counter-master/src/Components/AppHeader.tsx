import React from "react";

interface Header {
  label?: string;
}
const Header = ({ label = "Counter" }: Header) => {
  return (
    <>
      <h3>{label}</h3>
    </>
  );
};

export default Header;
