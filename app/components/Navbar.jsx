"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/Logo.png";
import ConnectWalletModal from "./ConnectWalletModal";

function Navbar({ wallet }) {
  const pages = [
    !wallet && {
      name: "Home",
      href: "/",
    },
    {
      name: "Raffles",
      href: "/raffles",
    },
    {
      name: "NFT Raffles",
      href: "/nft-raffles",
    },
  ].filter(Boolean);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const closeWallet = () => {
    setIsOpen(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "none",
        boxShadow: "none",
      }}
      className="md:px-20 py-5"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            sx={{
              flexGrow: { xs: 1, md: 0 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={Logo} alt="Logo" width={40} height={40} />
          </Box>

          {/* Desktop Menu Items */}
          <Box
            sx={{
              flexGrow: wallet ? 1 : 1,
              display: { xs: "none", md: "flex" },
              justifyContent: wallet ? "flex-start" : "center",
              marginLeft: wallet ? 2 : 0,
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.href}
                onClick={handleCloseNavMenu}
                href={page.href}
                className="font-semibold mx-2"
              >
                {page.name}
              </Link>
            ))}
          </Box>

          {/* Connect Wallet Button */}
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <button
              className="font-semibold text-[12px] md:text-[16px] py-2 px-4 md:py-3 border-white border-2 rounded-full mx-2"
              onClick={() => setIsOpen(true)}
            >
              {!wallet
                ? "Connect Wallet"
                : "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16".slice(
                    0,
                    6
                  ) +
                  "..." +
                  "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16".slice(
                    -3
                  )}
            </button>

            {/* Mobile Menu Icon */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.href} onClick={handleCloseNavMenu}>
                <Link className="font-semibold" href={page.href}>
                  {page.name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
      <ConnectWalletModal isOpen={isOpen} onClose={closeWallet} />
    </AppBar>
  );
}

export default Navbar;
