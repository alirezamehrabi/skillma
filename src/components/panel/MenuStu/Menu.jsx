import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SSRProvider } from "react-bootstrap";
import men from "../../../../styles/panel/Menu.module.css"
import { useRouter } from "next/router";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Menu = () => {
    return (
        <SSRProvider>
              <Navigation />
              <MobileNavigation />
        </SSRProvider>
    )
}
export default Menu;