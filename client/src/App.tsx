import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// 🔹 NEW DFY PAGE (you saved this as Mira.tsx)
import Mira from "./pages/Mira";

// 🔹 OLD LANDING PAGE (change Landing to whatever your file is actually called)
//    Example: "./pages/Home" or "./pages/Index"
import OldLanding from "./pages/Landing";

import NotFound from "e/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* NEW DFY homepage → haki.network/ */}
      <Route path="/" component={Mira} />

      {/* OLD SaaS landing → haki.network/app */}
      <Route path="/app" component={OldLanding} />

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

