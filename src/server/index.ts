import { createServer, Model } from "miragejs";

export function makeServer({ environment }: { environment: string }) {
  return createServer({
    environment,
    models: {
      vans: Model,
    },

    routes() {
      this.namespace = "api";
      this.resource("vans");
    },
  });
}
