import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// 🔹 OLD landing page (whatever the original was)
import OldLanding from "./pages/Home";   // ⬅️ change "Home" to the actual file name if different

// 🔹 NEW DFY page (you saved this as Mira.tsx)
import Mira from "./pages/Mira";

import NotFound from "e/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* NEW DFY homepage */}
      <Route path="/" component={Mira} />

      {/* OLD SaaS / original page now lives under /app */}
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
