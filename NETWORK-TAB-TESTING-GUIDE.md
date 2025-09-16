# Network Tab Testing Guide - Smart Loading Validation

## What to Monitor in Browser Network Tab

### Key Files to Watch

#### JavaScript Bundle Files
- **d5-extension-example-modules bundle**: `/wp-content/plugins/d5-extension-example-modules/scripts/bundle.js`
- **Divi 4 Framework**: Look for D4-specific JS files (et-builder-modules-script, etc.)
- **Divi 5 Framework**: D5-specific bundle files

#### CSS Bundle Files
- **Plugin styles**: `/wp-content/plugins/d5-extension-example-modules/styles/bundle.css`
- **Divi framework CSS**: Both D4 and D5 style dependencies

## Expected Behavior Differences

### Scenario 1: Pure D5 Page (No Legacy Content)

**Expected Network Activity:**
```
✓ d5-extension-example-modules/scripts/bundle.js - LOADS (contains StaticModule)
✓ d5-extension-example-modules/styles/bundle.css - LOADS
✓ Divi 5 core bundles - LOAD
✗ Divi 4 framework files - SHOULD NOT LOAD
✗ Additional D4-specific scripts - SHOULD NOT LOAD
```

**What This Proves:**
- Smart loading is working correctly
- No unnecessary D4 framework overhead
- Optimal performance for D5-only content

### Scenario 2: D5 Page with Legacy D4 Content

**Expected Network Activity:**
```
✓ d5-extension-example-modules/scripts/bundle.js - LOADS (StaticModule)
✓ d5-extension-example-modules/styles/bundle.css - LOADS
✓ Divi 5 core bundles - LOAD
✓ Divi 4 framework files - NOW LOADS (triggered by legacy content)
✓ Additional D4 compatibility scripts - LOADS
```

**What This Proves:**
- Smart loading detected legacy content
- D4 framework loaded on-demand
- Both D4 and D5 modules can coexist

## Specific Network Tab Steps

### Testing Pure D5 Performance
1. **Create new page** with only StaticModule (D5)
2. **Open Network tab** before loading
3. **Load page** and filter by "JS" and "CSS"
4. **Look for absence** of D4 framework files
5. **Verify** only essential bundles load

### Testing Smart Loading Trigger
1. **Create page** with Divi4OnlyModule legacy content
2. **Open Network tab** before loading
3. **Load page** and watch for sequential loading
4. **Observe** D4 framework files appear
5. **Compare** bundle sizes between scenarios

## Performance Metrics to Compare

### Bundle Size Analysis
- **Pure D5**: Record total JS/CSS size loaded
- **With Legacy**: Record additional overhead from D4 framework
- **Difference**: Calculate performance savings from smart loading

### Load Timing
- **Time to First Paint**: Compare D5-only vs legacy content pages
- **DOMContentLoaded**: Measure framework loading impact
- **Network Waterfall**: Observe loading sequence differences

## Red Flags to Watch For

### Performance Issues
- **D4 framework loading on pure D5 pages** = Smart loading broken
- **Excessive bundle sizes** = Unnecessary code loading
- **Multiple duplicate requests** = Hook firing multiple times

### Loading Errors
- **404 errors** for missing D4 files = Framework not properly loaded
- **JavaScript errors** in console = Module registration issues
- **CSS missing** = Styling dependencies not loading

## Debug Console Correlation

### Match Network Activity with Debug Logs
```bash
# Check debug.log for correlation
[Smart Loading] Divi 5 detected - setting up smart loading
# Network: Only D5 bundles should load

[Smart Loading] d5_extension_example_module_initialize_d4_modules called
# Network: D4 framework files should start loading
```

## Testing Checklist

### Pure D5 Page
- [ ] Only plugin bundle.js loads (11.8KB baseline)
- [ ] No D4 framework JavaScript files
- [ ] No unnecessary CSS dependencies
- [ ] StaticModule functions correctly

### Legacy Content Page
- [ ] Plugin bundle.js loads first
- [ ] D4 framework files load after detection
- [ ] Both StaticModule and Divi4OnlyModule render
- [ ] Total bundle size includes D4 overhead

### Performance Comparison
- [ ] Record pure D5 total bundle size
- [ ] Record legacy content total bundle size
- [ ] Calculate smart loading savings
- [ ] Verify performance improvement in D5-only scenarios
