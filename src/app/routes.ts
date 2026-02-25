import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Publications } from "./pages/Publications";
import { Certifications } from "./pages/Certifications";
import { Products } from "./pages/Products";
import { Thoughts } from "./pages/Thoughts";
import { ThoughtDetails } from "./pages/ThoughtDetails";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "publications", Component: Publications },
      { path: "certifications", Component: Certifications },
      { path: "products", Component: Products },

{ path: "thoughts", Component: Thoughts },
{ path: "thoughts/:slug", Component: ThoughtDetails },

      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
