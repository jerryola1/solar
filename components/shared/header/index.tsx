"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/shared/header/theme-toggle"
import { MobileMenu } from "@/components/shared/header/mobile-menu"
import { motion } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  ChevronDown, 
  Sun,
  Wind,
  Leaf,
  Battery,
  LineChart,
  Settings,
  Shield,
  Building2,
  Home,
  Factory,
  CloudSun,
  Gauge,
  Lightbulb,
  Users
} from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function Header() {
  const navItems = [
    { 
      text: "Home",
      dropdownItems: [] // no dropdown for home
    },
    { 
      text: "Solutions",
      dropdownItems: [
        { text: "Solar Energy", icon: Sun },
        { text: "Wind Power", icon: Wind },
        { text: "Energy Storage", icon: Battery },
        { text: "Smart Monitoring", icon: Gauge }
      ]
    },
    { 
      text: "Features",
      dropdownItems: [
        { text: "Energy Analytics", icon: LineChart },
        { text: "Weather Forecasting", icon: CloudSun },
        { text: "System Integration", icon: Settings },
        { text: "Smart Grid", icon: Lightbulb },
        { text: "Data Security", icon: Shield }
      ]
    },
    { 
      text: "Use Cases",
      dropdownItems: [
        { text: "Residential", icon: Home },
        { text: "Commercial", icon: Building2 },
        { text: "Industrial", icon: Factory },
        { text: "Community Solar", icon: Users },
        { text: "Sustainability", icon: Leaf }
      ]
    },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl font-kode-mono">Alpha One Solutions</span>
        </div>
        <nav className="hidden md:flex-1 md:flex md:justify-center">
          <div className="flex items-center space-x-8 font-kode-mono">
            {navItems.map((item, i) => (
              <motion.div
                key={item.text}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.dropdownItems.length > 0 ? (
                  <HoverCard openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="text-base relative group flex items-center gap-1"
                      >
                        {item.text}
                        <ChevronDown className="h-4 w-4" />
                        <motion.div
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full"
                          transition={{ duration: 0.3 }}
                          whileHover={{ width: "100%" }}
                        />
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent 
                      className="w-56 bg-white dark:bg-gray-900 p-2"
                      align="center"
                      sideOffset={8}
                    >
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <motion.div
                          key={dropdownItem.text}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Button 
                            variant="ghost"
                            className="flex w-full items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md font-kode-mono text-sm"
                          >
                            <dropdownItem.icon className="h-4 w-4" />
                            {dropdownItem.text}
                          </Button>
                        </motion.div>
                      ))}
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <Button 
                    variant="ghost" 
                    className="text-base relative group"
                  >
                    {item.text}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full"
                      transition={{ duration: 0.3 }}
                      whileHover={{ width: "100%" }}
                    />
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="ghost" 
              className="text-base bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg"
            >
              Log in
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button 
              className="text-base bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md hover:shadow-xl transition-all duration-200"
            >
              Register
            </Button>
          </motion.div>
          <ThemeToggle />
        </div>
        {/* Mobile Controls */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
} 