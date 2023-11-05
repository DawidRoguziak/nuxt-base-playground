import type {RouteLocationNormalizedLoaded} from "vue-router";

export default defineNuxtRouteMiddleware((to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded) => {
    const userIsLoggedIn = false;
    if (!userIsLoggedIn) {
        return abortNavigation({
            message: 'You must be logged in to view this page',
            statusCode: 401,
            stack: undefined,
            name: 'Unauthorized'
        });
    }
})
