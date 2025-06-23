"use client"

import { useState } from "react"
import { Github, ExternalLink, Mail, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Chess Game",
    description:
      "A 2 player chess game made in java.",
    longDescription:
      "A two-player chess game built with Java, enabling matches over a local network using Java Sockets. This game is designed specifically for human vs. human play within the same LAN. The project focuses on synchronized gameplay, valid move handling, and a responsive user interface.",
    image: "/chess/chess1.PNG?height=300&width=500",
    images: [
      "/chess/chess1.PNG?height=400&width=600",
      "/chess/chess2.PNG?height=400&width=600",
      "/chess/chess3.PNG?height=400&width=600",
    ],
    technologies: ["Java", "Sockets (TCP)"],
    features: [
      "Multiplayer only — two players connect over the same network",
      "Full chess rules support: check, checkmate, stalemate, etc.",
      "Clean interface with drag-and-drop piece movement and turn indication"
    ],
    githubUrl: "https://github.com/Albionii/ChessGame",
    liveUrl: "",
    duration: "4 months",
    role: "Java Developer",
  },
  {
    id: 2,
    title: "Student Management System",
    description:
      "A full-stack web app for managing students, professors, and courses. It includes role-based login for admins, students, and professors, and lets users manage grades, attendance, and enrollments.",
    longDescription:
      "This is a complete system for managing student data in a university-like environment. It was built using Java Spring Boot for the backend and React for the frontend. Users can log in as a student, professor, or admin — each with different features and access."
      + "Admins can manage users, courses, and assignments. Professors can view students, update grades, and track attendance. Students can see their enrolled courses, check grades, and follow their academic progress. The system includes secure login with token authentication, a modern and clean UI, and handles everything from user management to academic records."
      + "I’m especially proud of how the roles were separated and how smooth the login and data handling works across the platform.",
    image: "/ums/4.jpg?height=300&width=500",
    images: [
      "/ums/4.jpg/?height=400&width=600",
      "/ums/1.jpg/?height=400&width=600",
      "/ums/2.jpg/?height=400&width=600",
      "/ums/3.jpg/?height=400&width=600",
    ],
    technologies: ["Java (Spring Boot)", "React Vite", "MySQL", "REST API", "Tailwind CSS", "JWT"],
    features: [
      "Role-based authentication with separate dashboards for Admin, Professor, and Student",
      "Student management: enrollments, attendance, grades, and course history",
      "Professor dashboard: assign grades, manage courses, track student performance",
      "Admin panel: user management, course assignments, and academic structuring",
      "Secure login system with token-based authentication and protected routes",
      "Responsive UI with clean, modern design"
    ],
    githubUrl: "https://github.com/Albionii/Sistemi-per-Menaxhimin-e-Studenteve-dhe-Lendeve",
    liveUrl: "",
    duration: "4 months",
    role: "Full Stack Developer",
  },
  {
    id: 3,
    title: "Student Attendance Module with Arduino",
    description:
      "A smart attendance module using Arduino Uno and NFC cards. Students scan their cards, and the system checks them in through WebSocket and updates attendance instantly.",
    longDescription:
      "This project is a real-time attendance system that I built as a module for the Student Management System. It uses an Arduino Uno and NFC card reader to let students check in by scanning their university cards."
      + "When a student scans their card, the Arduino sends the card ID to the backend through a WebSocket connection. The backend, built with Spring Boot and connected to a MySQL database, checks if the student exists. If the student is found, they are marked as present; if not, the Arduino plays a beep sound to signal that the scan failed."
      + "On the frontend (React), there's a dashboard that updates in real-time and shows successful or failed scan attempts. This replaced the need for manual attendance and made the process more accurate, fast, and secure.",
    image: "/arduino/1.jpeg?height=300&width=500",
    images: [
      "/arduino/1.jpeg?height=400&width=600",
      "/arduino/2.jpeg?height=400&width=600",
      "/arduino/3.jpeg?height=400&width=600",
      "/arduino/4.jpeg?height=400&width=600",
      "/arduino/5.jpeg?height=400&width=600",
      "/arduino/6.jpeg?height=400&width=600",
    ],
    technologies: ["Java (Spring Boot)", "C++", "React Vite", "MySQL", "Websocket"],
    features: [
      "Real-time attendance marking using NFC scan",
      "WebSocket communication between Arduino and backend",
      "Error feedback via Arduino buzzer for invalid scans",
      "Instant updates on the frontend UI",
      "Moduled for full integration with the larger Student Management System",
    ],
    githubUrl: "https://github.com/Albionii/Student-Attendance-Management",
    liveUrl: "",
    duration: "2.5 month",
    role: "Full Stack Developer",
  },
  {
    id: 4,
    title: "Autosallon Sara",
    description:
      "A simple car autosalon website where users can browse and rent cars, includes login for both users and admins.",
    longDescription:
      "This was a basic web platform made for a car dealership (autosallon). It allows users to view available cars, see their details, and make rental requests. The system includes a login system with two roles: normal users, who can browse and rent cars, and admins, who can manage listings and users, you could also view as guest with no account."
    + "The website was built using PHP for the backend, with HTML, CSS, and JavaScript on the frontend, and MySQL as the database. While the project was simple, it gave me good experience in working with user sessions, role-based access, and handling form data securely."
    + "It was one of my early full-stack projects and helped me understand the basics of building a complete CRUD system with login and roles.",
    image: "/autosallon/auto1.PNG?height=300&width=500",
    images: [
      "/autosallon/auto1.PNG?height=400&width=600",
      "/autosallon/auto2.PNG?height=400&width=600",
      "/autosallon/auto3.PNG?height=400&width=600",
    ],
    technologies: ["PHP", "HTML", "CSS", "Javascript", "MySQL"],
    features: [
      "Role-based login system (User & Admin)",
      "Smooth animations",
      "View and filter available cars",
      "Rent request system for logged-in users",
      "Admin panel for managing cars and users",
      "Basic CRUD operations",
    ],
    githubUrl: "",
    liveUrl: "",
    duration: "3.5 months",
    role: "Full Stack Developer",
  },
  // hej
  {
    id: 5,
    title: "Taxi Website Platform",
    description:
      "A full-stack taxi platform built with microservices, supporting real-time maps, live chat, and multiple user roles. Built with React, Spring Boot, PostgreSQL, and MongoDB.",
    longDescription:
      "This is a real-time taxi booking platform built using a microservices architecture. It supports four different roles: customer, potential driver, driver, and admin. Customers can book rides and see nearby drivers on a live map. Drivers get instant ride requests, while admins manage users, approve drivers, and monitor the system."
    + "The platform includes WebSocket-based features for real-time location updates and chat between driver and customer. We used Firebase Cloud Messaging to send instant ride notifications and status updates to users. Redis was used for session caching and improving performance, while data was hosted in the cloud to support scalability."
    + "The backend is built in Java with Spring Boot microservices, and the frontend uses React, Vite, and Tailwind CSS. We used PostgreSQL for structured data, MongoDB for chat history, and Docker to containerize services.",
    image: "/taxi-website/1.png?height=300&width=500",
    images: [
      "/taxi-website/1.png?height=400&width=600",
      "/taxi-website/2.png?height=400&width=600",
      "/taxi-website/3.png?height=400&width=600",
      "/taxi-website/4.png?height=400&width=600",
      "/taxi-website/5.png?height=400&width=600",
      "/taxi-website/6.png?height=400&width=600",
    ],
    technologies: ["Java (Spring Boot)","React Vite", "PostgreSQL", "MongoDB", "Redis", "Websocket", "Firebase", "Docker"],
    features: [
      "Role-based system: Customer, Driver, Potential Driver, Admin",
      "Real-time driver tracking on live map",
      "WebSocket-based chat between drivers and customers",
      "Firebase push notifications for ride updates",
      "Driver registration and approval system",
      "Secure login with session caching (Redis)",
      "Admin dashboard for platform management",
      "Cloud-hosted, scalable infrastructure"
    ],
    githubUrl: "",
    liveUrl: "",
    duration: "3 month",
    role: "Team project — worked on WebSocket communication, backend logic, and frontend integration of real-time features",
  },
  {
    id: 6,
    title: "Taxi mobile app",
    description:
      "A mobile app version of the taxi platform, built with React Native and connected to the same backend. It supports ride booking, real-time maps, chat, and notifications for both drivers and customers",
    longDescription:
      "This mobile app was developed as the mobile interface for the Taxi Booking Platform. It uses the same backend (built with Spring Boot microservices), and provides a native-like experience for both customers and drivers."
    + "The app lets customers book rides, track nearby drivers in real time, and chat with drivers through WebSocket. Drivers can receive ride requests, view customer locations, and respond directly in the app. Firebase push notifications are used to alert users instantly of ride updates and messages."
    + "The app is built using React Native, making it available for both Android and iOS. We used WebSocket for live location and messaging, and Firebase for notifications. The entire app is tightly integrated with the cloud-hosted backend, delivering smooth and fast performance.",
    image: "/taxi-mobile/1.jpg?height=300&width=500",
    images: [
      "/taxi-mobile/1.jpg?height=400&width=600",
      "/taxi-mobile/2.jpg?height=400&width=600",
      "/taxi-mobile/3.jpg?height=400&width=600",
      "/taxi-mobile/4.jpg?height=400&width=600",
      "/taxi-mobile/5.jpg?height=400&width=600",
      "/taxi-mobile/6.jpg?height=400&width=600",
      "/taxi-mobile/7.jpg?height=400&width=600",
    ],
    technologies: ["Java (Spring Boot)","React Native", "PostgreSQL", "MongoDB", "Redis", "Websocket", "Firebase", "Docker"],
    features: [
      "Role-based system: Customer, Driver, Potential Driver, Admin",
      "Real-time driver tracking on live map",
      "WebSocket-based chat between drivers and customers",
      "Firebase push notifications for ride updates",
      "Driver registration and approval system",
      "Secure login with session caching (Redis)",
      "Admin dashboard for platform management",
      "Cloud-hosted, scalable infrastructure"
    ],
    githubUrl: "",
    liveUrl: "",
    duration: "1.5 months",
    role: "Team project — developed mobile interface, handled WebSocket integration, backend, frontend and set up notification delivery",
  },
  {
    id: 7,
    title: "Fijet e Kujtesës",
    description:
      "A Unity build game based on Albanian culture and folktales",
    longDescription:
      "Fijet e Kujtesës is a game I have always wanted to make, it is only on alpha faze and needs a lot of refinement and changes."
      + "Struggles as indie are of course art and sound effects but with what I could found as free of use and copyright and some AI generated characters,"
      + "rest was done by and refined by me. In the game you move with A and D or arrows and jump with spacebar. You can intereact with E and see inventory with I,"
      + "which you can remove the element needed. Upon falling the game ends but I will later add healthbars and greater obstacles."
      + "Upon hosting sound effects are not working but it will be fixed on future updates.",
    image: "/fijet-e-kujteses/1.png?height=300&width=500",
    images: [
      "/fijet-e-kujteses/1.png?height=400&width=600",
      "/fijet-e-kujteses/2.png?height=400&width=600",
      "/fijet-e-kujteses/3.png?height=400&width=600",
      "/fijet-e-kujteses/4.png?height=400&width=600",
      "/fijet-e-kujteses/5.png?height=400&width=600",
      "/fijet-e-kujteses/6.png?height=400&width=600",
      "/fijet-e-kujteses/7.png?height=400&width=600",
    ],
    technologies: ["Unity", "C#"],
    features: [
      "Interact with objects and NPC's.",
      "Save items in the inventory.",
      "Move with arrow keys or A and D",
      "Sound effects that fit the albanian atmosphere."
    ],
    githubUrl: "https://github.com/Albionii/Fijet-e-Kujteses",
    liveUrl: "https://albionii.github.io/Fijet-e-Kujteses/",
    duration: "1.5 months",
    role: "Game Dev",
    ongoing: true
  },
  {
    id: 8,
    title: "E-Commerce",
    description:
      "Here is the most generic project in the most generic projects list, but it was a university project.",
    longDescription:
      "A rather repetitive project made for buying and selling products of different categories. Has many roles but you can also check products without an account"
    + "Two roles are implemented admin and user. The UI is rather simplistic but does its job.",
    image: "/e-commerce/1.png?height=300&width=500",
    images: [
      "/e-commerce/1.png?height=400&width=600",
      "/e-commerce/2.png?height=400&width=600",
      "/e-commerce/3.png?height=400&width=600",
      "/e-commerce/4.png?height=400&width=600",
      "/e-commerce/5.png?height=400&width=600",
    ],
    technologies: ["NextJS, Node", "MongoDB"],
    features: [
      "Role based authentication",
      "Buy or sell products",
      "Admin can view details and has CRUD access for users, products and more.",
      "Every product card opens to more details and all images of the product"
    ],
    githubUrl: "https://github.com/Albionii/E-Commerce",
    liveUrl: "https://e-commerce-six-mauve.vercel.app/",
    duration: "1 month",
    role: "Team project — Created the Admin panel and the testing of the components.",
  },
  {
    id: 9,
    title: "World of Algorithms",
    description:
      "An interactive algorithm visualization tool where users can explore how algorithms work through animated graphs, trees, and sorting steps. Built to make learning data structures easier and more visual.",
    longDescription:
      "World of Algorithms (WOA) is a custom-built platform designed to help users understand how algorithms work by visualizing them in real time. The goal was to make abstract concepts like trees, sorting, and graphs easier to grasp through animation and interaction."
    + "Users can pick an algorithm — such as DFS, BFS, Dijkstra, Merge Sort, or Binary Search Tree traversal — and see step-by-step how it executes on visual elements like nodes and connections. The animations clearly show which nodes are visited, how paths are explored, or how arrays get sorted."
    + "This project is yet to finish and only the graph part is done, but this project with indeed help in future me or maybe other students on visualising algorithms",

    image: "/woa/woa.png?height=300&width=500",
    images: [
      "/woa/4.png?height=400&width=600",
      "/woa/1.png?height=400&width=600",
      "/woa/2.png?height=400&width=600",
      "/woa/3.png?height=400&width=600",
    ],
    technologies: ["React Vite", "Tailwing CSS"],
    features: [
      "Tree-based and graph visualizations (e.g., binary search trees)",
      "Coming soon: Visualizations for graph algorithms like DFS, BFS, and Dijkstra",
      "Coming soon: Animated sorting algorithms (e.g., Merge Sort, Bubble Sort)",
    ],
    githubUrl: "https://github.com/Albionii/World-of-Algorithms",
    liveUrl: "https://world-of-algorithms-24.vercel.app/",
    duration: "ongoing",
    role: "Frontend website - Algorithm Visualization.",
    ongoing: true
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openProjectDetails = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-800">Albion Qerreti</h1>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-slate-600 hover:text-slate-800 transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-slate-600 hover:text-slate-800 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-slate-600 hover:text-slate-800 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 ">
        <div className="container mx-auto text-center bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="mb-8">
            <Image
              src="/me.jpeg?height=150&width=150"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Hi, I'm <span className="text-blue-600">Albion Qerreti</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            A passionate software developer who loves building useful and meaningful projects. 
            I specialize in Java and web development, with a strong interest in real-time apps, elegant UIs, and solving real-world problems through code.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white text-slate-700">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">About Me</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              I'm a dedicated developer with a passion for creating innovative solutions. With expertise in modern web
              technologies, I enjoy turning complex problems into simple, beautiful designs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Expertise in React, Next, and modern CSS frameworks to create responsive and interactive user
                  interfaces.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Proficient in Java, PHP, and database technologies to build robust server-side applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Great in relational databases like MySQL and SQL.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">My Projects</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development. Click on any
              project to see more details and screenshots.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-all cursor-pointer transform hover:scale-105"
                onClick={() => openProjectDetails(project)}
              >
                <div className="aspect-video relative bg-gray-200 flex items-center justify-center rounded-md overflow-hidden">
                 {project.ongoing && (
                    <div className="absolute top-2 left-2 z-10">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        Ongoing
                      </Badge>
                    </div>
                  )}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">

                      {project.githubUrl == "" ? 
                          (
                            
                            <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
                              <div className="hover:cursor-not-allowed">
                                <Github className="h-4 w-4" />
                              </div>
                            </Button>
                          ) : 
                          (
                            <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
                              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                      <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
                        {project.liveUrl != "" && (
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                        )}
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline">+{project.technologies.length - 4} more</Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">Click to view details →</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeProjectDetails}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image Gallery */}
                <div className="relative">
                  <div className="aspect-video relative bg-gray-200 flex items-center justify-center rounded-md overflow-hidden">
                    <Image
                      src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {selectedProject.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>

                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? "bg-white" : "bg-white/50"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Info */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Description</h4>
                      <p className="text-slate-600">{selectedProject.longDescription}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-slate-600">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Project Details</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Duration:</span> {selectedProject.duration}
                        </div>
                        <div>
                          <span className="font-medium">Role:</span> {selectedProject.role}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      {selectedProject.liveUrl != "" && (
                        <Button asChild>
                          <Link href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Live Demo
                          </Link>
                        </Button>
                      )}
                      <Button asChild>
                        {selectedProject.githubUrl == "" ? 
                          (
                            <div className="hover:cursor-not-allowed">
                              <Github className="h-4 w-4 mr-2" />
                              Private Repo
                            </div>
                          ) : 
                          (
                            <Link href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              View Source Code
                            </Link>
                          )}
                        
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Get In Touch</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work
            together!
          </p>

          <div className="flex items-center justify-center space-x-6">
            <Button variant="outline" size="lg" asChild className="bg-white text-slate-700">
              <Link href="mailto:qerretialbion@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Me
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white text-slate-700">
              <Link href="https://www.linkedin.com/in/albion-qerreti/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white text-slate-700">
              <Link href="https://github.com/Albionii" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-800 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Albion Qerreti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
