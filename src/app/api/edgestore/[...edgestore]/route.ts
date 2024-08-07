import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";

const edgestore = initEdgeStore.create();

const edgeStoreRouter = edgestore.router({
  myPublicImages: edgestore
    .imageBucket({
      maxSize: 1024 * 1024 * 1, // 1MB
    })
    .beforeUpload(() => {
      return true;
    })
    .beforeDelete(() => {
      return true;
    }),
});

const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

export { handler as GET, handler as POST };
export type EdgeStoreRouter = typeof edgeStoreRouter;
