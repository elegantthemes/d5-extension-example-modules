# Static Module
It is an example of a static module. It will help you to understand the basic Divi 5 module without dynamic content. This module will contain the tests and storybook example too.

## Badge Feature - Custom Color Field Example

The Static Module includes a **badge element** that demonstrates how to implement custom color fields using the `decoration.color` pattern in Divi 5 custom modules. This example shows the complete flow from attribute definition to style application.

### What It Demonstrates

The badge feature provides a complete working example showing:

1. **Define custom color attribute** in `module.json` under `badge.settings.decoration.color`
2. **Set default color value** in `module-default-render-attributes.json`
3. **Apply color style in PHP** using `$elements->style()` with `advancedStyles` inside `Style::add`
4. **Apply color style in TypeScript** using `elements.style()` with `advancedStyles` inside `StyleContainer`

### Key Implementation Details

**Attribute Path Structure**: `attrs.badge.decoration.color`

**Component Used**: `divi/color-picker` (not `divi/color`)

**PHP Pattern** (`ModuleStylesTrait.php`):
```php
$elements->style([
    'attrName'   => 'badge',
    'styleProps' => [
        'advancedStyles' => [
            [
                'componentName' => 'divi/common',
                'props'         => [
                    'attr'     => $attrs['badge']['decoration']['color'] ?? [],
                    'property' => 'color',
                ],
            ],
        ],
    ],
])
```

**TypeScript Pattern** (`styles.tsx`):
```typescript
elements.style({
    attrName: 'badge',
    styleProps: {
        advancedStyles: [
            {
                componentName: 'divi/common',
                props: {
                    attr: attrs?.badge?.decoration?.color,
                    property: 'color',
                },
            },
        ],
    },
})
```

### Difference from Other Examples

- **Parent Module Example**: Shows `icon.advanced.color` pattern (uses `advanced` section)
- **Static Module Badge**: Shows `badge.decoration.color` pattern (uses `decoration` section)

This demonstrates the `decoration.color` pattern specifically, which is useful for text element colors (like badge text, pagination text, etc.) as opposed to the `advanced.color` pattern used for icon colors.

## Folder Structure
```
static-module
├── README.md
├── __mock-data__
│   └── attrs.ts
├── __tests__
│   ├── __snapshots__
│   │   └── edit.tsx.snap
│   └── edit.tsx
├── custom-css.ts
├── edit.tsx
├── index.ts
├── module.json
├── module.scss
├── placeholder-content.ts
├── settings-advanced.tsx
├── settings-content.tsx
├── settings-design.tsx
├── stories
│   └── edit.stories.tsx
├── style.scss
├── styles.tsx
└── types.ts
```
