import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
    context.locals.isHTMX = context.request.headers.get("HX-Request") === "true";
    return next();
});