/**
 * Use SVGO to optimize the SVG file removing:
 * - Comments
 * - Dimensions
 * - Metadata
 * - Icomoon ignore comments
 */
export default {
    js2svg: { 
        indent: 2, 
        pretty: true 
    },
    plugins: [
        "removeComments",
        "removeDimensions",
        "removeMetadata",
        {
            name: "removeElementsByAttr",
            params: {
                id: [
                    'icomoon-ignore'
                ]
            }
        }
    ]
}