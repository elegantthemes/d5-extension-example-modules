import { rest } from 'msw';
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW.
initialize({
  onUnhandledRequest: ({ method, url }) => {
    // Temporarily disabled this as we have a lot of unhandled requests in our Storybook which need to be addressed first.
    // You can uncomment console.log for debugging purposes.
    // console.error(`Unhandled ${method} request to ${url}.

    //   This exception has been only logged in the console, however, it's strongly recommended to resolve this error as you don't want unmocked data in Storybook stories.

    //   If you wish to mock an error response, please refer to this guide: https://mswjs.io/docs/recipes/mocking-error-responses
    // `)
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: {
      auth: [
        rest.head('/iframe.html', (req, res, ctx) => res(res => {
          res.status = 201;
          res.headers.set('link', '<http://localhost:6006/wp-json/>; rel="https://api.w.org/"');
          return res;
        })),
      ],
    }
  },
}

// Provide the MSW addon decorator globally.
export const decorators = [mswDecorator];