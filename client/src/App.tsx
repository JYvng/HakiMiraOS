import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// adjust these imports to match your actual file names
import Home from "./pages/Home";        // <-- existing landing page
import NotFound from "@/pages/not-found";
import Mira from "./pages/Mira";        // <-- your new page

function Router() {
  return (
    <Switch>
      {/* main landing page */}
      <Route path="/" component={Home} />

      {/* new Mira page */}
      <Route path="/mira" component={Mira} />

      {/* 404 fallback */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
