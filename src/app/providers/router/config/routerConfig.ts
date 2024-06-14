export enum AppRoutes {
    MAIN = 'main',
    EXTENDED = 'extended',
    THANKS = 'thanks',
    ALREADY_PASSED = 'already_passed'
}

export const RouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: 'main',
    [AppRoutes.EXTENDED]: 'extended',
    [AppRoutes.THANKS]: 'thanks',
    [AppRoutes.ALREADY_PASSED]: 'already_passed'
}