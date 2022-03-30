import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@icbc/mf-login",
  app: () => System.import("@icbc/mf-login"),
  activeWhen: ["/login"],
});

registerApplication({
  name: "@icbc/mf-main",
  app: () => System.import("@icbc/mf-main"),
  activeWhen: ["/main"],
});

start({
  urlRerouteOnly: true,
});
