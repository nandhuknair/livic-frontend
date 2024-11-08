"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import nameLogo from "../../assets/og_black_logo_name.png";
import onlyLogo from "../../assets/logo_only.png";
import {
  TextAlignLeftIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  PersonIcon,
  ArchiveIcon,
} from "@radix-ui/react-icons";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    "NEW ARRIVALS",
    "BEST SELLING",
    "LIVIC LUXE",
    "LIVIC PLUS",
    "SHOP",
    "ABOUT US",
    "CONTACT",
  ];
  const shopItems = ["T-Shirt", "Pant", "Jeans", "Shirt", "Normal", "Casual"];

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <TextAlignLeftIcon
            className="h-8 w-10 hover:cursor-pointer"
            onClick={toggleMenu}
          />
          <Link to="/" className="text-2xl ">
            <img src={onlyLogo} className="h-12" alt="logo" />
          </Link>
          <div className="flex gap-4 items-center"> 
            <HeartIcon className=" h-5 w-5 hover:cursor-pointer" />
            <MagnifyingGlassIcon className="h-6 w-6 hover:cursor-pointer" />
            <PersonIcon className=" h-5 w-5 hover:cursor-pointer" />
            <ArchiveIcon className=" h-5 w-5 hover:cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 overflow-y-auto"
          >
            <div className="relative w-full min-h-full flex flex-col ">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-black hover:bg-gray-100"
                aria-label="Close Menu"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Logo */}
              <div className="pt-20 px-8 justify-center mr-16 mt-8 hidden sm:flex">
                <img src={nameLogo} alt="logo" className="md:w-40 w-28" />
              </div>

              {/* Navigation Links */}
              <nav className="h-80  flex items-center justify-center mt-36 md:mt-0">
                <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-4 lg:gap-14">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      {item === "SHOP" ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="text-gray-800 text-xl md:text-xl lg:text-3xl hover:text-gray-600 transition-colors"
                            >
                              {item} <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            {shopItems.map((shopItem) => (
                              <DropdownMenuItem key={shopItem}>
                                <Link
                                  to={`/shop/${shopItem
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="w-full text-gray-800 hover:text-gray-600 transition-colors"
                                  onClick={toggleMenu}
                                >
                                  {shopItem}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link
                          to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-gray-800 text-xl md:text-xl lg:text-3xl hover:text-gray-600 transition-colors"
                          onClick={toggleMenu}
                        >
                          {item}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Contact Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center fixed bottom-0 right-0 md:text-right p-8"
              >
                <p className="text-gray-600 text-sm">info@livicco.com</p>
                <p className="text-gray-600 text-sm">+1 (877) 875 5557</p>
              </motion.div>

              {/* Gradient Effect */}
              <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-blue-600 via-pink-800 to-transparent opacity-30 blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
