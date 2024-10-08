import {setupWorker} from 'msw/browser'
import {productHandlers} from "@entities/product";

const apiMockWorker = setupWorker(
  ...productHandlers,
)

export async function startApiMockWorker() {
  await apiMockWorker.start({
    onUnhandledRequest(request, print) {
      const url = new URL(request.url)

      if (/\.png|jpg|svg|tsx?|css|jsx?|woff2$/.test(url.pathname)) {
        return
      }

      print.warning()
    },
  })
}
