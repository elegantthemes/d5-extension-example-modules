# Pull Request Draft

**Title:** `test(Example Modules): Add D4Module test stack for EX-05 (#50869)`

**Branch:** `50869-d5-3ps-tests-t3ps-ex-05-d4-modules` → `main`

**Issue:** [#50869](https://github.com/elegantthemes/Divi/issues/50869) — D5 :: Tests :: 3PS :: Track C :: EX-05 D4Module

**Commit:** _(pending)_ — `test(Example Modules): Add D4Module test stack for EX-05 (#50869)`

**Track:** Track C · step **5** of 9 · `d5-extension-example-modules`

---

## Summary

This PR adds the **EX-05 D4Module test stack** plus `divi-4/` build gate documentation. All changes are confined to this plugin repo. **No production module behavior is modified.**

| Side | Type | Assert |
|------|------|--------|
| PHP | unit | Conversion outline JSON valid; shortcode registration path |
| PHP | snapshot | FE heading renders as heading (not plain text) |
| TS | unit | Conversion attrs / preview contract |
| Build | L0 | `npm run build:divi-4` included in local test docs |

---

## Dependencies

| | |
|--|--|
| **Branch base** | `main` |
| **Recommended** | EX-02 / EX-03 / EX-04 — not required; may conflict on shared harness files when rebasing |

---

## Implementation process

1. **Branch from `main`** — created `50869-d5-3ps-tests-t3ps-ex-05-d4-modules`.
2. **PHP support layer** — added `D4ModuleTestSupport.php` with reset/register/render helpers and metadata/conversion-outline loaders.
3. **Render fixture** — added `d4-module-render-attrs.json` with title, `headingLevel: h2`, and content text.
4. **PHP unit — conversion + shortcode** — `D4ModuleConversionOutlineTest` validates built `conversion-outline.json` mappings and D4 shortcode wiring (`d4_module` in metadata, Divi4 PHP slug, `et_builder_ready` hook).
5. **PHP snapshot — heading output** — `D4ModuleRenderTest` asserts `<h2 class="example_d4_module_title">` (not plain `<div>` title) and matches HTML snapshot; normalizes `et_flex_module` for cross-Divi stability.
6. **TS conversion unit** — `conversion.test.ts` validates `d4Shortcode`, title `elementType: heading`, and TS/JSON conversion outline parity.
7. **Harness updates** — extended `jest.smoke.config.js`, `PluginSmokeTest.php`, and README with `npm run build:all` / `build:divi-4` prerequisites.
8. **Build gate** — ran `npm run build:all` (D5 `modules-json/` + `divi-4/build/`).
9. **Verification** — `composer test` and `npm test` pass 100% locally.

---

## What changed

### PHP (new)

| File | Purpose |
|------|---------|
| `tests/php/Support/D4ModuleTestSupport.php` | Reset state, register module, render/metadata helpers |
| `tests/php/fixtures/d4-module-render-attrs.json` | Render attrs fixture |
| `tests/php/Unit/D4ModuleConversionOutlineTest.php` | Conversion JSON + D4 shortcode path |
| `tests/php/Snapshot/D4ModuleRenderTest.php` | FE heading snapshot (not plain text) |
| `tests/php/Snapshot/__snapshots__/D4ModuleRenderTest__test_render_outputs_heading_html_snapshot__1.html` | Committed HTML snapshot |

### JavaScript (new)

| File | Purpose |
|------|---------|
| `src/components/d4-module/__tests__/conversion.test.ts` | Conversion attrs + preview contract |

### Harness / docs (modified)

| File | Purpose |
|------|---------|
| `test-config/jest.smoke.config.js` | Added D4Module conversion test to smoke `testMatch` |
| `tests/php/PluginSmokeTest.php` | Added D4Module Composer autoload smoke test |
| `README.md` | Documents `npm run build:all` and `npm run build:divi-4` before tests |

### Not modified (production / core)

- `modules/D4Module/**`
- `src/components/d4-module/*` (except new `__tests__/`)
- `divi-4/**`
- `d5-extension-example-modules.php`, webpack, Divi core

---

## Test plan

- [ ] Check out branch `50869-d5-3ps-tests-t3ps-ex-05-d4-modules`
- [ ] Copy `tests/php/.env.example` to `tests/php/.env` and set local paths (`WP_VERSION=7.0` or match your install)
- [ ] Use PHP 7.4 with `mysqli` enabled
- [ ] Run `composer install` and `npm install`
- [ ] Run `npm run build:all` (required — D5 `modules-json/d4-module/` and `divi-4/build/` are gitignored)
- [ ] Run `composer test` — expect **9** passing tests
- [ ] Run `npm test` — expect **4** passing tests (2 suites)
- [ ] Confirm `npm run build:all` passes (Definition of Done)
- [ ] Confirm plugin still loads in Divi Visual Builder (no runtime regressions)

### Local setup (example)

```bash
export PATH="/opt/homebrew/bin:$PATH"
export DIVI_PATH=/path/to/wp-content/themes/Divi
export DIVIDIR=$DIVI_PATH/includes/builder-5/visual-builder/build
export WPDIR=/path/to/wordpress/root

cd d5-extension-example-modules
cp tests/php/.env.example tests/php/.env
composer install
npm install
npm run build:all
composer test
npm test
```

---

## Verification report

Verified locally on **2026-07-07** using **PHP 7.4.33** with **mysqli** and WordPress **7.0**.

**Branch:** `50869-d5-3ps-tests-t3ps-ex-05-d4-modules`

### Step 1 — `npm run build:all`

```
webpack 5.91.0 compiled successfully (D5 + divi-4)
asset d5-extension-example-modules-divi4.js 1.05 KiB [emitted] [minimized]
```

### Step 2 — `composer test`

```
> phpunit '--testdox'
WordPress (installed): 7.0
PHPUnit 9.6.34 by Sebastian Bergmann and contributors.

Plugin Smoke
 ✔ Plugin main file exists
 ✔ Plugin path constant is defined
 ✔ Static module class is autoloaded
 ✔ D4 module class is autoloaded

D4Module Render
 ✔ Render outputs heading html snapshot

D4Module Conversion Outline
 ✔ Conversion outline json is valid and maps key attrs
 ✔ D4 shortcode registration path is wired

OK (9 tests, 26 assertions)
Time: 00:01.258, Memory: 162.00 MB

Note: `--testdox` also lists inherited `Dummy` tests from Divi's `DiviWPUnitTest` base class (2 extra rows). PHPUnit's summary above is authoritative — 9 tests, 26 assertions.
```

### Step 3 — `npm test`

```
PASS src/components/d4-module/__tests__/conversion.test.ts
PASS src/components/static-module/__tests__/module-json.test.ts

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Time:        1.776 s
Ran all test suites.
```

### Verification results

| Command | Result | Details |
|---------|--------|---------|
| `npm run build:all` | **PASS** | D5 + divi-4 webpack builds |
| `composer test` | **PASS** | 9 tests, 26 assertions |
| `npm test` | **PASS** | 2 suites, 4 tests |

### PHP tests

**Plugin Smoke (extended)**

1. Plugin main file exists on disk.
2. `D5_EXTENSION_EXAMPLE_MODULES_PATH` constant is defined after bootstrap.
3. `MEE\Modules\StaticModule\StaticModule` autoloads via Composer.
4. `MEE\Modules\D4Module\D4Module` autoloads via Composer.

**D4Module Conversion Outline (unit)**

1. Built `modules-json/d4-module/conversion-outline.json` parses and maps `title`, `content`, and `header_level`.
2. `module.json` `d4Shortcode` is `d4_module`.
3. `divi-4/modules/Divi4Module/Divi4Module.php` defines `$slug = 'd4_module'`.
4. Plugin registers D4 modules on `et_builder_ready`.

**D4Module Render (snapshot)**

1. Title renders as `<h2 class="example_d4_module_title">` — not a plain `<div>` title.
2. Snapshot content includes title and body text.
3. Normalized HTML matches committed snapshot.

### JS tests

**D4 Module conversion**

1. `module.json` — `d4Shortcode: d4_module`, title `elementType: heading`.
2. `conversion-outline.ts` matches `conversion-outline.json` for module/css/advanced mappings.
3. `header_level` maps to `title.decoration.font.font.*.headingLevel`.

---

## Notes for reviewers

- PHPUnit bootstraps through Divi's existing WP test suite via `DIVI_PATH` (read-only; no Divi repo changes).
- Run `npm run build:all` before `composer test` — PHP tests require `modules-json/d4-module/` (D5 build) and conversion outline JSON copied at build time.
- Snapshot HTML normalizes `et_flex_module` before comparison to reduce Divi version drift across environments.
- `npm test` includes the D4Module conversion test added in this PR.
- PHPUnit requires a PHP binary with the `mysqli` extension. Use PHP 7.4 if that is your local standard.
- WooCommerce may be required by Divi's PHPUnit bootstrap depending on environment setup.
- No GitHub Actions added (local-only execution per Track C v1 scope).

---

## Out of scope

- EX-02 StaticModule, EX-03 DynamicModule, EX-04 Parent+Child test stacks (separate PRs)
- Manual Visual Builder checklist (EX-09)
- Production module code changes
- Changes outside `d5-extension-example-modules`
