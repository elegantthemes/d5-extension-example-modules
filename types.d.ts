// Global type declarations for Divi Visual Builder externals

declare global {
    interface Window {
        divi?: {
            moduleUtils?: {
                placeholderContent?: any;
                [key: string]: any;
            };
            fieldLibrary?: any;
            modal?: any;
            module?: any;
            moduleLibrary?: any;
            rest?: any;
            data?: any;
            styleLibrary?: any;
            iconLibrary?: any;
            [key: string]: any;
        };
    }
}

export { };
